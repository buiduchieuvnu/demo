package com.example.hospital.Service.impl;

import com.example.hospital.Converter.AppointmentConverter;
import com.example.hospital.Entity.*;
import com.example.hospital.Model.dto.AddMedicalFileDTO;
import com.example.hospital.Model.request.AppointmentRequest;
import com.example.hospital.Model.request.ServiceRequest;
import com.example.hospital.Model.response.MedicalFileResponse;
import com.example.hospital.Repository.*;
import com.example.hospital.Service.PatientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class PatientServiceImpl implements PatientService {
    @Autowired
    private PatientRepository patientRepository;

    @Autowired
    private AppointmentsRepository appointmentsRepository;

    @Autowired
    private ServiceRepository serviceRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private MedicalFilesRepository medicalFilesRepository;

    @Autowired
    private AppointmentConverter appointmentConverter;

    @Override
    public void MakeAppointment(AppointmentRequest appointmentRequest) {
        String username = SecurityContextHolder.getContext().getAuthentication().getName();
        UserEntity userEntity = userRepository.findByUsername(username);
        PatientEntity patient = userEntity.getListPatient().get(0);
        AppointmentsEntity appointmentsEntity = AppointmentsEntity.builder()
                .note(appointmentRequest.getNote())
                .status(0)
                .dateOfWeek(appointmentConverter.dateOfWeek(appointmentRequest.getAppointmentDate()))
                .appoinmentDate(appointmentRequest.getAppointmentDate())
                .patient(patient)
                .build();
        appointmentsRepository.save(appointmentsEntity);
    }

    @Override
    public void MakeService(ServiceRequest serviceRequest) {
        String username = SecurityContextHolder.getContext().getAuthentication().getName();
        UserEntity userEntity = userRepository.findByUsername(username);
        PatientEntity patient = userEntity.getListPatient().get(0);
        ServicesEntity servicesEntity = serviceRepository.findById(serviceRequest.getId()).get();
        AppointmentsEntity appointmentsEntity = AppointmentsEntity.builder()
                .note("Đăng kí dịch vụ " + servicesEntity.getName())
                .status(0)
                .dateOfWeek(serviceRequest.getDateOfWeek().stream()
                        .collect(Collectors.joining(" ")))
                .patient(patient)
                .build();
        appointmentsRepository.save(appointmentsEntity);

    }

    @Override
    public List<MedicalFileResponse> ListMedicalFiles() {
        String username = SecurityContextHolder.getContext().getAuthentication().getName();
        UserEntity userEntity = userRepository.findByUsername(username);
        PatientEntity patient = userEntity.getListPatient().get(0);
        List<MedicalFilesEntity> list = patient.getListMedicalFiles();
        List<MedicalFileResponse> responses = new ArrayList<>();
        for (MedicalFilesEntity medicalFilesEntity : list) {
            MedicalFileResponse medicalFileResponse = MedicalFileResponse.builder()
                    .patientIllness(medicalFilesEntity.getPatientIllness())
                    .treatmentProcess(medicalFilesEntity.getTreatmentProcess())
                    .treatmentDate(medicalFilesEntity.getCreatedDate())
                    .build();
            responses.add(medicalFileResponse);
        }
        return responses;
    }

    @Override
    public void AddMedicalFile(AddMedicalFileDTO addMedicalFileDTO) {
        PatientEntity patient = patientRepository.findById(addMedicalFileDTO.getId()).get();
        MedicalFilesEntity medicalFilesEntity = MedicalFilesEntity.builder()
                .patientIllness(addMedicalFileDTO.getPatientIllness())
                .treatmentProcess(addMedicalFileDTO.getTreatmentProcess())
                .status(1)
                .patient(patient)
                .build();
        medicalFilesRepository.save(medicalFilesEntity);
    }
}
