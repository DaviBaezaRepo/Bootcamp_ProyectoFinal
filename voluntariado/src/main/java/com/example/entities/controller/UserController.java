package com.example.entities.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.entities.Event;
import com.example.entities.User;
import com.example.service.UserService;


@RestController
@RequestMapping()
@CrossOrigin(origins = "*") 
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping(path = "/users/{id}")
    public Optional<User> getUserById(@PathVariable Long id) {
        return userService.getById(id);
    }
    
    @GetMapping("/{usersid}/events")
    public ResponseEntity<List<Event>> obtenerEventosDeUsuario(Long id) {
        List<Event> eventos = userService.obtenerEventosDeUsuario(id);
        return ResponseEntity.ok(eventos);
    }
	
	@GetMapping("/users")
	public List<User> getUsers() {
		return userService.findAllUsers();
	}
	
	@PostMapping("/users")
	public User saveUser(@RequestBody User user) {
		return this.userService.saveUser(user);
	}
	
	@PutMapping("/users/{id}")
	public User updateUserById(@RequestBody User request, Long id) {
		return this.userService.updateById(request, id);
	}
	
	@DeleteMapping("/users/{id}")
	public String deleteUserById(@PathVariable Long id) {
		boolean ok = this.userService.deleteUser(id);
		return ok ? "User with id "+id+" deleted." : "User with id "+id+" not deleted.";
	}

}																																																																																																																																																																																				