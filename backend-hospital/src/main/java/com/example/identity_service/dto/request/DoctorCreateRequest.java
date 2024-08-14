package com.example.identity_service.dto.request;


import lombok.*;
import lombok.experimental.FieldDefaults;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@FieldDefaults(level = AccessLevel.PRIVATE)
public class DoctorCreateRequest {
        String namedoctor;
        String specialize;
        String numberphone;
        String email;
        int clinic_id;
}
