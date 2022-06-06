package br.com.api.grow.model.contract.repository;

import br.com.api.grow.model.contract.entity.ContractModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ContractRepository extends JpaRepository<ContractModel, Long> {

}
