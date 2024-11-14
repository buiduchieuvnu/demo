package com.example.hospital.Model.dto;

import jakarta.persistence.Column;
import lombok.*;
import lombok.experimental.FieldDefaults;

import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@FieldDefaults(level = AccessLevel.PRIVATE)
public class AdminDTO {
    Long id;
    String potision;
    String username ;
    String password ;
    Integer status ;
    String phone ;
    String email ;
    String fullname ;
    Date date_of_birth ;
    String roles ;

}
