package com.example.hospital.Service.impl;

import com.example.hospital.Converter.AppointmentConverter;
import com.example.hospital.Entity.AppointmentsEntity;
import com.example.hospital.Entity.DoctorEntity;
import com.example.hospital.Entity.PatientEntity;
import com.example.hospital.Entity.UserEntity;
import com.example.hospital.Model.response.AppointmentResponse;
import com.example.hospital.Repository.AppointmentsRepository;
import com.example.hospital.Repository.UserRepository;
import com.example.hospital.Service.AppointmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class AppointmentServiceImpl implements AppointmentService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private AppointmentsRepository appointmentsRepository;

    @Autowired
    private AppointmentConverter appointmentConverter;


    @Override
    public List<AppointmentResponse> listAppointments() {
        List<AppointmentsEntity> entityList = appointmentsRepository.findByStatus(0);
        List<AppointmentResponse> responseList = new ArrayList<>();
        for (AppointmentsEntity entity : entityList) {
            AppointmentResponse appointmentResponse = appointmentConverter.ConverterFromEntity(entity);
            responseList.add(appointmentResponse);
        }
        return responseList;
    }

    @Override
    public List<AppointmentResponse> listAppointmentsOfDoctor() {
        String username = SecurityContextHolder.getContext().getAuthentication().getName();
        UserEntity userEntity = userRepository.findByUsername(username);
        DoctorEntity doctorEntity = userEntity.getListDoctor().get(0);
        List<AppointmentsEntity> entityList = doctorEntity.getListAppointments();
        List<AppointmentResponse> responseList = new ArrayList<>();
        for (AppointmentsEntity entity : entityList) {
            AppointmentResponse appointmentResponse = appointmentConverter.ConverterFromEntity(entity);
            responseList.add(appointmentResponse);
        }
        return responseList;
    }
}
