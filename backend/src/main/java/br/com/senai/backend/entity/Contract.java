package br.com.senai.backend.entity;

import java.util.Date;

import com.sun.istack.NotNull;
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
public class Contract {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column @NotNull
    private String name;

    @Column @NotNull
    private Date date;

    @Column @NotNull
    private String typeProperty;

    @Column @NotNull
    private String typeAgreement;

    @Column @NotNull
    private String propertyCode;

    @ManyToOne(cascade = ALL)
    @JoinColumn(name="user_id", referencedColumnName = "id", nullable = false)
    private User user;



}
