package br.com.velomotors.controller;


import br.com.velomotors.model.Veiculo;
import br.com.velomotors.service.VeiculoService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.CrossOrigin;
import java.util.List;

@CrossOrigin(origins = "http://localhost:63342")
@RestController
@RequestMapping("/veiculos")
public class VeiculoController {
    private final VeiculoService veiculoService;
    public VeiculoController(VeiculoService veiculoService) {
        this.veiculoService = veiculoService;
    }

    // Lista todos os veículos cadastrados.
    @GetMapping
    public List<Veiculo> listarTodos() {
        return veiculoService.listarTodos();
    }

    // Cadastra um novo veículo.
    @PostMapping
    public Veiculo cadastrar(@RequestBody Veiculo veiculo) {
        return veiculoService.salvar(veiculo);
    }

    // Consulta um veículo pela placa.
    @GetMapping("/placa/{placa}")
    public Veiculo consultarPorPlaca(@PathVariable String placa) {
        return veiculoService.consultarPorPlaca(placa);
    }

    // Filtra veículos pela marca.
    @GetMapping("/marca/{marca}")
    public List<Veiculo> filtrarPorMarca(@PathVariable String marca) {
        return veiculoService.filtrarPorMarca(marca);
    }

    // Filtra veículos pelo modelo.
    @GetMapping("/modelo/{modelo}")
    public List<Veiculo> filtrarPorModelo(@PathVariable String modelo) {
        return veiculoService.filtrarPorModelo(modelo);
    }

    // Filtra veículos pelo ano.
    @GetMapping("/ano/{ano}")
    public List<Veiculo> filtrarPorAno(@PathVariable int ano) {
        return veiculoService.filtrarPorAno(ano);
    }

    // Filtra veículos por faixa de preço.
    @GetMapping("/preco")
    public List<Veiculo> filtrarPorPreco(
            @RequestParam double precoMinimo,
            @RequestParam double precoMaximo) {
        return veiculoService.filtrarPorPreco(precoMinimo, precoMaximo);
    }

    // Filtra veículos pela disponibilidade.
    @GetMapping("/disponibilidade/{disponivel}")
    public List<Veiculo> filtrarPorDisponibilidade(@PathVariable boolean disponivel) {
        return veiculoService.filtrarPorDisponibilidade(disponivel);
    }

    // Exclui um veículo pela placa.
    @DeleteMapping("/placa/{placa}")
    public void excluirPorPlaca(@PathVariable String placa) {
        veiculoService.excluirPorPlaca(placa);
    }

    // Atualiza o preço de um veículo.
    @PutMapping("/preco/{placa}")
    public Veiculo atualizarPreco(
            @PathVariable String placa,
            @RequestParam double novoPreco) {
        return veiculoService.atualizarPreco(placa, novoPreco);
    }

    // Atualiza a quilometragem de um veículo.
    @PutMapping("/quilometragem/{placa}")
    public Veiculo atualizarQuilometragem(
            @PathVariable String placa,
            @RequestParam int novaQuilometragem) {
        return veiculoService.atualizarQuilometragem(placa, novaQuilometragem);
    }

    // Atualiza a disponibilidade de um veículo.
    @PutMapping("/disponibilidade/{placa}")
    public Veiculo atualizarDisponibilidade(
            @PathVariable String placa,
            @RequestParam boolean novaDisponibilidade) {
        return veiculoService.atualizarDisponibilidade(placa, novaDisponibilidade);
    }
}
