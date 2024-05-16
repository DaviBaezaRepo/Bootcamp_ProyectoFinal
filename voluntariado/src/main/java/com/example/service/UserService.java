package com.example.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.entities.EventDTO;
import com.example.entities.EventEntity;
import com.example.entities.UserDTO;
import com.example.entities.UserEntity;
import com.example.entities.UserEventDTO;
import com.example.repository.UserDtoRepository;
import com.example.repository.UserRepository;

@Service
public class UserService {
	@Autowired
	private UserRepository userRepository;
	
	@Autowired UserDtoRepository userDtoRepository;

	public List<UserEntity> findAllUsers() {
		return userRepository.findAll();
	}

	public Optional<UserEntity> getById(Long id) {
		return userRepository.findById(id);
	}


	public UserEntity updateById(UserEntity request, Long id) {
		UserEntity user = userRepository.findById(id).get();
		if(request.getFirstname() != null) {
			user.setFirstname(request.getFirstname());
		}
		if(request.getSurname() != null) {
			user.setSurname(request.getSurname());
		}
		if(request.getEmail() != null) {
			user.setEmail(request.getEmail());
		}
		if(request.getNewpassword() != null) {
			user.setNewpassword(request.getNewpassword());
		}
		if(request.getImage() != null) {
			user.setImage(request.getImage());
		}
    	userRepository.save(user);
		return user;
	}

	public Boolean deleteUser(Long id) {
		try {
			userRepository.deleteById(id);
			return true;
		} catch (Exception e) {
			return false;
		}
	}
	
	// para guardar evento con usuario
	public void assignEvent(UserEntity user,  EventEntity event) {
		user.getEvents().add(event);
		userRepository.save(user);
		
	}
}