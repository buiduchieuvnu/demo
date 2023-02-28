package com.example.demo.service;

import com.example.demo.entity.Product;
import com.example.demo.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ProductService {
    @Autowired
    ProductRepository repository;

    public Product getProductById(int id){
        return repository.findById(id).get();
    }
    public List<Product> getAllProducts(){
        List<Product> products = new ArrayList<Product>();
        repository.findAll().forEach(product -> products.add(product));
        return products;
    }
    public void saveOrUpdate(Product product){
        repository.save(product);
    }
    public void deleteProductById(int id){
        repository.deleteById(id);
    }
}
