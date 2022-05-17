package br.com.api.grow.service;

import br.com.api.grow.model.UserModel;
import br.com.api.grow.repository.UserRepository;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
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


   public List<UserModel> listUser(){
       return userRepository.findAll();

   }



}
