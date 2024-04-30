package com.example.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.entities.User;
import com.example.repository.UserRepository;

@Service
public class UserService {
	@Autowired
	UserRepository userRepository;
	
	public List<User> findAllUsers() {
		return userRepository.findAll()	;
	}
	

	public User getUserById(int id) {
		// TODO Auto-generated method stub
		return userRepository.findById(id);
	}
}