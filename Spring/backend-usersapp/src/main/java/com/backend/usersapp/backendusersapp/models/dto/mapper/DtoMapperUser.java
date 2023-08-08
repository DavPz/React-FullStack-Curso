package com.backend.usersapp.backendusersapp.models.dto.mapper;

import com.backend.usersapp.backendusersapp.models.dto.UserDto;
import com.backend.usersapp.backendusersapp.models.entities.User;

public class DtoMapperUser {

    private User user;

    private DtoMapperUser() {
    }

    public static DtoMapperUser builder() {
        return new DtoMapperUser();
    }

    public DtoMapperUser setUser(User user) {
        this.user = user;
        return this;
    }

    public UserDto build() {
        if (user == null) {
            throw new RuntimeException("Debe pasar el entitie USer");
        }

        boolean isAdminRole = user.getRoles().stream().anyMatch(r->"ROLE_ADMIN".equals(r.getName()));

        return new UserDto(
                this.user.getId()
                , this.user.getUserName()
                , this.user.getEmail()
                , isAdminRole
        );

    }

}
