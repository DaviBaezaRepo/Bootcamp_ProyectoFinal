package com.example.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.entities.AssignedEventsDTO;

public interface AssignedEventsDtoRepository extends JpaRepository<AssignedEventsDTO, Long> {

}