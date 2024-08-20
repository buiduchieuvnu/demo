package com.example.identity_service.service;

import com.example.identity_service.dto.request.AuthenticationRequest;
import com.example.identity_service.dto.request.IntrospectRequest;
import com.example.identity_service.dto.response.AuthenticationResponse;
import com.example.identity_service.dto.response.IntrospectResponse;
import com.example.identity_service.exception.AppException;
import com.example.identity_service.exception.ErrorCode;
import com.example.identity_service.repository.UserRepository;
import com.nimbusds.jose.*;
import com.nimbusds.jose.crypto.MACSigner;
import com.nimbusds.jose.crypto.MACVerifier;
import com.nimbusds.jwt.JWTClaimsSet;
import com.nimbusds.jwt.SignedJWT;
import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import lombok.experimental.NonFinal;
import lombok.extern.slf4j.Slf4j;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.text.ParseException;
import java.time.Instant;
import java.time.temporal.ChronoUnit;
import java.util.Date;

@Service
@RequiredArgsConstructor
@Slf4j
@FieldDefaults(level = AccessLevel.PRIVATE, makeFinal = true)
public class AuthenticationService {
    private static final Logger log = LoggerFactory.getLogger(AuthenticationService.class);
    UserRepository userRepository;
    // lay ra password, username cua 1 user
    @NonFinal
    protected static final String SIGNER_KEY = "L1wfHX6Xmk3/S0CACCsYXVg0UGRhNjvtnh8ntOgKPrFX3BBKvJ23pFMSTkjcAgm/";


    // xác thưc token
    public IntrospectResponse introspect(IntrospectRequest request) throws JOSEException, ParseException {
        var token = request.getToken();

        // xác minh
        JWSVerifier verifier = new MACVerifier(SIGNER_KEY.getBytes());

        SignedJWT signedJWT = SignedJWT.parse(token);

        Date expityTime = signedJWT.getJWTClaimsSet().getExpirationTime();

        var verified =  signedJWT.verify(verifier);

        return IntrospectResponse.builder()
                .valid(verified && expityTime.after(new Date()))
                .build();
    }

    public AuthenticationResponse authenticate(AuthenticationRequest request) {

        var user = userRepository.findByUsername(request.getUsername()).orElseThrow(()->new AppException(ErrorCode.USER_NOT_EXISTED));
        // matches
        PasswordEncoder passwordEncoder = new BCryptPasswordEncoder(10);
        boolean authenticated = passwordEncoder.matches(request.getPassword(), user.getPassword());

        if(!authenticated)
            throw new AppException(ErrorCode.LOG_NOT_SUCCESS);

        var token = generateToken(request.getUsername());

        return AuthenticationResponse.builder()
                .token(token)
                .authenticated(true)
                .build();
    }

    // method tạo token
    private String generateToken(String username) {
        // header chứa thuật toán bảo vệ token
        JWSHeader header = new JWSHeader(JWSAlgorithm.HS512);
        // payload
        JWTClaimsSet jwtClaimsSet = new JWTClaimsSet.Builder()
                // đại diện cho user đăng nhập
                .subject(username)
                // xác định token này được phát hành từ ai
                .issuer("example.com")
                .issueTime(new Date())
                // xac định thời hạn của token
                .expirationTime(new Date(
                        Instant.now().plus(1, ChronoUnit.HOURS).toEpochMilli()
                ))
                .claim("customClaim", "Custom")
                .build();

        Payload payload = new Payload(jwtClaimsSet.toJSONObject());

        JWSObject jwsObject = new JWSObject(header, payload);

        // giai đoạn 2: ký token

        try {
            jwsObject.sign(new MACSigner(SIGNER_KEY.getBytes()));
            //Phương thức này chuyển đổi đối tượng jwsObject (sau khi đã được ký) thành một chuỗi JWT hợp lệ. JWT này có thể được gửi đi
            return jwsObject.serialize();
        } catch (JOSEException e) {
            log.error("Can not create token",  e);
            throw new RuntimeException(e);
        }
    }
}
