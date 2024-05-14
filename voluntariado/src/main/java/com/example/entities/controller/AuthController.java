package com.example.entities.controller;
import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.example.entities.UserEntity;
import com.example.repository.UserRepository;
@RestController
@RequestMapping("/auth")
@CrossOrigin("*") 

public class AuthController {
	
	@Autowired
	private UserRepository userrepository;
	
	@Value("${encyrptkey")
	private String encryptionkey;
	
	@CrossOrigin( "*")
//	@RequestMapping (value = "/login", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	@PostMapping("/login")
	public Map<Object, Object> login(@RequestBody Map<String,String> userData) {
		UserEntity user = this.userrepository.findByEmail(userData.get("email"));
		HashMap<Object, Object> response = new HashMap<>();
		if (user == null) { 
			response.put("status","error");
			response.put("message","Contrasenya o email invalidos");
			return response;
		}
		if (user.getNewpassword() .equals(userData.get("password")) ) {
			response.put("status","success");
			Algorithm algorithm = Algorithm.HMAC256(this.encryptionkey);
			String token = JWT.create().withSubject(user.getId().toString())
					.withClaim("name", user.getFirstname())
					.withClaim("image", user.getImage())
					.sign(algorithm);
			response.put("token", token);
			return response;
		}else {
			response.put("status","error");
			response.put("message","Contrasenya o email invalidos");
			return response;
		}
		
	}
	
	
}
