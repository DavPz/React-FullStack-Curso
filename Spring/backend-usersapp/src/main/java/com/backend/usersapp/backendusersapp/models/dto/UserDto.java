package com.backend.usersapp.backendusersapp.models.dto;

public class UserDto {

    public UserDto() {
    }

    public UserDto(Long id, String userName, String email, boolean adminRole) {
        this.id = id;
        this.userName = userName;
        Email = email;
        this.adminRole = adminRole;
    }

    private Long id;

    private String userName;

    private String Email;

    private boolean adminRole;


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getEmail() {
        return Email;
    }

    public void setEmail(String email) {
        Email = email;
    }

    public boolean isAdminRole() {
        return adminRole;
    }

    public void setAdminRole(boolean adminRole) {
        this.adminRole = adminRole;
    }
}
