package com.example.entities.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.entities.User;
import com.example.service.UserService;

import lombok.extern.java.Log;

@Log
@RestController
@RequestMapping(value = "/1.0.0")
public class UserController {
	
	@Autowired
	UserService userService;
	
	@RequestMapping("/users")
	public List<User> getUsers() {
		log.info("bla bla bla");
		return userService.findAllUsers();
	}
	
}