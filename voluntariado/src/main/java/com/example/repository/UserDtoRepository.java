package com.example.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.entities.UserDTO;

public interface UserDtoRepository extends JpaRepository<UserDTO, Long> {

}
