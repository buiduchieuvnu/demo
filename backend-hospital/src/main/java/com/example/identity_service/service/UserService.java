package com.example.identity_service.service;

import com.example.identity_service.dto.request.UserCreateRequest;
import com.example.identity_service.dto.request.UserUpdateRequest;
import com.example.identity_service.entity.User;
import com.example.identity_service.exception.AppException;
import com.example.identity_service.exception.ErrorCode;
import com.example.identity_service.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;
    // service tạo 1 user

    public User createUser(UserCreateRequest request) {
        User user = new User();
        //
        if (userRepository.existsByUsername(request.getUsername()))
        // throw: ném ra thông báo lỗi
            throw new AppException(ErrorCode.USER_EXISTED);

        // dùng method mapstruct
        user.setUsername(request.getUsername());
        user.setPassword(request.getPassword());
        user.setFirstname(request.getFirstname());
        user.setLastname(request.getLastname());
        user.setDob(request.getDob());

        // Tạo 1 row mới trong table
        return userRepository.save(user);
    }

    // update user
    public User updateUser(String userId, UserUpdateRequest request) {
        User user = getUser(userId);

        user.setPassword(request.getPassword());
        user.setFirstname(request.getFirstname());
        user.setLastname(request.getLastname());
        user.setDob(request.getDob());

        return userRepository.save(user);
    }

    public List<User> getUsers() {
        return userRepository.findAll();
    }

    // delete

    public void deleteUser(String userId) {
        userRepository.deleteById(userId);
    }

    // orElseThrow(): nếu giá trị null hàm sẽ trả ra một thông báo đã cài đặt trước đó
    public User getUser(String id) {
        return userRepository.findById(id).orElseThrow(() -> new RuntimeException("User not found"));
    }


}
