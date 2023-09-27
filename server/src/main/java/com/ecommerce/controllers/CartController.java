package com.ecommerce.controllers;

import com.ecommerce.services.CartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = {"http://localhost:19006/", "192.168.0.9:8081"})
@RequestMapping("/api/cart")
@RestController
public class CartController {

    private CartService cartService;

    @Autowired
    public CartController(CartService cartService) {
        this.cartService = cartService;
    }

    @PostMapping
    public ResponseEntity<?> addProductInCart(@RequestHeader(value = "Authorization")String token) {
        return null;
    }

    @GetMapping
    public ResponseEntity<?> getAllProductsInCart(@RequestHeader(value = "Authorization")String token) {
        return null;
    }

    @DeleteMapping
    public ResponseEntity<?> deleteProductInCart(@RequestHeader(value = "Authorization")String token) {
        return null;
    }
}
