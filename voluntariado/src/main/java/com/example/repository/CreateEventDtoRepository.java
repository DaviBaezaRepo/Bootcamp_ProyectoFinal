package com.example.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.entities.CreateEventDTO;

public interface CreateEventDtoRepository extends JpaRepository<CreateEventDTO, Long>{

}