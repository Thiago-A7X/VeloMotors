package br.com.velomotors.controller;

import br.com.velomotors.model.Modelo;
import br.com.velomotors.service.ModeloService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:63342")
@RestController
@RequestMapping("/modelos")
public class ModeloController {

    private final ModeloService modeloService;

    public ModeloController(ModeloService modeloService) {
        this.modeloService = modeloService;
    }

    // Lista todos os modelos cadastrados.
    @GetMapping
    public List<Modelo> listarTodos() {
        return modeloService.listarTodos();
    }

    // Lista os modelos de uma marca específica.
    @GetMapping("/marca/{nomeMarca}")
    public List<Modelo> listarPorMarca(@PathVariable String nomeMarca) {
        return modeloService.listarPorMarca(nomeMarca);
    }

    // Cadastra um novo modelo.
    @PostMapping
    public Modelo cadastrar(@RequestBody Modelo modelo) {
        return modeloService.salvar(modelo);
    }
}