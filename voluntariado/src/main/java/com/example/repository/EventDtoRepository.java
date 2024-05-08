package com.example.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.entities.EventDTO;

public interface EventDtoRepository extends JpaRepository<EventDTO, Long>{

}
