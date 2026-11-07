package br.com.velomotors.service;

import br.com.velomotors.model.Veiculo;
import br.com.velomotors.model.Modelo;
import br.com.velomotors.repository.ModeloRepository;
import br.com.velomotors.repository.VeiculoRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;


import java.util.List;

@Service
public class VeiculoService {

    private final VeiculoRepository veiculoRepository;
    private final ModeloRepository modeloRepository;

    public VeiculoService(VeiculoRepository veiculoRepository, ModeloRepository modeloRepository) {
        this.veiculoRepository = veiculoRepository;
        this.modeloRepository = modeloRepository;
    }

    // Lista todos os veículos cadastrados.
    public List<Veiculo> listarTodos() {
        return veiculoRepository.findAll();
    }

    // Cadastra um novo veículo.
    public Veiculo salvar(Veiculo veiculo) {
        Integer modeloId = veiculo.getModelo().getId();
        Modelo modelo = modeloRepository.findById(modeloId)
                .orElseThrow(() -> new RuntimeException("Modelo não encontrado!"));
        veiculo.setModelo(modelo);
        return veiculoRepository.save(veiculo);
    }

    // Consulta um veículo pela placa.
    public Veiculo consultarPorPlaca(String placa) {
        return veiculoRepository.findByPlacaIgnoreCase(placa);
    }

    // Filtra veículos pela marca.
    public List<Veiculo> filtrarPorMarca(String marca) {
        return veiculoRepository.findByModeloMarcaNomeIgnoreCase(marca);
    }

    // Filtra veículos pelo modelo.
    public List<Veiculo> filtrarPorModelo(String modelo) {
        return veiculoRepository.findByModeloNomeIgnoreCase(modelo);
    }

    // Filtra veículos pelo ano.
    public List<Veiculo> filtrarPorAno(int ano) {
        return veiculoRepository.findByAno(ano);
    }

    // Filtra veículos por faixa de preço.
    public List<Veiculo> filtrarPorPreco(double precoMinimo, double precoMaximo) {
        return veiculoRepository.findByPrecoBetween(precoMinimo, precoMaximo);
    }

    // Filtra veículos pela disponibilidade.
    public List<Veiculo> filtrarPorDisponibilidade(boolean disponivel) {
        return veiculoRepository.findByDisponivel(disponivel);
    }

    // Exclui um veículo pela placa.
    @Transactional
    public void excluirPorPlaca(String placa) {
        veiculoRepository.deleteByPlacaIgnoreCase(placa);
    }

    // Atualiza o preço de um veículo.
    public Veiculo atualizarPreco(String placa, double novoPreco) {
        Veiculo veiculo = veiculoRepository.findByPlacaIgnoreCase(placa);
        veiculo.setPreco(novoPreco);
        return veiculoRepository.save(veiculo);
    }

    // Atualiza a quilometragem de um veículo.
    public Veiculo atualizarQuilometragem(String placa, int novaQuilometragem) {
        Veiculo veiculo = veiculoRepository.findByPlacaIgnoreCase(placa);
        veiculo.setQuilometragem(novaQuilometragem);
        return veiculoRepository.save(veiculo);
    }

    // Atualiza a disponibilidade de um veículo.
    public Veiculo atualizarDisponibilidade(String placa, boolean novaDisponibilidade) {
        Veiculo veiculo = veiculoRepository.findByPlacaIgnoreCase(placa);
        veiculo.setDisponivel(novaDisponibilidade);
        return veiculoRepository.save(veiculo);
    }

}