package com.ecommerce.services;

import com.ecommerce.controllers.AuthController;
import com.ecommerce.models.Product;
import com.ecommerce.repositories.ProductRepository;
import com.ecommerce.utils.JWTUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService {

    private final ProductRepository productRepository;
    private final AuthService authService;

    @Autowired
    public ProductService(ProductRepository productRepository, AuthService authService) {
        this.productRepository = productRepository;
        this.authService = authService;
    }

    public List<Product> getAllProducts(String token) {
        if(authService.validationToken(token)) {
            return productRepository.findAll();
        }
        return null;
    }
}
