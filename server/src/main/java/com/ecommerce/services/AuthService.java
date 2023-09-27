package com.ecommerce.services;

import com.ecommerce.repositories.UserRepository;
import com.ecommerce.utils.JWTUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AuthService {

    private final JWTUtil jwtUtil;
    private final UserRepository userRepository;

    @Autowired
    public AuthService(JWTUtil jwtUtil, UserRepository userRepository) {
        this.jwtUtil = jwtUtil;
        this.userRepository = userRepository;
    }

    public boolean validationToken (String token) {
        String userId = jwtUtil.getKey(token);
        return (userId != null);
    }
}
