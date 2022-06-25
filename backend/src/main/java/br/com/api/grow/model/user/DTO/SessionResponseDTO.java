package br.com.api.grow.model.user.DTO;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
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
