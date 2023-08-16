package com.backend.usersapp.backendusersapp.services;

import java.util.List;
import java.util.Optional;

import com.backend.usersapp.backendusersapp.models.dto.UserDto;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.backend.usersapp.backendusersapp.models.entities.User;

public interface UserService {

    List<UserDto> findAll();

    Page<UserDto> findAll(Pageable pageable);

    Optional<UserDto> findById(Long id);

    UserDto save(User user);
    
    Optional<UserDto> update(User user, Long id);

    void remove(Long id);

}
