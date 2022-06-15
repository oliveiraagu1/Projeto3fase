package br.com.api.grow.model.user.service;

import br.com.api.grow.model.user.DTO.SessionDTO;
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




    public UserModel create(UserModel userModel){

        String encodedPassword =  passwordEncoder.encode(userModel.getPassword());
         userModel.setPassword(encodedPassword);
        return userRepository.save(userModel);
    }

    public String session(SessionDTO user){

        UserModel userLogin = userRepository.findByEmail(user.getEmail());

        if(userLogin == null || !passwordEncoder.matches(user.getPassword(), userLogin.getPassword())) {
            throw new IllegalArgumentException("User or password incorrect");
        }

        return jwtHelper.generationToken(userLogin);
    }



   public List<UserModel> listUser(){
       return userRepository.findAll();

   }



}
