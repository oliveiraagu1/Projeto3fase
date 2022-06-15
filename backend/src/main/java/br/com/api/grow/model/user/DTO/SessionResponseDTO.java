package br.com.api.grow.model.user.DTO;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@AllArgsConstructor
@Setter
@Getter
public class SessionResponseDTO {

    private Long userId;
    private String email;
    private String name;
    private Integer registration;
    private Long roleId;
    private String token;
}
