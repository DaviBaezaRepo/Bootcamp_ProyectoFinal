package com.example.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.entities.EventUserDTO;

@Repository
public interface EventUserDTORepository extends JpaRepository<EventUserDTO, Long>{}