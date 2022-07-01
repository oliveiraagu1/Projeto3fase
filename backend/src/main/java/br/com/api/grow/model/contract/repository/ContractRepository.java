package br.com.api.grow.model.contract.repository;

import br.com.api.grow.model.contract.entity.ContractModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;



@Repository
public interface ContractRepository extends JpaRepository<ContractModel, Long> {

    List<ContractModel> findAllById(Long userId);

    @Query("SELECT COUNT(u) FROM ContractModel u WHERE u.user.id = :userId AND u.typeAgreement = 1")
    Integer findByRent(@Param("userId") Long userId);

    @Query("SELECT COUNT(u) FROM ContractModel u WHERE u.user.id = :userId AND u.typeAgreement = 2")
    Integer findBySales(@Param("userId") Long userId);

}
