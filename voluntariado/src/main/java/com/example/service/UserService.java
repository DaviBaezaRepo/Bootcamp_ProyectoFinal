package com.example.service;

import java.util.Collections;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.entities.Event;
import com.example.entities.User;
import com.example.repository.UserRepository;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

	public List<User> findAllUsers() {
		return userRepository.findAll()	;
	}
	
	
	public List<Event> obtenerEventosDeUsuario(Long id) {
        Optional<User> userOptional = userRepository.findById(id);
        if (userOptional.isPresent()) {
            User user = userOptional.get();
            return user.getEventList();
        } else {
        	return Collections.emptyList();
        }
    }
    
	
    public Optional<User> getById(Long id) {
        return userRepository.findById(id);
    }
    
    public User saveUser(User user) {
    	return userRepository.save(user);
    }
    
    public User updateById(User request, Long id) {
    	User user = userRepository.findById(id).get();
    	user.setName(request.getName());
    	user.setSurname(request.getSurname());
    	user.setEmail(request.getEmail());
    	user.setUsername(request.getUsername());
    	user.setPassword(request.getPassword());
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