package br.com.api.grow.service;

import br.com.api.grow.model.contract.DTO.ContractDTO;
import br.com.api.grow.model.contract.DTO.ContractGraphResponseDTO;
import br.com.api.grow.model.contract.entity.ContractModel;
import br.com.api.grow.model.contract.repository.ContractRepository;
import br.com.api.grow.model.contract.service.ContractService;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.mockito.Mock;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import static org.junit.jupiter.api.Assertions.*;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.when;


@ExtendWith(SpringExtension.class)
public class ContractServiceTest {

    @Mock
    ContractRepository contractRepository;

    @InjectMocks
    ContractService contractService;

    @Test
    void testCreate(){

        //entradas
        ContractModel contract = new ContractModel("Casa azul", null, 1, 12345, 1234567, 2, 1L);

        when(contractRepository.save(any(ContractModel.class))).thenReturn(contract);

        //ação
        ContractModel contractTest = this.contractService.create(contract);

        //verificação
        assertNotNull(contractTest);
    }

    @Test
    void graphListTest(){

        //entradas
        when(contractRepository.findByRent(any(Long.class))).thenReturn(2);
        when(contractRepository.findBySales(any(Long.class))).thenReturn(2);

        //ação
        ContractGraphResponseDTO contractGraphResponseDTO = this.contractService.graphList(1L);

        //verificação
        assertNotNull(contractGraphResponseDTO);
        assertTrue(contractGraphResponseDTO.getRent() == 2);
        assertTrue(contractGraphResponseDTO.getSales() == 2);
    }
}