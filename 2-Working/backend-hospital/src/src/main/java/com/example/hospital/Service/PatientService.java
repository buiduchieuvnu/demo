package com.example.hospital.Service;



import com.example.hospital.Model.dto.AddMedicalFileDTO;
import com.example.hospital.Model.request.AppointmentRequest;
import com.example.hospital.Model.request.ServiceRequest;
import com.example.hospital.Model.response.MedicalFileResponse;

import java.util.List;

public interface PatientService {
    void MakeAppointment (AppointmentRequest appointmentRequest);
    void MakeService(ServiceRequest serviceRequest);
    List<MedicalFileResponse> ListMedicalFiles();
    void AddMedicalFile(AddMedicalFileDTO addMedicalFileDTO);

}
