package br.com.api.grow.model.user.entity;

import br.com.api.grow.model.contract.entity.ContractModel;
import br.com.api.grow.model.role.entity.RoleModel;
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
@Table(name = "users")
public class UserModel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(length = 150,nullable = false)
    private String name;

    @Column(length = 150,nullable = false, unique = true)
    private String email;

    @Column(nullable = false)
    private String password;

    @Column(nullable = false)
    private Integer registration;

    @ManyToOne(cascade = CascadeType.MERGE)
    @JoinColumn(name = "roleId", referencedColumnName = "id")
   private RoleModel roles;

    @OneToMany(mappedBy = "user", cascade = CascadeType.REMOVE)
    private List<ContractModel> contracts;


    public UserModel(String email, String name, String password, Integer registration, Long idRole) {
        this.name = name;
        this.email = email;
        this.password = password;
        this.registration = registration;
        this.roles = new RoleModel(idRole);
    }

    public UserModel(Long id){
        this.id = id;
    }



}
