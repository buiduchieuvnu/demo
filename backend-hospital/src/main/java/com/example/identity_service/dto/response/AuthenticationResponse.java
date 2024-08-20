package com.example.identity_service.dto.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class AuthenticationResponse {
    //trả về 1 token cho người dùng cho những lần request tiếp theo
    String token;
    // authenticated true thi cung cap dung mat khau, password
    boolean authenticated;
}
