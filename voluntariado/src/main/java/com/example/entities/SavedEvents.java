package com.example.entities;

import jakarta.persistence.EmbeddedId;
import jakarta.persistence.Entity;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.MapsId;
import jakarta.persistence.Table;
import lombok.Data;

@Data
@Entity
@Table(name = "saved_events")
public class SavedEvents {
	
	@EmbeddedId
	private SavedEventsId id;
	
	@ManyToOne
	@MapsId("idUser")
	@JoinColumn(name = "id_enduser")
	private UserEntity user;
	
	@ManyToOne
	@MapsId("idEvent")
	@JoinColumn(name = "id_activity")
	private EventEntity event;
	
}