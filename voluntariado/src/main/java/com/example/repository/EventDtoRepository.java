package com.example.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.example.entities.EventDTO;
import com.example.entities.EventEntity;
import com.example.entities.UserEntity;

public interface EventDtoRepository extends JpaRepository<EventDTO, Long>{

	@Query(value = "SELECT * FROM activity WHERE organizer = ? ", nativeQuery = true)
	public  List<EventDTO> findByOrganizer(String id);
}
