package br.com.velomotors.repository;

import java.util.List;

// Importa a classe Veiculo.
import br.com.velomotors.model.Veiculo;

// Importa os recursos de acesso ao banco de dados.
import org.springframework.data.jpa.repository.JpaRepository;

// Interface responsável pelo acesso aos veículos no banco de dados.
public interface VeiculoRepository extends JpaRepository<Veiculo, Integer> {
    Veiculo findByPlacaIgnoreCase(String placa);
    List<Veiculo> findByModeloMarcaNomeIgnoreCase(String marca);
    List<Veiculo> findByModeloNomeIgnoreCase(String modelo);
    List<Veiculo> findByPrecoBetween(double precoMinimo, double precoMaximo);
    List<Veiculo> findByAno(int ano);
    List<Veiculo> findByDisponivel(boolean disponivel);
    void deleteByPlacaIgnoreCase(String placa);
}