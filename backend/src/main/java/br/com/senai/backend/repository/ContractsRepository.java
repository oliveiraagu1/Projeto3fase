package br.com.senai.backend.repository;

import br.com.senai.backend.entity.Contract;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ContractsRepository extends JpaRepository<Contract, Long> {
}
