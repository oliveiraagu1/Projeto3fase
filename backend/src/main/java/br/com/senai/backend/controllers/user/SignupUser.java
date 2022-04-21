package br.com.senai.backend.controllers.user;

import br.com.senai.backend.entity.User;
import br.com.senai.backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/users")
public class SignupUser {

    @Autowired
    private UserRepository userRepository;

    @PostMapping("/signup")
    public User user(@RequestBody User user){
        return this.userRepository.save(user);
    }
}
