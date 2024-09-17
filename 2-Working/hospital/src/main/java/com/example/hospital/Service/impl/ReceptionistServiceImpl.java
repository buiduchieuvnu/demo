package com.example.hospital.Service.impl;

import com.example.hospital.Entity.AppointmentsEntity;
import com.example.hospital.Entity.DoctorEntity;
import com.example.hospital.Model.request.BrowseAppoinmentRequest;
import com.example.hospital.Repository.AppointmentsRepository;
import com.example.hospital.Repository.DoctorRepository;
import com.example.hospital.Repository.ReceptionistRepository;
import com.example.hospital.Service.ReceptionistService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ReceptionistServiceImpl implements ReceptionistService {
    @Autowired
    private ReceptionistRepository receptionistRepository;

    @Autowired
    private AppointmentsRepository appointmentsRepository;

    @Autowired
    private DoctorRepository doctorRepository;


    @Override
    public void BrowseAppointment(BrowseAppoinmentRequest browseAppoinmentRequest) {
        AppointmentsEntity appointmentsEntity = appointmentsRepository.findById(
                browseAppoinmentRequest.getAppoinmentId()).get();
        appointmentsEntity.setAppoinmentDate(browseAppoinmentRequest.getAppointmentDate());
        DoctorEntity doctorEntity = doctorRepository.findById(browseAppoinmentRequest.getDoctorId()).get();
        appointmentsEntity.setDoctors(doctorEntity);
        appointmentsEntity.setStatus(browseAppoinmentRequest.getStatus());
        appointmentsRepository.save(appointmentsEntity);
    }
}
