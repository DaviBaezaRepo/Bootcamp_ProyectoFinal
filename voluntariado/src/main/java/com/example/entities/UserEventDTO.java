package com.example.entities;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.Table;
import lombok.Data;

// Cogemos los datos de evento que nos interesa para juntarlo con el usuario

@Data
@Entity
@Table(name = "activity")

public class UserEventDTO {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    private String title;
    private String explanation;
    private String image;
    private String location;
    private String duration;
    private LocalDateTime dateandtime;
    private String organizer;
    
    @ManyToMany
    @JsonIgnore
    @JoinTable(name = "user_has_events",
    		joinColumns = @JoinColumn(name = "id_activity"),
    		inverseJoinColumns = @JoinColumn(name = "id_enduser"))
    List<UserDTO> userList = new ArrayList<>();
    
}