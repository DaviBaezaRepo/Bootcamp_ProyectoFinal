package com.example.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Data // Creates getters and setters automatically
@Entity
@Table(name = "enduser")
public class UserEntity {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	private String firstname;
	private String surname;
	private String email;
	@JsonIgnore
	private String newpassword;
	private String image;
	private String entity;
}
