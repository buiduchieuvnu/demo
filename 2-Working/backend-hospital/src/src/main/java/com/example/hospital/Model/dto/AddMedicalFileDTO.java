package com.example.hospital.Model.dto;

import lombok.*;
import lombok.experimental.FieldDefaults;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@FieldDefaults(level = AccessLevel.PRIVATE)
public class AddMedicalFileDTO {
    Long id;   // id cua patient
    String patientIllness;
    String treatmentProcess;
}
