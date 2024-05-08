package com.example;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@SpringBootApplication
public class VoluntariadoApplication {
	
	@Bean
    RestTemplate getresttemplate() {
        return new RestTemplate();
    }

	public static void main(String[] args) {
		SpringApplication.run(VoluntariadoApplication.class, args);
	}
	
	

	} 



