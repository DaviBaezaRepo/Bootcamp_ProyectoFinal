package com.example.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.entities.Newsletter;

@Repository
public interface NewsletterRepository extends JpaRepository<Newsletter, Long>{
	
}