package br.com.api.grow.model.user.DTO;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@AllArgsConstructor
@Getter
@Setter
public class JwtResponse {

    private String email;
    private String name;
    private Long role;
    //private String token;
}
