package br.com.api.grow.model.user.DTO;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@AllArgsConstructor
@Getter
@Setter
public class SessionDTO {

    private String email;
    private String password;
}
