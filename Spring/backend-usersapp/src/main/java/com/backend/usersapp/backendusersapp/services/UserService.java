package com.backend.usersapp.backendusersapp.services;

import java.util.List;
import java.util.Optional;

import com.backend.usersapp.backendusersapp.models.dto.UserDto;
import org.springframework.stereotype.Service;

import com.backend.usersapp.backendusersapp.models.entities.User;

public interface UserService {

    List<UserDto> findAll();

    Optional<UserDto> findById(Long id);

    UserDto save(User user);
    
    Optional<UserDto> update(User user, Long id);

    void remove(Long id);

}
