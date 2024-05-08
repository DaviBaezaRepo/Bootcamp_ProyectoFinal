package com.example.entities;

import java.time.LocalDateTime;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;

@Data
@Entity
public class Event {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;
    private String description;
    private String image;
    private String location;
    private String duration;
    private LocalDateTime dateandtime;
    private String categories;
    private String organizer;
    private Boolean favorite;
    
    
    // Constructors, getters, and setters with Lombok
}
