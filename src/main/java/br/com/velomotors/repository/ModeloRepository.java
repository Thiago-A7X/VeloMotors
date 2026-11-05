package br.com.velomotors.repository;

import br.com.velomotors.model.Modelo;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

// Interface responsável pelo acesso aos modelos no banco de dados.
public interface ModeloRepository extends JpaRepository<Modelo, Integer> {

    // O JpaRepository fornece métodos prontos para cadastrar,
    // consultar, listar, atualizar e excluir modelos.

    // Busca os modelos pelo nome da marca.
    List<Modelo> findByMarcaNomeIgnoreCase(String nomeMarca);
}