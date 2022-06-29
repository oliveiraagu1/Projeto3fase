package br.com.api.grow.model.user.DTO;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter

public class PasswordDTO {

    private String email;

    private String name;

    private String oldPassword;

    private String newPassword;

    private Integer registration;

    private Long idRole;


}
