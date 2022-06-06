package br.com.api.grow.model.contract.service;

import br.com.api.grow.model.contract.entity.ContractModel;
import br.com.api.grow.model.contract.repository.ContractRepository;
import br.com.api.grow.model.user.entity.UserModel;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ContractService {

    private final ContractRepository contractRepository;

    public ContractService(ContractRepository contractRepository){
        this.contractRepository = contractRepository;
    }


    public List<ContractModel> listContract(){
        return contractRepository.findAll();

    }

    public ContractModel create(ContractModel contractModel){

        return contractRepository.save(contractModel);
    }
}
