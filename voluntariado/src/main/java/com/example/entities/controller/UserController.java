package com.example.entities.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.entities.User;
import com.example.service.UserService;

@RestController
@RequestMapping()
public class UserController {
	
	@Autowired
	UserService userService;
	
	@GetMapping("/users")
	public List<User> getUsers() {
		return userService.findAllUsers();
	}
	
//	@GetMapping(value="/user/{id}")
//	public ResponseEntity<User>getUser(@PathVariable int id) {
//		return User.id;
//	}
	
}