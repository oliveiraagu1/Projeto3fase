package br.com.senai.backend.controllers;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("contract")
public class ContractController {

    public String test(){
        return "test";
    }

}
