package com.api.grow.services;

import com.api.grow.models.UserModel;
import com.api.grow.repositories.UserRepository;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
public class UserService {

    //Autowired
    final UserRepository userRepository;
    public UserService(UserRepository userRepository){
        this.userRepository = userRepository;
    }

    @Transactional
    public UserModel save(UserModel userModel){
        return userRepository.save(userModel);
    }

    public boolean existsByEmail(String email){
        return userRepository.existsByEmail(email);
    }
}
