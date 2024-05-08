package com.example.entities;

import java.util.ArrayList;
import java.util.List;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.Table;
import lombok.Data;

@Data // Creates getters and setters automatically
@Entity
@Table(name = "user")
public class UserEntity {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	private String name;
	private String surname;
	private String email;
	private String password;
	private String username;
    private String image;
	private String entity;
	

//	   @ManyToMany
//	   @JoinTable(name = "userhasevents",
//	   		joinColumns = @JoinColumn(name = "id_user"),
//	   		inverseJoinColumns = @JoinColumn (name = "id_event"))
//	   	List<Event> eventList = new ArrayList<>();
	  
	 
}
