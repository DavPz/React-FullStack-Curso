package com.backend.usersapp.backendusersapp.repositories;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import com.backend.usersapp.backendusersapp.models.entities.User;

import java.util.Optional;

public interface UserRepository extends CrudRepository<User, Long> {

    Optional<User> findByUserName(String userName);

    @Query("select u from User u where u.userName=?1")
    Optional<User> getUserByUserName(String userName);
}
