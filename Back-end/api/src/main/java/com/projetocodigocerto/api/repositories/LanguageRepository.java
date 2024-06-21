package com.projetocodigocerto.api.repositories;

import com.projetocodigocerto.api.entitiy.Language;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LanguageRepository  extends JpaRepository<Language, Long> {

}
