package br.com.api.grow.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.List;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "tb_user")
public class UserModel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(length = 150,nullable = false)
    private String name;

    @Column(length = 150,nullable = false,unique = true)
    private String email;

    @Column(nullable = false)
    private String password;

    @ManyToMany
    private List<RoleModel> roles;

    @OneToMany(mappedBy = "user")
    private List<ContractModel> contracts;
}
