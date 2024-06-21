package com.projetocodigocerto.api.entitiy;

import jakarta.persistence.*;

@Entity
    @Table(name = "language")
    public class Language {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id_language;
    private String name_language;

    public Long getId_language() {
        return id_language;
    }

    public void setId_language(Long id_language) {
        this.id_language = id_language;
    }

    public String getName_language() {
        return name_language;
    }

    public void setName_language(String name_language) {
        this.name_language = name_language;
    }
}
