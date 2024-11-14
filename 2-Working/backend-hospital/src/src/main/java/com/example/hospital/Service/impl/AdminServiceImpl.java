package com.example.hospital.Service.impl;

import com.example.hospital.Entity.AdminEntity;
import com.example.hospital.Entity.UserEntity;
import com.example.hospital.Exception.CustomException.AccountExists;
import com.example.hospital.Model.request.AdminRequest;
import com.example.hospital.Repository.AdminRepository;
import com.example.hospital.Repository.UserRepository;
import com.example.hospital.Service.AdminService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AdminServiceImpl implements AdminService {
    @Autowired
    private AdminRepository adminRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private ModelMapper modelMapper;

    @Autowired
    private PasswordEncoder passwordEncoder;
    @Override
    public void AddAdmin(AdminRequest adminRequest) {
        if (userRepository.existsByPhoneOrEmail(adminRequest.getPhone(), adminRequest.getEmail())) {
            throw new AccountExists("phone or email already exists");
        }
        UserEntity userEntity = modelMapper.map(adminRequest, UserEntity.class);
        AdminEntity adminEntity = modelMapper.map(adminRequest, AdminEntity.class);
        String pass = passwordEncoder.encode(adminRequest.getPassword());
        userEntity.setPassword(pass);
        userEntity.setStatus(1);
        userEntity.setListAdmin(List.of(adminEntity));
        adminEntity.setStatus(1);
        adminEntity.setUsers(userEntity);
        userRepository.save(userEntity);
    }
}
