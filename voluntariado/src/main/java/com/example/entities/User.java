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
import lombok.Data;


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
    
   

   @ManyToMany
   @JoinTable(name = "userhasevents",
   		joinColumns = @JoinColumn(name = "id_user"),
   		inverseJoinColumns = @JoinColumn (name = "id_event"))
   	List<Event> eventList = new ArrayList<>();
  
 
}
