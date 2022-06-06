package br.com.api.grow.model.contract.DTO;

import br.com.api.grow.model.contract.entity.ContractModel;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
public class ContractDTO {


    private String nameClient;


    private Date date;


    private Integer typeProperty;


    private Integer registration;


    private Integer propertyCode;


    private String typeAgreement;

    private Long userId;



    public ContractModel transformObject(){
        return new ContractModel(nameClient, date, typeProperty, registration, propertyCode, typeAgreement, userId);
    }



}
