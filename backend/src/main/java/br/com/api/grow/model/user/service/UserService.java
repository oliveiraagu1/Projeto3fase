package br.com.api.grow.model.user.service;

import br.com.api.grow.model.user.DTO.SessionDTO;
import br.com.api.grow.model.user.DTO.SessionResponseDTO;
import br.com.api.grow.model.user.entity.UserModel;
import br.com.api.grow.model.user.repository.UserRepository;
import br.com.api.grow.security.JWTHelper;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {

    private final UserRepository userRepository;
    private final JWTHelper jwtHelper;
     PasswordEncoder passwordEncoder;

    public UserService(UserRepository userRepository, JWTHelper jwtHelper) {
        this.userRepository = userRepository;
        this.passwordEncoder = new BCryptPasswordEncoder();
        this.jwtHelper = jwtHelper;
    }


    public List<UserModel> listAll(){
        return userRepository.findAll();
    }


    public UserModel create(UserModel userModel){

        String encodedPassword =  passwordEncoder.encode(userModel.getPassword());
         userModel.setPassword(encodedPassword);
        return userRepository.save(userModel);
    }

    public SessionResponseDTO session(SessionDTO user){

        UserModel userLogin = userRepository.findByEmail(user.getEmail());

        if(userLogin == null || !passwordEncoder.matches(user.getPassword(), userLogin.getPassword())) {
            throw new IllegalArgumentException("User or password incorrect");
        }

        String token = jwtHelper.generationToken(userLogin);

        return new SessionResponseDTO(
                userLogin.getId(),
                userLogin.getEmail(),
                userLogin.getName(),
                userLogin.getRegistration(),
                userLogin.getRoles().getId(),
                token
        );
    }

    public void deleteUser(Long id){
        userRepository.deleteById(id);
    }





}
