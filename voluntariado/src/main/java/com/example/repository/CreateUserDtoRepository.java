package com.example.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.entities.CreateUserDTO;

public interface CreateUserDtoRepository extends JpaRepository<CreateUserDTO, Long>{

}