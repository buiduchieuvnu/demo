package com.example.hospital.API;

import com.example.hospital.Model.dto.DoctorDTO;
import com.example.hospital.Model.dto.ReceptionistDTO;
import com.example.hospital.Model.dto.UserDTO;
import com.example.hospital.Model.request.BrowseAppoinmentRequest;
import com.example.hospital.Service.DoctorService;
import com.example.hospital.Service.ReceptionistService;
import com.example.hospital.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/hospital/users/")
public class UserAPI {

    @Autowired
    private UserService userService;

    @Autowired
    private DoctorService doctorService;

    @Autowired
    private ReceptionistService receptionistService;

    @PostMapping("/register")
    public void Register(@RequestBody UserDTO userDTO) {
        userService.Register(userDTO);
    }

    @PostMapping("/login")
    public String Login(@RequestBody UserDTO userDTO) {
        String token = userService.Login(userDTO);
        return token;
    }

    @PostMapping("/doctor")
    public void AddDoctor(@RequestBody DoctorDTO doctorDTO) {
        doctorService.addDoctor(doctorDTO);
    }

    @PostMapping("/receptionist")
    public void AddReceptionist (@RequestBody ReceptionistDTO receptionistDTO) {
        receptionistService.AddReceptionist(receptionistDTO);
    }

    @PostMapping("/appointment")
    public void BorowesAppointment (@RequestBody BrowseAppoinmentRequest browseAppoinmentRequest){
        receptionistService.BrowseAppointment(browseAppoinmentRequest);
    }



}
