package br.com.api.grow.controller;

import br.com.api.grow.model.UserModel;
import br.com.api.grow.service.UserService;
import lombok.Getter;
import org.apache.catalina.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/user")
public class UserController {

    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("/created")
    public ResponseEntity<UserModel> created(@RequestBody UserModel user){

        UserModel userCreated = userService.create(user);
        return new ResponseEntity<UserModel>(userCreated, HttpStatus.CREATED);
    }

    @GetMapping("/list")
    public ResponseEntity<List<UserModel>> listUser() {
        return new ResponseEntity<>(userService.listUser(), HttpStatus.OK);
    }

}
