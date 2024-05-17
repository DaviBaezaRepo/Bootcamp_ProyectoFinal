package com.example.entities.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.entities.Newsletter;
import com.example.repository.NewsletterRepository;

@RestController
@RequestMapping("/")
@CrossOrigin(origins = "*", allowedHeaders = "*") 
public class NewsletterController {
	
	@Autowired 
	private NewsletterRepository newsletterRepository;
	
    @PostMapping("/newsletter")
    public ResponseEntity<String> createNewsletter(@RequestBody Newsletter request) {
        try {
        	newsletterRepository.save(request);
            return ResponseEntity.status(HttpStatus.CREATED).body("Email enviado exitosamente");
        } catch (Exception e) {
        	e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error al enviar email");
        }
    }


}
