package com.example.hospital.Converter;

import com.example.hospital.Entity.AppointmentsEntity;
import com.example.hospital.Entity.PatientEntity;
import com.example.hospital.Entity.UserEntity;
import com.example.hospital.Model.response.AppointmentResponse;
import com.example.hospital.Repository.PatientRepository;
import com.example.hospital.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.time.DayOfWeek;
import java.time.Instant;
import java.time.LocalDate;
import java.time.ZoneId;
import java.util.Date;

@Component
public class AppointmentConverter {



    public AppointmentResponse ConverterFromEntity (AppointmentsEntity appointmentsEntity) {
        PatientEntity patientEntity = appointmentsEntity.getPatient();
        UserEntity userEntity = patientEntity.getUsers();
        AppointmentResponse appointmentResponse = AppointmentResponse.builder()
                .phone(userEntity.getPhone())
                .id(appointmentsEntity.getId())
                .email(userEntity.getEmail())
                .status(appointmentsEntity.getStatus())
                .note(appointmentsEntity.getNote())
                .dateOfWeek(appointmentsEntity.getDateOfWeek())
                .appointmentDate(appointmentsEntity.getAppoinmentDate())
                .fullName(userEntity.getFullname())
                .username(userEntity.getUsername())
                .build();

        return appointmentResponse;
    }

    public String dateOfWeek (Date appointmentDate) {
        LocalDate localDate = Instant.ofEpochMilli(appointmentDate.getTime())
                .atZone(ZoneId.systemDefault())
                .toLocalDate();
        DayOfWeek dayOfWeek = localDate.getDayOfWeek();
        String str = dayOfWeek.toString();
        return str;
    }
}
