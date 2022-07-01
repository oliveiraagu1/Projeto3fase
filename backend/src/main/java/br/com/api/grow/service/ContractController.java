package br.com.api.grow.service;

import br.com.api.grow.model.contract.DTO.ContractDTO;
import br.com.api.grow.model.contract.DTO.ContractGraphResponseDTO;
import br.com.api.grow.model.contract.DTO.ContractResponseDTO;
import br.com.api.grow.model.contract.entity.ContractModel;
import br.com.api.grow.model.contract.service.ContractService;
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

    @GetMapping("/list")
    public ResponseEntity<List<ContractResponseDTO>> listAll(){
        return new ResponseEntity<>(contractService.listAllContracts(), HttpStatus.OK);
    }

    @GetMapping("/list/{id}")
    public ResponseEntity<List<ContractResponseDTO>> listContract(@PathVariable Long id){

        return new ResponseEntity<>(contractService.listContractById(id), HttpStatus.OK);
    }

    @GetMapping("/{userId}")
    public ResponseEntity<ContractGraphResponseDTO> Grafic(@PathVariable Long userId){


        return new ResponseEntity<ContractGraphResponseDTO>(contractService.graphList(userId),HttpStatus.OK);
    }


    @PostMapping("/created")
    public ResponseEntity<ContractResponseDTO> created(@RequestBody ContractDTO dto){

        ContractModel contractCreated = contractService.create(dto.transformObject());
        return new ResponseEntity<ContractResponseDTO>(ContractResponseDTO.transformEmDTO(contractCreated), HttpStatus.CREATED);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> deleteContract(@PathVariable Long id){
        contractService.deleteContract(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }


}

