VeloMotors
O VeloMotors é um projeto desenvolvido para um trabalho da faculdade. A ideia é criar um sistema simples para cadastrar e consultar veículos, incluindo carros e motos.
Tecnologias utilizadas
- Java
- Spring Boot
- MySQL
- HTML
- CSS
- JavaScript
Funcionalidades
- Cadastro de veículos
- Listagem dos veículos cadastrados
- Consulta de veículos
- Filtros por marca, modelo, ano, preço e disponibilidade
- Cadastro e consulta de marcas e modelos
- Integração com banco de dados MySQL
Banco de dados
O banco de dados utilizado no projeto se chama velomotors.

Ele possui três tabelas principais:
- marcas: armazena as marcas dos veículos.
- modelos: armazena os modelos e sua relação com uma marca.
- veiculos: armazena as informações dos veículos e sua relação com um modelo.
O arquivo banco_de_dados.sql contém o script para criar o banco e suas tabelas.
Como executar
1. Abra o projeto em uma IDE, como IntelliJ IDEA.
2. Crie o banco de dados MySQL usando o arquivo banco_de_dados.sql.
3. Confira as configurações de conexão com o MySQL no arquivo application.properties.
4. Execute a aplicação Spring Boot.
5. Abra o arquivo index.html da pasta frontend para acessar a parte visual do sistema.
Observação
Este projeto foi desenvolvido com fins de aprendizado, como parte de uma atividade acadêmica.
