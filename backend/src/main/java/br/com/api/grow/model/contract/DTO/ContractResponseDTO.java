package br.com.api.grow.model.contract.DTO;

import br.com.api.grow.model.contract.entity.ContractModel;
import br.com.api.grow.model.user.DTO.UserResponseDTO;
import br.com.api.grow.model.user.entity.UserModel;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Getter;

import java.util.Date;

@AllArgsConstructor
@Getter
public class ContractResponseDTO {

    private Long Id;

    private String nameClient;


    private Date date;


    private Integer typeProperty;


    private Integer registration;


    private Integer propertyCode;


    private String typeAgreement;

    private Long userId;

    public static ContractResponseDTO transformEmDTO(ContractModel contractModel) {
        return new ContractResponseDTO(
                contractModel.getId(),
                contractModel.getNameClient(),
                contractModel.getDate(),
                contractModel.getTypeProperty(),
                contractModel.getRegistration(),
                contractModel.getPropertyCode(),
                contractModel.getTypeAgreement(),
                contractModel.getUser().getId()
        );
    }
}

