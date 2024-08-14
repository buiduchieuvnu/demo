package com.example.identity_service.controller;

import com.example.identity_service.dto.request.DoctorCreateRequest;
import com.example.identity_service.dto.request.DoctorUpdateRequest;
import com.example.identity_service.entity.Doctor;
import com.example.identity_service.service.DoctorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class DoctorController {
    @Autowired
    private DoctorService doctorService;


    // so sánh json truyền vào với body của bảng
    @PostMapping("/doctors")
    Doctor createDoctor(@RequestBody DoctorCreateRequest request) {
        return doctorService.createDoctor(request);
    }

    @GetMapping("/doctors")
    List<Doctor> getDoctors() {
        return doctorService.getDoctors();
    }

    // lấy user dựa trên id nên cần truyền id vào path, dùng dấu ngoặc nhọn thì nó s tự động map từ users vào UserID
    @GetMapping("/doctors/{doctorId}")
    Doctor getDoctor(@PathVariable("userId") String doctorId) {
        return doctorService.getDoctors(doctorId);
    }
    // update thông tin
    @PutMapping("/doctors/{doctorId}")
    Doctor updateDoctor(@PathVariable String doctorId, @RequestBody DoctorUpdateRequest request) {
        return doctorService.updateDoctor(doctorId, request);
    }
}
