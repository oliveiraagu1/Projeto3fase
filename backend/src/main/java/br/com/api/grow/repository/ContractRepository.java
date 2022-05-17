package br.com.api.grow.repository;

import br.com.api.grow.model.ContractModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ContractRepository extends JpaRepository<ContractModel, Long> {

}
