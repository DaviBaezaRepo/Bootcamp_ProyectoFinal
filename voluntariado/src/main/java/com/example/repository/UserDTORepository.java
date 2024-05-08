package com.example.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.entities.UserDTO;

@Repository
public interface UserDTORepository extends JpaRepository<UserDTO, Long>{}
