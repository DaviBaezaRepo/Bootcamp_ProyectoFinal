package com.example.entities.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.entities.User;
import com.example.service.UserService;





@RestController
@RequestMapping()
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping(path = "/users/{id}")
    public Optional<User> getUserById(@PathVariable Long id) {
        return userService.getById(id);
    }
	
	@GetMapping("/users")
	public List<User> getUsers() {
		return userService.findAllUsers();
	}

}																																																																																																																																																																																				