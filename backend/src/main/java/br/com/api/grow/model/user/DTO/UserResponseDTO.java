package br.com.api.grow.model.user.DTO;

import br.com.api.grow.model.user.entity.UserModel;
import lombok.AllArgsConstructor;
import lombok.Getter;

@AllArgsConstructor
@Getter
public class UserResponseDTO {

    private Long id;
    private String name;
    private String email;
    private Long idRole;


    public static UserResponseDTO transformEmDTO(UserModel userModel) {
        return new UserResponseDTO(
                userModel.getId(),
                userModel.getName(),
                userModel.getEmail(),
                userModel.getRoles().getId());
    }
}
