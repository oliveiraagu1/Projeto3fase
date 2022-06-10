package br.com.api.grow.model.contract.service;

import br.com.api.grow.model.contract.DTO.ContractResponseDTO;
import br.com.api.grow.model.contract.entity.ContractModel;
import br.com.api.grow.model.contract.repository.ContractRepository;
import net.bytebuddy.agent.builder.AgentBuilder;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import static br.com.api.grow.model.contract.DTO.ContractResponseDTO.transformEmDTO;

@Service
public class ContractService {

    private final ContractRepository contractRepository;

    public ContractService(ContractRepository contractRepository){
        this.contractRepository = contractRepository;
    }


    public List<ContractResponseDTO> listContract(Long userId){

        List<ContractResponseDTO> listContract = new ArrayList<>();

        for(ContractModel cm : contractRepository.findAll()){

            listContract.add(transformEmDTO(cm));
        }

        return listContract;
    }

    public ContractModel create(ContractModel contractModel){

        return contractRepository.save(contractModel);
    }
}
