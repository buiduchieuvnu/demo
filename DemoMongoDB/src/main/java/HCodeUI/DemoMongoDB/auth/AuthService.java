package HCodeUI.DemoMongoDB.auth;

import HCodeUI.DemoMongoDB.model.User;
import HCodeUI.DemoMongoDB.service.UserService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

@Service
@AllArgsConstructor
public class AuthService {
    private final UserService userService;

    public ResponseEntity<AuthResponse> register(RegisterRequest registerRequest) {
        if(userService.existByEmail(registerRequest.getEmail())){
            AuthResponse response = AuthResponse.builder()
                    .code("1")
                    .msg("Email already exists")
                    .build();
            return ResponseEntity.status(HttpStatus.CONFLICT).body(response);
        }
        User user = User.builder().firstName(registerRequest.getFirstname()).lastName(registerRequest.getLastname()).email(registerRequest.getEmail()).gender(registerRequest.getGender()).created(LocalDateTime.now()).build();
        userService.insert(user);
        AuthResponse response =  AuthResponse.builder().code("0").msg("Accept").build();
        return ResponseEntity.ok(response);
    }
}
