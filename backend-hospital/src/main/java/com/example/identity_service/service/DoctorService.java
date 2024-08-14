package com.example.identity_service.service;

import com.example.identity_service.dto.request.DoctorUpdateRequest;
import com.example.identity_service.dto.request.UserUpdateRequest;
import  com.example.identity_service.entity.Doctor;
import com.example.identity_service.dto.request.DoctorCreateRequest;
import com.example.identity_service.entity.User;
import com.example.identity_service.repository.DoctorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DoctorService {
    @Autowired
    private DoctorRepository doctorRepository;

    public Doctor createDoctor(DoctorCreateRequest request) {
        Doctor doctor = new Doctor();

        doctor.setNamedoctor(request.getNamedoctor());
        doctor.setEmail(request.getEmail());
        doctor.setNumberphone(request.getNamedoctor());
        doctor.setSpecialize(request.getSpecialize());
        doctor.setClinic_id(request.getClinic_id());

        //
        return doctorRepository.save(doctor);
    };

    // update doctor
    public Doctor updateDoctor(String doctorId, DoctorUpdateRequest request) {
         Doctor doctor = getDoctors(doctorId);

        doctor.setNamedoctor(request.getNamedoctor());
        doctor.setEmail(request.getEmail());
        doctor.setNumberphone(request.getNamedoctor());
        doctor.setSpecialize(request.getSpecialize());
        doctor.setClinic_id(request.getClinic_id());

        return doctorRepository.save(doctor);
    }

    public List<Doctor> getDoctors() {
        return doctorRepository.findAll();
    }

    // delete

    public void deleteDoctors(String doctorId) {
        doctorRepository.deleteById(doctorId);
    }

    // orElseThrow(): nếu giá trị null hàm sẽ trả ra một thông báo đã cài đặt trước đó
    public Doctor getDoctors(String id) {
        return doctorRepository.findById(id).orElseThrow(() -> new RuntimeException("Doctor not found"));
    }
}
