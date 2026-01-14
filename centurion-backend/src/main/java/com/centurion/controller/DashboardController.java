package com.centurion.controller;

import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000")
public class DashboardController {

    @GetMapping("/dashboard")
    public Map<String, Object> dashboard() {
        return Map.of(
                "username", "test@gmail.com",
                "totalProblems", 25,
                "solvedProblems", 10,
                "rank", 5
        );
    }
}
