package com.api.grow.controllers;

import com.api.grow.dtos.UserDto;
import com.api.grow.models.UserModel;
import com.api.grow.services.UserService;
import org.springframework.beans.BeanUtils;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;

@RestController
@RequestMapping("/user")
public class UserController {
    //Autowired
    final UserService userService;
    public UserController(UserService userService){
        this.userService = userService;
    }

    @PostMapping("/signup")
    public ResponseEntity<Object> createUser(@RequestBody @Valid UserDto userDto){

        if(userService.existsByEmail(userDto.getEmail())){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Error: user already exists");
        }

        var userModel = new UserModel();
        BeanUtils.copyProperties(userDto, userModel);
        return ResponseEntity.status(HttpStatus.CREATED).body(userService.save(userModel));
    }
}
