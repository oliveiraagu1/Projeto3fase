package br.com.api.grow.service;

import br.com.api.grow.model.contract.entity.ContractModel;
import br.com.api.grow.model.contract.repository.ContractRepository;
import br.com.api.grow.model.contract.service.ContractService;
import br.com.api.grow.model.user.entity.UserModel;
import br.com.api.grow.model.user.repository.UserRepository;
import br.com.api.grow.model.user.service.UserService;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.springframework.test.context.junit.jupiter.SpringExtension;

import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.when;

@ExtendWith(SpringExtension.class)
public class UserServiceTest {

    @Mock
    UserRepository userRepository;

    @InjectMocks
    UserService userService;

    @Test
    void testCreate(){

        //entradas
        UserModel user = new UserModel(1L, "maria", "maria@teste.com", "1234", 1234567, null, null);


        when(userRepository.save(any(UserModel.class))).thenReturn(user);

        //ação
        UserModel userTest = this.userService.create(user);

        //verificação
        assertNotNull(userTest);
    }

}
