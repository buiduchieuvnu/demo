package com.vnptit.ehealth.docs.model;

public class Account {
    public String username;
    public String password;
    public String fullname;
    public String role;
    public String unit;

    public Account(String uname, String name,String role, String unit){
        this.username = uname;
        this.fullname = name;
        this.role = role;
        this.unit = unit;
    }
}
