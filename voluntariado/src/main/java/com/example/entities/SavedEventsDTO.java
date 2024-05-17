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
@Table(name = "enduser")
public class SavedEventsDTO {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	private String firstname;
	private String surname;
	private String image;

	
	// Código nuevo
	
	@ManyToMany
//	@JsonIgnore
	@JoinTable(name = "saved_events", 
		joinColumns = @JoinColumn(name = "id_enduser"), 
		inverseJoinColumns = @JoinColumn(name = "id_activity"))
	List<EventDTO> eventList = new ArrayList<>();
	
	// fin
	
}