package br.com.senai.backend.controllers;

import br.com.senai.backend.model.UserModel;
import br.com.senai.backend.repository.UserRepository;
import org.apache.catalina.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.ArrayList;

@RestController
@RequestMapping("/users")
public class UserController {

    @GetMapping("/signup")
    public String helloWorld(){
        return "Hello world";
    }
}
