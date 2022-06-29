package br.com.api.grow.model.user.service;

import br.com.api.grow.model.role.entity.RoleModel;
import br.com.api.grow.model.user.DTO.PasswordDTO;
import br.com.api.grow.model.user.DTO.SessionDTO;
import br.com.api.grow.model.user.DTO.SessionResponseDTO;
import br.com.api.grow.model.user.entity.UserModel;
import br.com.api.grow.model.user.repository.UserRepository;
import br.com.api.grow.security.JWTHelper;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {

    private final UserRepository userRepository;
    private final JWTHelper jwtHelper;
     PasswordEncoder passwordEncoder;

    public UserService(UserRepository userRepository, JWTHelper jwtHelper) {
        this.userRepository = userRepository;
        this.passwordEncoder = new BCryptPasswordEncoder();
        this.jwtHelper = jwtHelper;
    }


    public List<UserModel> listAll(){
        return userRepository.findAll();
    }


    public UserModel create(UserModel userModel){

        String encodedPassword =  passwordEncoder.encode(userModel.getPassword());
         userModel.setPassword(encodedPassword);
        return userRepository.save(userModel);
    }

    public SessionResponseDTO session(SessionDTO user){

        UserModel userLogin = userRepository.findByEmail(user.getEmail());

        if(userLogin == null || !passwordEncoder.matches(user.getPassword(), userLogin.getPassword())) {
            throw new IllegalArgumentException("User or password incorrect");
        }

        String token = jwtHelper.generationToken(userLogin);

        return new SessionResponseDTO(
                userLogin.getId(),
                userLogin.getEmail(),
                userLogin.getName(),
                userLogin.getRegistration(),
                userLogin.getRoles().getId(),
                token
        );
    }

    public void changePassword(Long id, PasswordDTO passwordDTO){

        UserModel userId = userRepository.findById(id)
                .orElseThrow(()-> new RuntimeException("Error: Id does not exist or value is wrong"));


        boolean passwordEquals = passwordEncoder.matches(passwordDTO.getOldPassword(), userId.getPassword());

        if (passwordEquals) {
            userId.setId(id);
            userId.setEmail(passwordDTO.getEmail());
            userId.setName(passwordDTO.getName());
            userId.setPassword(passwordEncoder.encode(passwordDTO.getNewPassword()));
            userId.setRegistration(passwordDTO.getRegistration());
            userId.setRoles(new RoleModel(passwordDTO.getIdRole()));

            userRepository.save(userId);

        }else {
            throw new IllegalArgumentException("User or password incorrect");
        }



    }

    public void deleteUser(Long id){
        userRepository.deleteById(id);
    }





}
