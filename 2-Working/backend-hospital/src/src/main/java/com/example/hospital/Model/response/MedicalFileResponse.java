package com.example.hospital.Model.response;


import lombok.*;
import lombok.experimental.FieldDefaults;

import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@FieldDefaults(level = AccessLevel.PRIVATE)
public class MedicalFileResponse {
    String patientIllness;
    String treatmentProcess;
    Date treatmentDate;
}
