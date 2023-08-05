package com.backend.usersapp.backendusersapp.models.dto.mapper;

import com.backend.usersapp.backendusersapp.models.dto.UserDto;
import com.backend.usersapp.backendusersapp.models.entities.User;

public class DtoMapperUser {

    private static DtoMapperUser mapper;

    private User user;

    private DtoMapperUser() {
    }

    public static DtoMapperUser builder() {
        mapper = new DtoMapperUser();
        return mapper;
    }

    public DtoMapperUser setUser(User user) {
        this.user = user;
        return mapper;
    }

    public UserDto build() {
        if (user == null) {
            throw new RuntimeException("Debe pasar el entitie USer");
        }
        return new UserDto(
                this.user.getId()
                , this.user.getUserName()
                , this.user.getEmail()
        );

    }

}
