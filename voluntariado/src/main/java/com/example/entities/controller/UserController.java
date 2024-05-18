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

import com.example.entities.AssignedEventsDTO;
import com.example.entities.CreateUserDTO;
import com.example.entities.EventDTO;
import com.example.entities.EventEntity;
import com.example.entities.SavedEventsDTO;
import com.example.entities.UserDTO;
import com.example.entities.UserEntity;
import com.example.repository.AssignedEventsDtoRepository;
import com.example.repository.CreateUserDtoRepository;
import com.example.repository.EventDtoRepository;
import com.example.repository.EventRepository;
import com.example.repository.SavedEventsDtoRepository;
import com.example.repository.UserDtoRepository;
import com.example.repository.UserRepository;
import com.example.service.UserService;

@RestController
@RequestMapping("/users")
@CrossOrigin("*")

public class UserController {

	@Autowired
	private UserService userService;

	@Autowired
	private UserRepository userRepository;

	@Autowired
	private EventRepository eventRepository;
	
	@Autowired
	private EventDtoRepository eventDtoRepository;
	

	@Autowired
	private UserDtoRepository userDtoRepository;

	@Autowired
	private CreateUserDtoRepository createUserDtoRepository;

	@Autowired
	private SavedEventsDtoRepository savedEventsDtoRepository;

	@Autowired
	private AssignedEventsDtoRepository assignedEventsDtoRepository;

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

	// Código nuevo

	@GetMapping("/saved-events/{id}")
	public Optional<SavedEventsDTO> getSavedEvents(@PathVariable Long id) {
		return savedEventsDtoRepository.findById(id);
	}

	@GetMapping("/assigned-events/{id}")
	public Optional<AssignedEventsDTO> getAssignedEvents(@PathVariable Long id) {
		return assignedEventsDtoRepository.findById(id);
	}
	
	@GetMapping("/organized-events/{id}")
	public List<EventDTO> getOrganizedEvents(@PathVariable String id) {
		return this.eventDtoRepository.findByOrganizer(id);
	}

	@PostMapping("/{userId}/subscribe-event/{eventId}")
	public ResponseEntity<?> assignEvent(@PathVariable Long userId, @PathVariable Long eventId) {
		UserEntity user = userRepository.findById(userId).orElse(null);
		EventEntity event = eventRepository.findById(eventId).orElse(null);

		if (user == null || event == null) {
			return ResponseEntity.badRequest().build();
		}

		userService.assignEvent(user, event);
		return ResponseEntity.ok().build();
	}

	@PostMapping("/save-event/{id}/{eventId}")
	public ResponseEntity<?> saveEvent(@PathVariable Long id, @PathVariable Long eventId) {
		UserEntity user = userRepository.findById(id).orElse(null);
		EventEntity event = eventRepository.findById(eventId).orElse(null);

		if (user == null || event == null) {
			return ResponseEntity.badRequest().build();
		}

		userService.saveEvent(user, event);
		return ResponseEntity.ok().build();
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

	@PutMapping("/{id}")
	public UserEntity updateUserById(@RequestBody UserEntity request, @PathVariable Long id) {
		return this.userService.updateById(request, id);
	}

	@DeleteMapping("/{id}")
	public String deleteUserById(@PathVariable Long id) {
		boolean ok = this.userService.deleteUser(id);
		return ok ? "User with id " + id + " deleted." : "User with id " + id + " not deleted.";
	}

}