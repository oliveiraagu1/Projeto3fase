package br.com.api.grow.model.user.service;

import br.com.api.grow.model.user.entity.UserModel;
import br.com.api.grow.model.user.repository.UserRepository;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {

    private final UserRepository userRepository;
     PasswordEncoder passwordEncoder;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
        this.passwordEncoder = new BCryptPasswordEncoder();
    }


    public UserModel create(UserModel userModel){

       String encodedPassword =  passwordEncoder.encode(userModel.getPassword());
       userModel.setPassword(encodedPassword);
        return userRepository.save(userModel);
    }

//    public UserModel session(UserModel userModel){
//
//        String encodedPassword =  passwordEncoder.encode(userModel.getPassword());
//
//        return userRepository.findAll();
//    }


   public List<UserModel> listUser(){
       return userRepository.findAll();

   }



}
