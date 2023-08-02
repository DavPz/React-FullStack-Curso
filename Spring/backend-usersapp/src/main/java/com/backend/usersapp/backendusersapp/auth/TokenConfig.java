package com.backend.usersapp.backendusersapp.auth;

import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;

import java.security.Key;

public class TokenConfig {

    //public final static String SECRET_KEY = "algun_token_con_mi_secret";
    public final static Key SECRET_KEY = Keys.secretKeyFor(SignatureAlgorithm.HS256);
    public final static String PREFIX_TOKEN = "Bearer ";
    public final static String HEADER_AUTHORIZATION = "Authorization";

    public final static String CONTENT_TYPE_JSON = "application/json";

}
