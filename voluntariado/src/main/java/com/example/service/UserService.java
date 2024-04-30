package com.example.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.entities.User;
import com.example.repository.UserRepository;

//@Service
//public class UserService {
//	@Autowired
//	private UserRepository userRepository;
//	
//	public List<User> findAllUsers() {
//		return userRepository.findAll()	;
//	}
//	
//
//	public Optional <User> getUserById(Long id) {
//		// TODO Auto-generated method stub
//		return userRepository.findById(id);
//	}
//}

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public Optional<User> getById(Long id) {
        return userRepository.findById(id);
    }
}