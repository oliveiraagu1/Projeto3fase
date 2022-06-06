package br.com.api.grow.controller;

import br.com.api.grow.model.user.DTO.UserDTO;
import br.com.api.grow.model.user.DTO.UserResponseDTO;
import br.com.api.grow.model.user.entity.UserModel;
import br.com.api.grow.model.user.service.UserService;
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
    public ResponseEntity<UserResponseDTO> created(@RequestBody UserDTO dto){

        UserModel userCreated = userService.create(dto.transformaParaObjeto());
        return new ResponseEntity<UserResponseDTO>(UserResponseDTO.transformEmDTO(userCreated), HttpStatus.CREATED);
    }

    @GetMapping("/list")
    public ResponseEntity<List<UserModel>> listUser() {
        return new ResponseEntity<>(userService.listUser(), HttpStatus.OK);
    }

}
