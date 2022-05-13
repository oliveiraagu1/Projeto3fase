package br.com.api.grow.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.Date;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "tb_contract")
public class ContractModel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(length = 150, nullable = false)
    private String nameClient;

    @Column(nullable = false)
    private Date date;

    @Column(nullable = false)
    private Integer typeProperty;

    @Column(nullable = false)
    private Integer registration;

    @Column(nullable = false)
    private Integer propertyCode;

    @Column(length = 100,nullable = false)
    private String typeAgreement;

    @JsonIgnore
    @ManyToOne
    private UserModel user;
}
