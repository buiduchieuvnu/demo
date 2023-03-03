package com.example.demo.entity;


import javax.persistence.*;

@Entity
@Table(name = "products")
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column
    private Integer Id;

    @Column
    private String Name;

    public Product() {
    }

    public Product(Integer id, String name) {
        Id = id;
        Name = name;
    }

    public void setId(Integer id) {
        Id = id;
    }

    public Integer getId() {
        return Id;
    }

    public String getName() {
        return Name;
    }

    public void setName(String name) {
        Name = name;
    }
}
