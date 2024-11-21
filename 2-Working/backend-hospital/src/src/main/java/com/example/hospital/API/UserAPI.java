package com.example.hospital.API;

import com.example.hospital.Model.dto.*;
import com.example.hospital.Model.request.*;
import com.example.hospital.Model.response.AppointmentResponse;
import com.example.hospital.Model.response.DoctorResponse;
import com.example.hospital.Model.response.MedicalFileResponse;
import com.example.hospital.Model.response.PatientResponse;
import com.example.hospital.Service.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/hospital/users/")
//@CrossOrigin(origins = "http://localhost:4200")
public class UserAPI {

    @Autowired
    private UserService userService;

    @Autowired
    private DoctorService doctorService;

    @Autowired
    private ReceptionistService receptionistService;

    @Autowired
    private PatientService patientService;

    @Autowired
    private AppointmentService appointmentService;

    @Autowired
    private AdminService adminService;

    // dang ky
    @PostMapping("/register")
    public void Register(@RequestBody UserDTORegister userDTO) {
        userService.Register(userDTO);
    }

    // dang nhap
    @PostMapping("/login")
    public String Login(@RequestBody UserDTOLogin userDTO) {
        return userService.Login(userDTO);
    }

    // thay doi mat khau
    @PutMapping ("/password")
    public void ChangePassword (@RequestBody PasswordDTO passwordDTO){
        userService.ChangePassword(passwordDTO);
    }

    // dat lich kham tu phia benh nhan
    @PostMapping("/patient/appointment")
    public void MakeAppointment( @RequestBody AppointmentRequest appointmentRequest) {
        patientService.MakeAppointment(appointmentRequest);
    }

    // danh sach bac si
    @GetMapping("/doctor")
    public List<DoctorResponse> findDoctor (DoctorRequest doctorRequest){
        return doctorService.findByRequest(doctorRequest);
    }

    // danh sach benh nhan
    @GetMapping("/patient")
    public List<PatientResponse> findPatient (PatientRequest patientRequest){
        return userService.findByRequest(patientRequest);
    }

    // them bac si
    @PostMapping("/doctor")
    public void AddDoctor(@RequestBody DoctorDTO doctorDTO) {
        doctorService.addDoctor(doctorDTO);
    }

    // them le tan
    @PostMapping("/receptionist")
    public void AddReceptionist (@RequestBody ReceptionistDTO receptionistDTO) {
        receptionistService.AddReceptionist(receptionistDTO);
    }


    // duyet lich kham tu  phia le tan
    @PutMapping ("/appointment")
    public void BorowesAppointment (@RequestBody BrowseAppoinmentRequest browseAppoinmentRequest){
        receptionistService.BrowseAppointment(browseAppoinmentRequest);
    }

    // lay ra tat ca cac lich kham tu phia le tan
    @GetMapping("/patient/appointment")
    public List<AppointmentResponse> findAppointmentNoBrowes(){
        return appointmentService.listAppointments();
    }

    // lay ra tat ca cac lich kham cua bac si
    @GetMapping("/doctor/appointment")
    public void ListAppointment (){
        appointmentService.listAppointments();
    }

    // Lay ra ho so benh an cua benh nhan
    @GetMapping("/patient/medicalfile")
    public List<MedicalFileResponse> ListMedicalFile (){
        return patientService.ListMedicalFiles();
    }

    // bac si ket luan ho so benh an cho benh nhan
    @PostMapping("/patient/medicalfile")
    public void AddMedicalFile(@RequestBody AddMedicalFileDTO addMedicalFileDTO){
        patientService.AddMedicalFile(addMedicalFileDTO);
    }

    // them admin
    @PostMapping("/admin")
    public void AddAdmin (@RequestBody AdminRequest adminRequest){
        adminService.AddAdmin(adminRequest);
    }

}
