package com.projetocodigocerto.api.repositories;

import com.projetocodigocerto.api.entitiy.Project;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProjectRepository extends JpaRepository<Project, Long> {

}
