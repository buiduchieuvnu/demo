package com.example.demo.controller;

import com.example.demo.entity.Product;
import com.example.demo.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping(path = "/api")
public class ProductController {
    @Autowired
    ProductService productService;

    @GetMapping("/products")
    public List<Product> getAllProducts(){
        return productService.getAllProducts();
    }
    @GetMapping("/product/{id}")
    public Product getProduct(@PathVariable("id") int id) {
        return productService.getProductById(id);
    }
    @DeleteMapping("/product/{id}")
    public void deleteProduct(@PathVariable("id") int id) {
        productService.deleteProductById(id);
    }
    @PostMapping("/product")
    public void addProduct(@RequestBody Product product) {
        productService.saveOrUpdate(product);
    }
    @PutMapping("/product")
    public void updateProduct(@RequestBody Product product) {
        productService.saveOrUpdate(product);
    }

}
