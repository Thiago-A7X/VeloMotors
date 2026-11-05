package br.com.velomotors.service;

import br.com.velomotors.model.Marca;
import br.com.velomotors.repository.MarcaRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MarcaService {

    private final MarcaRepository marcaRepository;
    public MarcaService(MarcaRepository marcaRepository) {
        this.marcaRepository = marcaRepository;
    }

    // Lista todas as marcas.
    public List<Marca> listarTodas() {
        return marcaRepository.findAll();
    }

    // Cadastra uma nova marca.
    public Marca salvar(Marca marca) {
        return marcaRepository.save(marca);
    }
}