package com.backend.usersapp.backendusersapp.services;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

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
    public List<User> findAll() {
        return (List<User>) userRepository.findAll();
    }

    @Override
    @Transactional(readOnly = true)
    public Optional<User> findById(Long id) {
        return userRepository.findById(id);

    }

    @Override
    @Transactional
    public Optional<User> update(User user, Long id) {
        Optional<User> o = this.findById(id);
        User userOptional = null;
        if (o.isPresent()) {
            User userDb = o.get();
            userDb.setUserName(user.getUserName());
            userDb.setEmail(user.getEmail());
            userOptional = this.save(userDb);
        }

        return Optional.ofNullable(userOptional);
    }

    @Override
    @Transactional
    public User save(User user) {
        user.setPassword(passwordEncoder.encode(user.getPassword()));

        Optional<Rol> o = rolRepository.findByName("ROLE_USER");
        List<Rol> roles = new ArrayList<>();

        if (o.isPresent()) {
            roles.add(o.orElseThrow());
        }

        user.setRoles(roles);
        return userRepository.save(user);

    }

    @Override
    @Transactional
    public void remove(Long id) {
        userRepository.deleteById(id);
    }

}
