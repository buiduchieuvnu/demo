package com.example.identity_service.dto.request;

import com.example.identity_service.entity.Doctor;
import com.example.identity_service.entity.User;
import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.FieldDefaults;


import java.time.LocalDate;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@FieldDefaults(level = AccessLevel.PRIVATE)
public class OrderCreateRequest {

        @ManyToOne
        @JoinColumn(name = "user_id", nullable = false)
        User user;
        @ManyToOne
        @JoinColumn(name = "doctor_id", nullable = false)
        Doctor doctor;

        LocalDate date;
        String note;



}
