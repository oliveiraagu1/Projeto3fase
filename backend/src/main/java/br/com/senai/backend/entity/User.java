package br.com.senai.backend.entity;

import lombok.*;
import javax.persistence.*;
import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;


    private String name;


    private String email;


    private String password;


    private Integer registration;

    @OneToMany(mappedBy="id", cascade = CascadeType.ALL)
    private List<Contract> contracts;




}
