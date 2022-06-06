package br.com.api.grow.model.user.DTO;

import br.com.api.grow.model.role.entity.RoleModel;
import br.com.api.grow.model.user.entity.UserModel;
import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class UserDTO {


    private String email;

    private String name;

    private String password;

    private Long idRole;

    public UserModel transformaParaObjeto(){
        return new UserModel(email, name, password, idRole);
    }

}

