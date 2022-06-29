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

    public List<ContractResponseDTO> listAllContracts(){
        List<ContractResponseDTO> listContract = new ArrayList<>();
        for(ContractModel cm : contractRepository.findAll()){

            listContract.add(transformEmDTO(cm));
        }
        return listContract;
    }

    public List<ContractResponseDTO> listContractById(Long id){

        List<ContractResponseDTO> listContract = new ArrayList<>();

        for(ContractModel cm : contractRepository.findAllById(id)){

            listContract.add(transformEmDTO(cm));
        }

        return listContract;
    }

    public ContractModel create(ContractModel contractModel){

        return contractRepository.save(contractModel);
    }

    public void deleteContract(Long id){
       contractRepository.deleteById(id);
    }

}
