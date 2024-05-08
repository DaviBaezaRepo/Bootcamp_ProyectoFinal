package com.example.entities.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.entities.EventDTO;
import com.example.entities.UserEntity;
import com.example.service.UserService;

@RestController
@RequestMapping("/users")
@CrossOrigin(origins = "*")
public class UserController {

	@Autowired
	private UserService userService;

	@GetMapping(path = "/{id}")
	public Optional<UserEntity> getUserById(@PathVariable Long id) {
		return userService.getById(id);
	}

	@GetMapping
	public List<UserEntity> getUsers() {
		return userService.findAllUsers();
	}
	
//	@GetMapping("/dto")
//	public List<EventDTO> getEventsDTO() {
//		return eventDtoRepository.findAll();
//	}

	@PostMapping
	public UserEntity saveUser(@RequestBody UserEntity user) {
		return this.userService.saveUser(user);
	}

	@PutMapping("/{id}")
	public UserEntity updateUserById(@RequestBody UserEntity request, Long id) {
		return this.userService.updateById(request, id);
	}

	@DeleteMapping("/{id}")
	public String deleteUserById(@PathVariable Long id) {
		boolean ok = this.userService.deleteUser(id);
		return ok ? "User with id " + id + " deleted." : "User with id " + id + " not deleted.";
	}

}