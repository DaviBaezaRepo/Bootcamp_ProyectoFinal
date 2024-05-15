package com.example.entities;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonManagedReference;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.Table;
import lombok.Data;

@Data
@Entity
@Table(name = "activity")
public class EventDTO {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	private String title;
	private String explanation;
	private String image;
	private String location;
	private String duration;
	private LocalDateTime dateandtime;
	private String categories;
	private String organizer;
	private String lat;
	private String lon;

	@ManyToMany(mappedBy = "eventList")
	@JsonManagedReference
	List<EventUserDTO> userList = new ArrayList<>();
}
