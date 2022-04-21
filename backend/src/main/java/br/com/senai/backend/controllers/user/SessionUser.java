package br.com.senai.backend.controllers.user;

import br.com.senai.backend.entity.User;
import br.com.senai.backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;


@RestController
@RequestMapping("/users")
public class SessionUser {

    @Autowired
    private UserRepository userRepository;

}