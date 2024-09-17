package com.example.hospital.Service;

import com.example.hospital.Model.dto.UserDTO;
import com.example.hospital.Model.request.PatientRequest;
import com.example.hospital.Model.response.PatientResponse;

import java.util.List;

public interface UserService {
    List<PatientResponse> findByRequest(PatientRequest request);
    void Register(UserDTO userDTO);
    String Login(UserDTO userDTO );

}
