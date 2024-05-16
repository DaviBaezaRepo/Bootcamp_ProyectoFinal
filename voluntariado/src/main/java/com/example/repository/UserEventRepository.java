package com.example.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.entities.UserEventDTO;

public interface UserEventRepository extends JpaRepository<UserEventDTO, Long> {

}
