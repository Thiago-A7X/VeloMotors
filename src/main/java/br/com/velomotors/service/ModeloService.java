
package br.com.velomotors.service;

import br.com.velomotors.model.Modelo;
import br.com.velomotors.model.Marca;
import br.com.velomotors.repository.ModeloRepository;
import br.com.velomotors.repository.MarcaRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ModeloService {

    private final ModeloRepository modeloRepository;
    private final MarcaRepository marcaRepository;

    public ModeloService(ModeloRepository modeloRepository, MarcaRepository marcaRepository) {
        this.modeloRepository = modeloRepository;
        this.marcaRepository = marcaRepository;
    }

    // Lista todos os modelos cadastrados.
    public List<Modelo> listarTodos() {
        return modeloRepository.findAll();
    }

    // Lista os modelos de acordo com a marca selecionada.
    public List<Modelo> listarPorMarca(String nomeMarca) {
        return modeloRepository.findByMarcaNomeIgnoreCase(nomeMarca);
    }

    // Cadastra um novo modelo.
    public Modelo salvar(Modelo modelo) {
        Integer marcaId = modelo.getMarca().getId();

        Marca marca = marcaRepository.findById(marcaId)
                .orElseThrow(() -> new IllegalArgumentException("Marca não encontrada!"));

        modelo.setMarca(marca);

        return modeloRepository.save(modelo);
    }
}
