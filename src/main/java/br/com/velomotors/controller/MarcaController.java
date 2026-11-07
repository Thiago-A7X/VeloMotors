package br.com.velomotors.controller;

import br.com.velomotors.model.Marca;
import br.com.velomotors.service.MarcaService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:63342")
@RestController
@RequestMapping("/marcas")
public class MarcaController {

    private final MarcaService marcaService;

    public MarcaController(MarcaService marcaService) {
        this.marcaService = marcaService;
    }

    // Lista todas as marcas cadastradas.
    @GetMapping
    public List<Marca> listarTodas() {
        return marcaService.listarTodas();
    }

    // Cadastra uma nova marca.
    @PostMapping
    public Marca cadastrar(@RequestBody Marca marca) {
        return marcaService.salvar(marca);
    }
}