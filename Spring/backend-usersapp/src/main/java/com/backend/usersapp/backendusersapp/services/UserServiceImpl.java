package com.backend.usersapp.backendusersapp.services;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import com.backend.usersapp.backendusersapp.models.dto.UserDto;
import com.backend.usersapp.backendusersapp.models.dto.mapper.DtoMapperUser;
import com.backend.usersapp.backendusersapp.models.entities.Rol;
import com.backend.usersapp.backendusersapp.repositories.RolRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.backend.usersapp.backendusersapp.models.entities.User;
import com.backend.usersapp.backendusersapp.repositories.UserRepository;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private RolRepository rolRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Override
    @Transactional(readOnly = true)
    public List<UserDto> findAll() {
        List<User> users = (List<User>) userRepository.findAll();

        return users
                .stream()
                .map(u -> DtoMapperUser
                        .builder()
                        .setUser(u)
                        .build())
                .collect(Collectors.toList());
    }

    @Override
    @Transactional(readOnly = true)
    public Optional<UserDto> findById(Long id) {
        return userRepository.findById(id).map(u ->
                DtoMapperUser
                        .builder()
                        .setUser(u)
                        .build());
    }

    @Override
    @Transactional
    public Optional<UserDto> update(User user, Long id) {
        Optional<User> o = userRepository.findById(id);
        User userOptional = null;
        if (o.isPresent()) {
            User userDb = o.get();
            userDb.setUserName(user.getUserName());
            userDb.setEmail(user.getEmail());
            userOptional = userRepository.save(userDb);
        }

        return Optional.ofNullable(DtoMapperUser.builder().setUser(userOptional).build());
    }

    @Override
    @Transactional
    public UserDto save(User user) {
        user.setPassword(passwordEncoder.encode(user.getPassword()));

        Optional<Rol> o = rolRepository.findByName("ROLE_USER");
        List<Rol> roles = new ArrayList<>();

        if (o.isPresent()) {
            roles.add(o.get());
        }

        user.setRoles(roles);
        return DtoMapperUser.builder().setUser(userRepository.save(user)).build();

    }

    @Override
    @Transactional
    public void remove(Long id) {
        userRepository.deleteById(id);
    }

}
