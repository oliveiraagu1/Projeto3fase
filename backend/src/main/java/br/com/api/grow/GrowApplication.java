package br.com.api.grow;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;

@SpringBootApplication()
public class GrowApplication {
    public static void main(String[] args) {
        SpringApplication.run(GrowApplication.class, args);
    }

}
