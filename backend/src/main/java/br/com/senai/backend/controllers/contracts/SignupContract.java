package br.com.senai.backend.controllers.contracts;

import br.com.senai.backend.repository.ContractsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("contract")
public class SignupContract {

    @Autowired
    ContractsRepository contractsRepository;

    public String test(){
        return "test";
    }

}
