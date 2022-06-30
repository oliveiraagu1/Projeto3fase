package br.com.api.grow.model.contract.DTO;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
public class ContractGraphResponseDTO {

    private Integer rent;
    private Integer sales;
}
