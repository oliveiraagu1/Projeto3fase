package Grow.Controller;

import br.com.api.grow.controller.ContractController;
import br.com.api.grow.model.contract.entity.ContractModel;
import br.com.api.grow.model.contract.service.ContractService;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import org.springframework.test.web.servlet.MockMvc;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@ExtendWith(SpringExtension.class)
@WebMvcTest(controllers=ContractController.class)
public class ContractControllerTest {

    @MockBean
    ContractService contractService;

    @Autowired
     ObjectMapper mapper = new ObjectMapper();

    @Autowired
    private MockMvc mockMvc;

    @Test
    void cadastroContract() throws  JsonProcessingException, Exception{

        //entradas
        ContractModel contract = new ContractModel();
        contract.setName("casa azul");

        when(contractService.create(any(ContractModel.class))).thenReturn(contract);

        mockMvc.perform(post("/contract")
                        .content(mapper.writeValueAsString(contract))
                        .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isCreated())
                .andExpect(jsonPath("$.name").value(contract.getName()));
    }

}