package com.example.entities.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
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

import com.example.entities.CreateUserDTO;
import com.example.entities.UserDTO;
import com.example.entities.UserEntity;
import com.example.repository.CreateUserDtoRepository;
import com.example.repository.UserDtoRepository;
import com.example.service.UserService;

@RestController
@RequestMapping("/users")
@CrossOrigin("*") 

public class UserController {

	@Autowired
	private UserService userService;
	
	@Autowired
	private UserDtoRepository userDtoRepository;
	
    @Autowired
    private CreateUserDtoRepository createUserDtoRepository;

	@GetMapping(path = "/{id}")
	public Optional<UserEntity> getUserById(@PathVariable Long id) {
		return userService.getById(id);
	}

	@GetMapping
	public List<UserEntity> getUsers() {
		return userService.findAllUsers();
	}
	
	@GetMapping("/dto")
	public List<UserDTO> getEventsDTO() {
		return userDtoRepository.findAll();
	}
	
	@GetMapping("/dto/{id}")
	public Optional<UserDTO> getEventsByIdDTO(@PathVariable Long id) {
		return userDtoRepository.findById(id);
	}

	
    @PostMapping("/crearUsuario")
    public ResponseEntity<String> createUser(@RequestBody CreateUserDTO request) {
        try {
            createUserDtoRepository.save(request);
            return ResponseEntity.status(HttpStatus.CREATED).body("Usuario creado exitosamente");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error al crear usuario");
        }
    }
//    @PostMapping("/crearUsuario")
//    public ResponseEntity<String> createUser(@RequestBody CreateUserDTO request) {
//        try {
//            userService.createUser(request);
//            return ResponseEntity.status(HttpStatus.CREATED).body("Usuario creado exitosamente");
//        } catch (Exception e) {
//            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error al crear usuario");
//        }
//    }

//	@PostMapping
//	public UserEntity saveUser(@RequestBody UserEntity user) {
//		return this.userService.saveUser(user);
//	}

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