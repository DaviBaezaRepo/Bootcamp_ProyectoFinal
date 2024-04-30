package com.example.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;


@Data
// Creates getters and setters automatically

@Entity
public class User {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String surname;
    private String email;
    private String password;
    private String username;
    private Boolean organizer;
    private String entity;
    
    

	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
		this.password = encoder.encode(password);
	}
    
}
