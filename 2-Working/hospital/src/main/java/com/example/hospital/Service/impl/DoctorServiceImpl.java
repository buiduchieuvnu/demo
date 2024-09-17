package com.example.hospital.Service.impl;

import com.example.hospital.Converter.DoctorConverter;
import com.example.hospital.Entity.UserEntity;
import com.example.hospital.Model.request.DoctorRequest;
import com.example.hospital.Model.response.DoctorResponse;
import com.example.hospital.Repository.UserRepository;
import com.example.hospital.Service.DoctorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class DoctorServiceImpl implements DoctorService {
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private DoctorConverter doctorConverter;


    @Override
    public List<DoctorResponse> findByRequest(DoctorRequest request) {
        List<UserEntity> list = userRepository.findDoctorByRequest(request);
        List<DoctorResponse> responses = new ArrayList<>();
        for (UserEntity user : list) {
            DoctorResponse doctorResponse = doctorConverter.ConverterFromUserEntity(user);
            responses.add(doctorResponse);
        }
        return responses;
    }
}
