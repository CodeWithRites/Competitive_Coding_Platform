package com.centurion.controller;

import com.centurion.dto.LoginRequest;
import com.centurion.model.User;
import com.centurion.service.AuthService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "http://localhost:3000") // VERY IMPORTANT
public class AuthController {

    private final AuthService authService;

    public AuthController(AuthService authService) {
        this.authService = authService;
    }

    @PostMapping(
            value = "/login",
            consumes = "application/json",
            produces = "application/json"
    )
    public ResponseEntity<?> login(@RequestBody LoginRequest request) {

        if (request.getEmail() == null || request.getPassword() == null) {
            return ResponseEntity.badRequest()
                    .body(Map.of("error", "Email and password required"));
        }

        User user = authService.login(
                request.getEmail(),
                request.getPassword()
        );

        // Send minimal safe response
        return ResponseEntity.ok(
                Map.of(
                        "message", "Login successful",
                        "email", user.getEmail()
                )
        );
    }
}
