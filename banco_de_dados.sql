-- Banco de dados do projeto VeloMotors

CREATE DATABASE IF NOT EXISTS velomotors;

USE velomotors;

-- Tabela de marcas
CREATE TABLE IF NOT EXISTS marcas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL
);

-- Tabela de modelos
CREATE TABLE IF NOT EXISTS modelos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    marca_id INT NOT NULL,
    CONSTRAINT fk_modelos_marcas
        FOREIGN KEY (marca_id) REFERENCES marcas(id)
);

-- Tabela de veículos
CREATE TABLE IF NOT EXISTS veiculos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    placa VARCHAR(20) NOT NULL,
    ano INT NOT NULL,
    cor VARCHAR(50) NOT NULL,
    preco DOUBLE NOT NULL,
    quilometragem DOUBLE NOT NULL,
    disponivel BOOLEAN NOT NULL,
    modelo_id INT NOT NULL,
    CONSTRAINT fk_veiculos_modelos
        FOREIGN KEY (modelo_id) REFERENCES modelos(id)
);

-- Para conferir as tabelas criadas:
SHOW TABLES;

-- Para visualizar os registros:
SELECT * FROM marcas;
SELECT * FROM modelos;
SELECT * FROM veiculos;
