package br.com.api.grow.model.contract.service;

import br.com.api.grow.model.contract.DTO.ContractResponseDTO;
import br.com.api.grow.model.contract.entity.ContractModel;
import br.com.api.grow.model.contract.repository.ContractRepository;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

import static br.com.api.grow.model.contract.DTO.ContractResponseDTO.transformEmDTO;

@Service
public class ContractService {

    private final ContractRepository contractRepository;

    public ContractService(ContractRepository contractRepository){
        this.contractRepository = contractRepository;
    }


    public List<ContractResponseDTO> listContractUserId(Long userId){

        List<ContractResponseDTO> listContract = new ArrayList<>();

        for(ContractModel cm : contractRepository.findAllByUser_IdEquals(userId)){

            listContract.add(transformEmDTO(cm));
        }

        return listContract;
    }

    public ContractModel create(ContractModel contractModel){

        return contractRepository.save(contractModel);
    }
}
