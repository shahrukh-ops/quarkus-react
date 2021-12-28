package org.red.demo.controller;

import org.red.demo.entity.User;
import org.red.demo.pojo.JwtToken;
import org.red.demo.pojo.Login;
import org.red.demo.repository.UserRepository;
import org.red.demo.security.JwtService;

import javax.annotation.security.PermitAll;
import javax.inject.Inject;
import javax.transaction.Transactional;
import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import java.net.URI;

@Path("/api/v1/user")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class UserController {

    @Inject
    UserRepository userRepository;
    @Inject
    JwtService jwtService;

    @POST
    @Transactional
    @PermitAll
    @Path("/register")
    public Response register(User newUser){
        User user = userRepository.find("email",newUser.getEmail()).firstResult();
        if(user==null)
            userRepository.persist(newUser);
        else
            throw new WebApplicationException(Response.status(400).entity("User already exists").build());
        return Response.created(URI.create("/api/v1/ideas/" +newUser.getId())).build();
    }

    @POST
    @PermitAll
    @Path("/login")
    public JwtToken login(Login login){
        User user = userRepository.find("email",login.getEmail()).firstResult();
        if(user == null || !user.getPassword().equals(login.getPassword())) {
            throw new WebApplicationException(Response.status(404).entity("No user found or password is incorrect").build());
        }

        return new JwtToken(jwtService.generateToken(user.getEmail(), user.getPassword(),user.getRole()));

    }
}
