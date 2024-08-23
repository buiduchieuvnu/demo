package com.example.identity_service.dto.request;

import jakarta.validation.constraints.Size;
import lombok.*;
import lombok.experimental.FieldDefaults;


import java.time.LocalDate;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@FieldDefaults(level = AccessLevel.PRIVATE)
public class UserCreateRequest {
    String username;
    @Size(min = 8, message = "Tối thiểu 8 ký tự")
    String password;
    String firstname;
    String lastname;
    LocalDate dob;


}
