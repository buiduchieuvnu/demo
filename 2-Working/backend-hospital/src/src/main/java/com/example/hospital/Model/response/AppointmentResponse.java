package com.example.hospital.Model.response;

import lombok.*;
import lombok.experimental.FieldDefaults;

import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@FieldDefaults(level = AccessLevel.PRIVATE)
public class AppointmentResponse {
    Long id;
    String note;
    String username;
    String phone;
    Integer status;
    String email;
    String fullName;
    String dateOfWeek;
    Date appointmentDate;
}
