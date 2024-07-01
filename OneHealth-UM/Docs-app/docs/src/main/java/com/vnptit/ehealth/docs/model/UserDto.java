package com.vnptit.ehealth.docs.model;

import lombok.Data;

@Data
public class UserDto {
    private Long id;

    private String username;
    private String name;
    private String role;
    public UserDto(){}

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getRole(){
        return role;
    }
    public void setRole(String role){
        this.role = role;
    }
}
