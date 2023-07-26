package com.backend.usersapp.backendusersapp.controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.backend.usersapp.backendusersapp.models.entities.User;
import com.backend.usersapp.backendusersapp.services.UserService;

@RestController
@RequestMapping("/users")
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping
    public List<User> list(){
        return userService.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> show(@PathVariable Long id){
        Optional<User> userOptional = userService.findById(id);

        if(userOptional.isPresent()){
            return ResponseEntity.ok(userOptional.orElseThrow());
        } 
        
        return ResponseEntity.notFound().build();
    }


    
}
