package br.com.api.grow.model.user.DTO;


import br.com.api.grow.model.user.entity.UserModel;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class SessionDTO {
    private String email;
    private String password;

    public UserModel transformaParaObjeto(){
        return new UserModel(email, password);
    }
}
