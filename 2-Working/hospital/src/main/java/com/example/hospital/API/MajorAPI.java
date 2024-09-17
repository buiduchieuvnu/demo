package com.example.hospital.API;

import com.example.hospital.Entity.MajorEntity;
import com.example.hospital.Model.dto.MajorDTO;
import com.example.hospital.Model.dto.ServiceDTO;
import com.example.hospital.Model.request.ServiceRequest;
import com.example.hospital.Repository.MajorRepository;
import com.example.hospital.Service.MajorService;
import com.example.hospital.Service.PatientService;
import com.example.hospital.Service.ServiceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/hospital/major/")
public class MajorAPI {
    @Autowired
    private MajorService majorService;

    @Autowired
    private ServiceService serviceService;

    @Autowired
    private PatientService patientService;

    @PostMapping
    public void AddMajor (@RequestBody MajorDTO majorDTO){
        majorService.addMajor(majorDTO);
    }

    @PostMapping("/service")
    public void AddService (@RequestBody ServiceDTO serviceDTO){
        serviceService.addService(serviceDTO);
    }

    @PostMapping("/service/appointment")
    public void MakeAppointment (@RequestBody ServiceRequest serviceRequest){
        patientService.MakeService(serviceRequest);
    }

}
