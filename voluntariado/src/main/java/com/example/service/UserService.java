package com.example.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.entities.UserEntity;
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
	
	public UserEntity saveUser(UserEntity user) {
		return userRepository.save(user);
	}

	public UserEntity updateById(UserEntity request, Long id) {
		UserEntity user = userRepository.findById(id).get();
		user.setFirstname(request.getFirstname());
		user.setSurname(request.getSurname());
		user.setEmail(request.getEmail());
		user.setNewpassword(request.getNewpassword());
    	user.setImage(request.getImage());
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
}