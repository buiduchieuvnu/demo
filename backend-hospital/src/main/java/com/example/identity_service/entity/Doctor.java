package com.example.identity_service.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;

@Entity
@Data
public class Doctor {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)  // định nghĩa các chuỗi id được render ngẫu nhiên
    private String id;
    private String namedoctor;
    private String specialize;
    private String numberphone;
    private String email;
    private int clinic_id;


}
