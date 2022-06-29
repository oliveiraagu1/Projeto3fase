package br.com.api.grow.controller;

import br.com.api.grow.model.user.DTO.*;
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



    @GetMapping("/list")
    public List<UserModel> listAll(){

        return userService.listAll();
    }

    @PostMapping("/created")
    public ResponseEntity<UserResponseDTO> created(@RequestBody UserDTO dto){

        UserModel userCreated = userService.create(dto.transformaParaObjeto());
        return new ResponseEntity<UserResponseDTO>(UserResponseDTO.transformEmDTO(userCreated), HttpStatus.CREATED);
    }

    @PostMapping("/session")
    public ResponseEntity<SessionResponseDTO> session(@RequestBody SessionDTO user){

        return new ResponseEntity<SessionResponseDTO>(userService.session(user), HttpStatus.OK);
    }

    @PutMapping("/change/{id}")
    public ResponseEntity<Void> changePassword(@PathVariable Long id, @RequestBody PasswordDTO passwordDTO){

        userService.changePassword(id, passwordDTO);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> deleteContract(@PathVariable Long id){
        userService.deleteUser(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }


}
