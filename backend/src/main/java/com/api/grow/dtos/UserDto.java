package com.api.grow.dtos;
import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;


@Getter
@Setter
public class UserDto {

    @NotBlank
    @Size(min = 3)
    private String name;

    @NotBlank
    private String email;

    @NotBlank
    @Size(min = 3)
    private String password;

}
