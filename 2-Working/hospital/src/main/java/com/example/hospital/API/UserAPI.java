package com.example.hospital.API;

import com.example.hospital.Model.dto.UserDTO;
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

    @PostMapping("/register")
    public void Register(@RequestBody UserDTO userDTO) {
        userService.Register(userDTO);
    }

    @PostMapping("/login")
    public String Login(@RequestBody UserDTO userDTO) {
        String token = userService.Login(userDTO);
        return token;
    }

}
