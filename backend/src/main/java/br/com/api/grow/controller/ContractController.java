package br.com.api.grow.controller;

import br.com.api.grow.model.contract.DTO.ContractDTO;
import br.com.api.grow.model.contract.DTO.ContractResponseDTO;
import br.com.api.grow.model.contract.entity.ContractModel;
import br.com.api.grow.model.contract.service.ContractService;
import br.com.api.grow.model.user.DTO.UserResponseDTO;
import br.com.api.grow.model.user.entity.UserModel;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/contract")
public class ContractController {

    private final ContractService contractService;

    public ContractController(ContractService contractService){
        this.contractService = contractService;
    }

    @GetMapping("/list/{userId}")
    public ResponseEntity<List<ContractResponseDTO>> listContract(@PathVariable Long userId){

        return new ResponseEntity<>(contractService.listContractUserId(userId), HttpStatus.OK);
    }

    @PostMapping("/created")
    public ResponseEntity<ContractResponseDTO> created(@RequestBody ContractDTO dto){

        ContractModel contractCreated = contractService.create(dto.transformObject());
        return new ResponseEntity<ContractResponseDTO>(ContractResponseDTO.transformEmDTO(contractCreated), HttpStatus.CREATED);
    }

}

