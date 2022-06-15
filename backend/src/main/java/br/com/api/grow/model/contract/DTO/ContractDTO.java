package br.com.api.grow.model.contract.DTO;

import br.com.api.grow.model.contract.entity.ContractModel;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
public class ContractDTO {

    private String name;
    private Date date;
    private Integer typeProperty;
    private Integer registration;
    private Integer propertyCode;
    private Integer typeAgreement;
    private Long userId;
    public ContractModel transformObject(){
        return new ContractModel(name, date, typeProperty, registration, propertyCode, typeAgreement, userId);
    }



}
