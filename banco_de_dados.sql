CREATE DATABASE velomotors;
USE velomotors;

-- =====================================
-- TABELA DE MARCAS
-- =====================================

CREATE TABLE tbl_marcas (
id INT AUTO_INCREMENT PRIMARY KEY,
nome VARCHAR(100) NOT NULL UNIQUE
);

-- =====================================
-- TABELA DE MODELOS
-- =====================================

CREATE TABLE tbl_modelos (
id INT AUTO_INCREMENT PRIMARY KEY,
nome VARCHAR(100) NOT NULL,
marca_id INT NOT NULL,
FOREIGN KEY (marca_id) REFERENCES tbl_marcas(id),
UNIQUE (nome, marca_id)
);

-- =====================================
-- TABELA DE VEÍCULOS
-- =====================================

CREATE TABLE tbl_veiculos (
id INT AUTO_INCREMENT PRIMARY KEY,
placa VARCHAR(10) NOT NULL UNIQUE,
ano INT NOT NULL,
cor VARCHAR(50) NOT NULL,
preco DECIMAL(10,2) NOT NULL,
quilometragem INT NOT NULL,
disponivel BOOLEAN NOT NULL,
modelo_id INT NOT NULL,

FOREIGN KEY (modelo_id) REFERENCES tbl_modelos(id)
);

-- =====================================
-- CADASTRO DAS MARCAS
-- =====================================

INSERT INTO tbl_marcas (nome)
VALUES
('Volkswagen'),
('Chevrolet'),
('Fiat'),
('Ford'),
('Toyota'),
('Honda'),
('Yamaha'),
('Jeep'),
('Hyundai'),
('Renault');

-- =====================================
-- MODELOS VOLKSWAGEN (ID 1)
-- =====================================

INSERT INTO tbl_modelos (nome, marca_id)
VALUES
('Amarok', 1),
('Crossfox', 1),
('Fox', 1),
('Gol', 1),
('Golf', 1),
('Jetta', 1),
('Nivus', 1),
('Polo', 1),
('Saveiro', 1),
('Spacefox', 1),
('T-Cross', 1),
('Taos', 1),
('Tiguan', 1),
('Virtus', 1),
('Voyage', 1),
('Up', 1);

-- =====================================
-- MODELOS CHEVROLET (ID 2)
-- =====================================

INSERT INTO tbl_modelos (nome, marca_id)
VALUES
('Agile', 2),
('Astra', 2),
('Blazer', 2),
('Captiva', 2),
('Celta', 2),
('Classic', 2),
('Cobalt', 2),
('Corsa', 2),
('Cruze', 2),
('Meriva', 2),
('Montana', 2),
('Onix', 2),
('Prisma', 2),
('S10', 2),
('Spin', 2),
('Tracker', 2),
('Vectra', 2),
('Zafira', 2);

-- =====================================
-- MODELOS FIAT (ID 3)
-- =====================================

INSERT INTO tbl_modelos (nome, marca_id)
VALUES
('Argo', 3),
('Cronos', 3),
('Doblô', 3),
('Ducato', 3),
('Fastback', 3),
('Fiorino', 3),
('Mobi', 3),
('Palio', 3),
('Punto', 3),
('Siena', 3),
('Stilo', 3),
('Strada', 3),
('Toro', 3),
('Uno', 3);

-- =====================================
-- MODELOS FORD (ID 4)
-- =====================================

INSERT INTO tbl_modelos (nome, marca_id)
VALUES
('Bronco', 4),
('Courier', 4),
('EcoSport', 4),
('F-250', 4),
('Fiesta', 4),
('Focus', 4),
('Fusion', 4),
('Ka', 4),
('New Fiesta', 4),
('Ranger', 4),
('Taurus', 4);

-- =====================================
-- MODELOS TOYOTA (ID 5)
-- =====================================

INSERT INTO tbl_modelos (nome, marca_id)
VALUES
('Corolla', 5),
('Etios', 5),
('Hilux', 5),
('Yaris', 5);

-- =====================================
-- MODELOS HONDA (ID 6)
-- =====================================

INSERT INTO tbl_modelos (nome, marca_id)
VALUES

-- Motos
('Biz', 6),
('CB 300', 6),
('CB 400', 6),
('CB 500', 6),
('CG 150', 6),
('Hornet', 6),
('XRE', 6),

-- Carros
('City', 6),
('Civic', 6),
('CR-V', 6),
('Fit', 6),
('HR-V', 6);

-- =====================================
-- MODELOS YAMAHA (ID 7)
-- =====================================

INSERT INTO tbl_modelos (nome, marca_id)
VALUES
('Factor 125', 7),
('Factor 150', 7),
('Fazer', 7),
('MT-07', 7),
('MT-09', 7),
('MT-10', 7),
('XJ6', 7),
('XT 600', 7);

-- =====================================
-- MODELOS JEEP (ID 8)
-- =====================================

INSERT INTO tbl_modelos (nome, marca_id)
VALUES
('Avenger', 8),
('Cherokee', 8),
('Commander', 8),
('Compass', 8),
('Renegade', 8),
('Wrangler', 8);

-- =====================================
-- MODELOS HYUNDAI (ID 9)
-- =====================================

INSERT INTO tbl_modelos (nome, marca_id)
VALUES
('Azera', 9),
('Creta', 9),
('Elantra', 9),
('HB20', 9),
('I30', 9),
('Santa Fé', 9),
('Sonata', 9),
('Terracan', 9),
('Tucson', 9),
('Veloster', 9);

-- =====================================
-- MODELOS RENAULT (ID 10)
-- =====================================

INSERT INTO tbl_modelos (nome, marca_id)
VALUES
('Clio', 10),
('Duster', 10),
('Logan', 10),
('Megane', 10),
('Oroch', 10),
('Sandero', 10);


