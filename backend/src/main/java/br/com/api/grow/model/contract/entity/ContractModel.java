package br.com.api.grow.model.contract.entity;

import br.com.api.grow.model.user.entity.UserModel;
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
@Table(name = "contracts")
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

    @ManyToOne(cascade = CascadeType.MERGE)
    private UserModel user;

    public ContractModel(
            String nameClient,
            Date date,
            Integer typeProperty,
            Integer registration,
            Integer propertyCode,
            String typeAgreement,
            Long userId
            ) {
        this.nameClient = nameClient;
        this.date = date;
        this.typeProperty = typeProperty;
        this.registration = registration;
        this.propertyCode = propertyCode;
        this.typeAgreement = typeAgreement;
        this.user = new UserModel(userId);
    }
}
