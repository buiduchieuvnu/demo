package com.example.identity_service.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.*;
import lombok.experimental.FieldDefaults;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@FieldDefaults(level = AccessLevel.PRIVATE)
@Entity
public class Doctor {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)  // định nghĩa các chuỗi id được render ngẫu nhiên
    String id;
    String namedoctor;
    String specialize;
    String numberphone;
    String email;
    int clinic_id;


}
