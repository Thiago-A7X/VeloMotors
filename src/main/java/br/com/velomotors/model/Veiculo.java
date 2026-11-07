
package br.com.velomotors.model;

// Importações necessárias para conectar a classe ao banco de dados.
import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import jakarta.persistence.Id;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.JoinColumn;

// Indica que esta classe representa uma tabela do banco de dados.
@Entity
@Table(name = "tbl_veiculos")

public class Veiculo {

    // Atributos que armazenam as informações de cada veículo.
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String placa;

    @ManyToOne
    @JoinColumn(name = "modelo_id")
    private Modelo modelo;

    private int ano;
    private String cor;
    private double preco;
    private int quilometragem;
    private boolean disponivel;

    // Métodos Getters e Setters.
    // GETTER (get): permite obter o valor de um atributo.
    // SETTER (set): permite alterar o valor de um atributo.

    public Integer getId() {
        return id;
    }

    public String getPlaca() {
        return placa;
    }

    public void setPlaca(String placa) {
        this.placa = placa;
    }

    public Modelo getModelo() {
        return modelo;
    }

    public void setModelo(Modelo modelo) {
        this.modelo = modelo;
    }

    public int getAno() {
        return ano;
    }

    public void setAno(int ano) {
        this.ano = ano;
    }

    public String getCor() {
        return cor;
    }

    public void setCor(String cor) {
        this.cor = cor;
    }

    public double getPreco() {
        return preco;
    }

    public void setPreco(double preco) {
        this.preco = preco;
    }

    public int getQuilometragem() {
        return quilometragem;
    }

    public void setQuilometragem(int quilometragem) {
        this.quilometragem = quilometragem;
    }

    public boolean isDisponivel() {
        return disponivel;
    }

    public void setDisponivel(boolean disponivel) {
        this.disponivel = disponivel;
    }

    // EXIBE TODAS AS INFORMAÇÕES CADASTRADAS DO VEÍCULO.
    public void exibirInformacoes() {

        System.out.println("---------- Informações do Veículo cadastrado ----------");
        System.out.println();
        System.out.println("Placa do veículo: " + placa);
        System.out.println("O modelo do veículo é: " + modelo.getNome());
        System.out.println("A marca do veículo é: " + modelo.getMarca().getNome());
        System.out.println("O ano do veículo é: " + ano);
        System.out.println("A cor do veículo é: " + cor);
        System.out.printf("O preço do veículo é: R$ %,.2f%n", preco);
        System.out.println("A quilometragem do veículo é: " + quilometragem + " KM's");
        if (disponivel) {
            System.out.println("O veículo está DISPONÍVEL para venda.");
        } else {
            System.out.println("O veículo está INDISPONÍVEL para venda.");
        }
        System.out.println();
    }
}
