package com.example.identity_service.dto.request;

import lombok.*;
import lombok.experimental.FieldDefaults;


@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@FieldDefaults(level = AccessLevel.PRIVATE)
public class DoctorUpdateRequest {
    private String namedoctor;
    private String specialize;
    private String numberphone;
    private String email;
    private int clinic_id;


}
