package br.com.senai.backend.model;

import java.util.Date;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

import static javax.persistence.CascadeType.ALL;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "contracts")
public class ContractModel {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String name;
    private Date date;
    private String typeProperty;
    private String typeAgreement;
    private String propertyCode;

    @ManyToOne(cascade = ALL)
    @JoinColumn(name="user_id", referencedColumnName = "id", nullable = false)
    private UserModel userModel;



}
