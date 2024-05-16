package com.example.entities;

import java.io.Serializable;

import jakarta.persistence.Column;
import jakarta.persistence.Embeddable;
import lombok.Data;

@Data
@SuppressWarnings("serial")
@Embeddable
public class UserEventId implements Serializable{
	@Column(name = "id_enduser")
	private Integer idUser;
	
	@Column(name = "id_activity")
	private Integer idEvent;
	
}
