package com.example.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.entities.UserEntity;

@Repository
public interface UserRepository extends JpaRepository<UserEntity, Long>{
	@Query(value = "SELECT * FROM enduser WHERE email = ? ", nativeQuery = true)
	public UserEntity findByEmail(String email);
}

	