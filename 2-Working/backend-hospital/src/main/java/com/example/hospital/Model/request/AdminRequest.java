package com.example.hospital.Model.request;

import lombok.*;
import lombok.experimental.FieldDefaults;

import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@FieldDefaults(level = AccessLevel.PRIVATE)
public class AdminRequest {
    String position;
    String username ;
    String password ;
    Integer status ;
    String phone ;
    String email ;
    String fullname ;
    Date date_of_birth ;
    String roles ;
}