package com.example.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.entities.SavedEventsDTO;

public interface SavedEventsDtoRepository extends JpaRepository<SavedEventsDTO, Long> {

}