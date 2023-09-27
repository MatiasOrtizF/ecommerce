package com.ecommerce.controllers;

import com.ecommerce.services.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = {"http://localhost:19006/", "192.168.0.9:8081"})
@RequestMapping("api/product")
@RestController
public class ProductController {

    private final ProductService productService;

    @Autowired
    public ProductController(ProductService productService) {
        this.productService = productService;
    }

    @GetMapping
    public ResponseEntity<?> getAllProducts(@RequestHeader(value = "Authorization")String token) {
        return null;
    }

    @GetMapping
    public ResponseEntity<?> getProduct(@RequestHeader(value = "Authorization")String token) {
        return null;
    }

    @PutMapping("{id}")
    public ResponseEntity<?> updateProduct(@RequestHeader(value = "Authorization")String token) {
        return null;
    }
}
