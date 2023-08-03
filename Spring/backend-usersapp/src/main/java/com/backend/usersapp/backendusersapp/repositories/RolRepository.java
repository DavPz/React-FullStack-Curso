package com.backend.usersapp.backendusersapp.repositories;

import com.backend.usersapp.backendusersapp.models.entities.Rol;
import com.backend.usersapp.backendusersapp.models.entities.User;
import org.springframework.data.repository.CrudRepository;

import java.util.Optional;

public interface RolRepository extends CrudRepository<Rol, Long> {

    Optional<Rol> findByName(String name);

}
