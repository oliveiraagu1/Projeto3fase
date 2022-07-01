package br.com.api.grow.model.contract.DTO;

import br.com.api.grow.model.contract.entity.ContractModel;
import lombok.AllArgsConstructor;
import lombok.Getter;

import java.time.LocalDate;

@AllArgsConstructor
@Getter
public class ContractResponseDTO {

    private Long Id;

    private String name;


    private LocalDate contractDate;


    private Integer typeProperty;


    private Integer registration;


    private Integer propertyCode;


    private Integer typeAgreement;

    private Long userId;

    public static ContractResponseDTO transformEmDTO(ContractModel contractModel) {
        return new ContractResponseDTO(
                contractModel.getId(),
                contractModel.getName(),
                contractModel.getContractDate(),
                contractModel.getTypeProperty(),
                contractModel.getRegistration(),
                contractModel.getPropertyCode(),
                contractModel.getTypeAgreement(),
                contractModel.getUser().getId()
        );
    }
}

