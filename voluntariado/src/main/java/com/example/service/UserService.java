package com.example.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.entities.UserEntity;
import com.example.repository.UserDtoRepository;
import com.example.repository.UserRepository;

@Service
public class UserService {
	@Autowired
	private UserRepository userRepository;
	
	@Autowired UserDtoRepository userDtoRepository;

	public List<UserEntity> findAllUsers() {
		return userRepository.findAll();
	}

	public Optional<UserEntity> getById(Long id) {
		return userRepository.findById(id);
	}

	// a ver si se hace de front o back, depende de eso si necesito el código más adelante
//    public void createUser(CreateUserDTO request) {
//        // Crear una nueva entidad de usuario a partir del DTO
//        UserEntity newUser = new UserEntity();
//        newUser.setFirstname(request.getFirstname());
//        newUser.setSurname(request.getSurname());
//        newUser.setEmail(request.getEmail());
//        newUser.setNewpassword(request.getNewpassword()); // Nota: el nombre del campo es diferente en el DTO
//        newUser.setIsentity(request.isIsentity()); // Nota: el nombre del campo es diferente en el DTO
//        if (request.isIsentity()) { // Nota: el nombre del campo es diferente en el DTO
//            newUser.setEntity(request.getEntity()); // Nota: el nombre del campo es diferente en el DTO
//        }
//
//        // Guardar el usuario en la base de datos
//        userRepository.save(newUser);
//    }
	
// @PostMapping
//	public UserEntity saveUser(UserEntity user) {
//		return userRepository.save(user);
//	}

	public UserEntity updateById(UserEntity request, Long id) {
		UserEntity user = userRepository.findById(id).get();
		user.setFirstname(request.getFirstname());
		user.setSurname(request.getSurname());
		user.setEmail(request.getEmail());
		user.setNewpassword(request.getNewpassword());
    	user.setImage(request.getImage());
		return user;
	}

	public Boolean deleteUser(Long id) {
		try {
			userRepository.deleteById(id);
			return true;
		} catch (Exception e) {
			return false;
		}
	}
}