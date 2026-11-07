
const API = "http://localhost:8080";

// ==============================
// ABRIR TELAS
// ==============================

function esconderTelas() {
    document.getElementById("tela-inicio").style.display = "none";
    document.getElementById("tela-cadastro").style.display = "none";
    document.getElementById("tela-veiculos").style.display = "none";
    document.getElementById("tela-consulta").style.display = "none";
    document.getElementById("tela-marca").style.display = "none";
    document.getElementById("tela-modelo").style.display = "none";
}

function abrirInicio() {
    esconderTelas();
    document.getElementById("tela-inicio").style.display = "block";
}

function abrirCadastro() {
    esconderTelas();
    document.getElementById("tela-cadastro").style.display = "block";
    carregarMarcas();
}

function abrirVeiculos() {
    esconderTelas();
    document.getElementById("tela-veiculos").style.display = "block";
    carregarMarcas();
    carregarVeiculos();
}

function abrirConsulta() {
    esconderTelas();
    document.getElementById("tela-consulta").style.display = "block";
    document.getElementById("resultado-consulta").innerHTML = "";
}

function abrirCadastroMarca() {
    esconderTelas();
    document.getElementById("tela-marca").style.display = "block";
}

function abrirCadastroModelo() {
    esconderTelas();
    document.getElementById("tela-modelo").style.display = "block";
    carregarMarcas();
}

// ==============================
// CARREGAR MARCAS E MODELOS
// ==============================

async function carregarMarcas() {
    try {
        const resposta = await fetch(`${API}/marcas`);

        if (!resposta.ok) {
            throw new Error("Erro ao carregar marcas.");
        }

        const marcas = await resposta.json();

        const campoMarca = document.getElementById("marca");
        const campoMarcaModelo = document.getElementById("marca-modelo");
        const campoFiltroMarca = document.getElementById("filtro-marca");

        if (campoMarca) {
            campoMarca.innerHTML = '<option value="">Selecione a marca</option>';

            marcas.forEach(function(marca) {
                const opcao = document.createElement("option");
                opcao.value = marca.nome;
                opcao.textContent = marca.nome;
                campoMarca.appendChild(opcao);
            });
        }

        if (campoMarcaModelo) {
            campoMarcaModelo.innerHTML = '<option value="">Selecione a marca</option>';

            marcas.forEach(function(marca) {
                const opcao = document.createElement("option");
                opcao.value = marca.id;
                opcao.textContent = marca.nome;
                campoMarcaModelo.appendChild(opcao);
            });
        }

        if (campoFiltroMarca) {
            campoFiltroMarca.innerHTML = '<option value="">Todas as marcas</option>';

            marcas.forEach(function(marca) {
                const opcao = document.createElement("option");
                opcao.value = marca.nome;
                opcao.textContent = marca.nome;
                campoFiltroMarca.appendChild(opcao);
            });
        }

    } catch (erro) {
        alert("Não foi possível carregar as marcas.");
        console.error(erro);
    }
}

async function carregarModelos() {
    const marcaSelecionada = document.getElementById("marca").value;
    const campoModelo = document.getElementById("modelo");

    campoModelo.innerHTML = '<option value="">Selecione o modelo</option>';

    if (marcaSelecionada === "") return;

    try {
        const resposta = await fetch(
            `${API}/modelos/marca/${encodeURIComponent(marcaSelecionada)}`
        );

        if (!resposta.ok) {
            throw new Error("Erro ao carregar modelos.");
        }

        const modelos = await resposta.json();

        modelos.forEach(function(modelo) {
            const opcao = document.createElement("option");
            opcao.value = modelo.id;
            opcao.textContent = modelo.nome;
            campoModelo.appendChild(opcao);
        });

    } catch (erro) {
        alert("Não foi possível carregar os modelos.");
        console.error(erro);
    }
}

// ==============================
// CADASTRAR VEÍCULO
// ==============================

document.getElementById("form-veiculo").addEventListener("submit", async function(event) {
    event.preventDefault();

    const veiculo = {
        placa: document.getElementById("placa").value.trim(),
        modelo: {
            id: Number(document.getElementById("modelo").value)
        },
        ano: Number(document.getElementById("ano").value),
        cor: document.getElementById("cor").value.trim(),
        preco: Number(document.getElementById("preco").value),
        quilometragem: Number(document.getElementById("quilometragem").value),
        disponivel: document.getElementById("disponivel").value === "true"
    };

    try {
        const resposta = await fetch(`${API}/veiculos`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(veiculo)
        });

        if (!resposta.ok) {
            throw new Error("Erro ao cadastrar veículo.");
        }

        const dados = await resposta.json();

        alert("Veículo cadastrado com sucesso!");
        console.log(dados);

        document.getElementById("form-veiculo").reset();
        document.getElementById("modelo").innerHTML =
            '<option value="">Selecione o modelo</option>';

    } catch (erro) {
        alert("Não foi possível cadastrar o veículo.");
        console.error(erro);
    }
});

// ==============================
// CADASTRAR MARCA
// ==============================

document.getElementById("form-marca").addEventListener("submit", async function(event) {
    event.preventDefault();

    const marca = {
        nome: document.getElementById("nome-marca").value.trim()
    };

    if (marca.nome === "") {
        alert("Digite o nome da marca.");
        return;
    }

    try {
        const resposta = await fetch(`${API}/marcas`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(marca)
        });

        if (!resposta.ok) {
            throw new Error("Erro ao cadastrar marca.");
        }

        alert("Marca cadastrada com sucesso!");

        document.getElementById("form-marca").reset();

        await carregarMarcas();

    } catch (erro) {
        alert("Não foi possível cadastrar a marca.");
        console.error(erro);
    }
});

// ==============================
// CADASTRAR MODELO
// ==============================

document.getElementById("form-modelo").addEventListener("submit", async function(event) {
    event.preventDefault();

    const modelo = {
        nome: document.getElementById("nome-modelo").value.trim(),
        marca: {
            id: Number(document.getElementById("marca-modelo").value)
        }
    };

    if (modelo.nome === "" || !modelo.marca.id) {
        alert("Preencha o modelo e selecione uma marca.");
        return;
    }

    try {
        const resposta = await fetch(`${API}/modelos`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(modelo)
        });

        if (!resposta.ok) {
            throw new Error("Erro ao cadastrar modelo.");
        }

        alert("Modelo cadastrado com sucesso!");

        document.getElementById("form-modelo").reset();

        await carregarMarcas();

    } catch (erro) {
        alert("Não foi possível cadastrar o modelo.");
        console.error(erro);
    }
});

// ==============================
// LISTAR VEÍCULOS
// ==============================

async function carregarVeiculos() {
    try {
        const resposta = await fetch(`${API}/veiculos`);

        if (!resposta.ok) {
            throw new Error("Erro ao carregar veículos.");
        }

        const veiculos = await resposta.json();

        exibirVeiculos(veiculos);

    } catch (erro) {
        alert("Não foi possível carregar os veículos.");
        console.error(erro);
    }
}

// ==============================
// EXIBIR VEÍCULOS NA TABELA
// ==============================

function exibirVeiculos(veiculos) {
    const tabela = document.getElementById("lista-veiculos");

    tabela.innerHTML = "";

    if (veiculos.length === 0) {
        tabela.innerHTML = '<tr><td colspan="9">Nenhum veículo encontrado.</td></tr>';
        return;
    }

    veiculos.forEach(function(veiculo) {
        const linha = document.createElement("tr");

        linha.innerHTML = `
            <td>${veiculo.placa}</td>
            <td>${veiculo.modelo.nome}</td>
            <td>${veiculo.modelo.marca.nome}</td>
            <td>${veiculo.ano}</td>
            <td>${veiculo.cor}</td>
            <td>R$ ${veiculo.preco.toFixed(2)}</td>
            <td>${veiculo.quilometragem}</td>
            <td>
                <span class="${veiculo.disponivel ? 'status-disponivel' : 'status-vendido'}">
                    ${veiculo.disponivel ? "Disponível" : "Vendido"}
                </span>
            </td>
            <td>
                <button onclick="excluirVeiculo('${veiculo.placa}')">
                    Excluir
                </button>
            </td>
        `;

        tabela.appendChild(linha);
    });
}

// ==============================
// FILTRAR VEÍCULOS
// ==============================

async function filtrarVeiculos() {
    const marca = document.getElementById("filtro-marca").value;
    const modelo = document.getElementById("filtro-modelo").value.trim();
    const ano = document.getElementById("filtro-ano").value;
    const precoMin = document.getElementById("filtro-preco-min").value;
    const precoMax = document.getElementById("filtro-preco-max").value;
    const disponibilidade = document.getElementById("filtro-disponibilidade").value;

    if (precoMin !== "" && precoMax !== "" && Number(precoMin) > Number(precoMax)) {
        alert("O preço mínimo não pode ser maior que o preço máximo.");
        return;
    }

    try {
        const resposta = await fetch(`${API}/veiculos`);

        if (!resposta.ok) {
            throw new Error("Erro ao buscar veículos.");
        }

        let veiculos = await resposta.json();

        if (marca !== "") {
            veiculos = veiculos.filter(v =>
                v.modelo.marca.nome.toLowerCase() === marca.toLowerCase()
            );
        }

        if (modelo !== "") {
            veiculos = veiculos.filter(v =>
                v.modelo.nome.toLowerCase().includes(modelo.toLowerCase())
            );
        }

        if (ano !== "") {
            veiculos = veiculos.filter(v =>
                v.ano === Number(ano)
            );
        }

        if (precoMin !== "") {
            veiculos = veiculos.filter(v =>
                v.preco >= Number(precoMin)
            );
        }

        if (precoMax !== "") {
            veiculos = veiculos.filter(v =>
                v.preco <= Number(precoMax)
            );
        }

        if (disponibilidade !== "") {
            veiculos = veiculos.filter(v =>
                v.disponivel === (disponibilidade === "true")
            );
        }

        exibirVeiculos(veiculos);

    } catch (erro) {
        alert("Não foi possível filtrar os veículos.");
        console.error(erro);
    }
}

// ==============================
// LIMPAR FILTROS
// ==============================

function limparFiltros() {
    document.getElementById("filtro-marca").value = "";
    document.getElementById("filtro-modelo").value = "";
    document.getElementById("filtro-ano").value = "";
    document.getElementById("filtro-preco-min").value = "";
    document.getElementById("filtro-preco-max").value = "";
    document.getElementById("filtro-disponibilidade").value = "";

    carregarVeiculos();
}

// ==============================
// CONSULTAR VEÍCULO PELA PLACA
// ==============================

async function buscarVeiculo() {
    const placa = document.getElementById("placa-consulta").value.trim();
    const resultado = document.getElementById("resultado-consulta");

    if (placa === "") {
        alert("Digite uma placa para consultar.");
        return;
    }

    try {
        const resposta = await fetch(
            `${API}/veiculos/placa/${encodeURIComponent(placa)}`
        );

        if (!resposta.ok) {
            resultado.innerHTML = "<p>Veículo não encontrado.</p>";
            return;
        }

        const veiculo = await resposta.json();

        if (!veiculo) {
            resultado.innerHTML = "<p>Veículo não encontrado.</p>";
            return;
        }

        resultado.innerHTML = `
            <h2>Veículo encontrado!</h2>
            <p><strong>Placa:</strong> ${veiculo.placa}</p>
            <p><strong>Modelo:</strong> ${veiculo.modelo.nome}</p>
            <p><strong>Marca:</strong> ${veiculo.modelo.marca.nome}</p>
            <p><strong>Ano:</strong> ${veiculo.ano}</p>
            <p><strong>Cor:</strong> ${veiculo.cor}</p>
            <p><strong>Preço:</strong> R$ ${veiculo.preco.toFixed(2)}</p>
            <p><strong>Quilometragem:</strong> ${veiculo.quilometragem}</p>
            <p><strong>Disponibilidade:</strong> ${veiculo.disponivel ? "Disponível" : "Vendido"}</p>
            <hr>
            <h3>Gerenciar veículo</h3>
            <button onclick="alterarPreco('${veiculo.placa}')">Alterar preço</button>
            <button onclick="alterarQuilometragem('${veiculo.placa}')">Alterar quilometragem</button>
            <button onclick="alterarDisponibilidade('${veiculo.placa}', ${veiculo.disponivel})">Alterar disponibilidade</button>
            <button onclick="excluirVeiculo('${veiculo.placa}')">Excluir veículo</button>
        `;

    } catch (erro) {
        alert("Não foi possível consultar o veículo.");
        console.error(erro);
    }
}

// ==============================
// ALTERAR PREÇO
// ==============================

async function alterarPreco(placa) {
    const novoPreco = prompt("Digite o novo preço do veículo:");

    if (novoPreco === null || novoPreco.trim() === "") return;

    const valor = Number(novoPreco.replace(",", "."));

    if (!Number.isFinite(valor) || valor < 0) {
        alert("Digite um preço válido.");
        return;
    }

    try {
        const resposta = await fetch(
            `${API}/veiculos/preco/${encodeURIComponent(placa)}?novoPreco=${valor}`,
            { method: "PUT" }
        );

        if (!resposta.ok) {
            throw new Error("Erro ao alterar preço.");
        }

        alert("Preço atualizado com sucesso!");
        buscarVeiculo();

    } catch (erro) {
        alert("Não foi possível alterar o preço.");
        console.error(erro);
    }
}

// ==============================
// ALTERAR QUILOMETRAGEM
// ==============================

async function alterarQuilometragem(placa) {
    const novaKm = prompt("Digite a nova quilometragem:");

    if (novaKm === null || novaKm.trim() === "") return;

    const valor = Number(novaKm);

    if (!Number.isInteger(valor) || valor < 0) {
        alert("Digite uma quilometragem válida.");
        return;
    }

    try {
        const resposta = await fetch(
            `${API}/veiculos/quilometragem/${encodeURIComponent(placa)}?novaQuilometragem=${valor}`,
            { method: "PUT" }
        );

        if (!resposta.ok) {
            throw new Error("Erro ao alterar quilometragem.");
        }

        alert("Quilometragem atualizada com sucesso!");
        buscarVeiculo();

    } catch (erro) {
        alert("Não foi possível alterar a quilometragem.");
        console.error(erro);
    }
}

// ==============================
// ALTERAR DISPONIBILIDADE
// ==============================

async function alterarDisponibilidade(placa, disponivelAtual) {
    const novaDisponibilidade = !disponivelAtual;

    const confirmar = confirm(
        novaDisponibilidade
            ? "Deseja marcar o veículo como disponível?"
            : "Deseja marcar o veículo como vendido?"
    );

    if (!confirmar) return;

    try {
        const resposta = await fetch(
            `${API}/veiculos/disponibilidade/${encodeURIComponent(placa)}?novaDisponibilidade=${novaDisponibilidade}`,
            { method: "PUT" }
        );

        if (!resposta.ok) {
            throw new Error("Erro ao alterar disponibilidade.");
        }

        alert("Disponibilidade atualizada com sucesso!");
        buscarVeiculo();

    } catch (erro) {
        alert("Não foi possível alterar a disponibilidade.");
        console.error(erro);
    }
}

// ==============================
// EXCLUIR VEÍCULO
// ==============================

async function excluirVeiculo(placa) {
    const confirmar = confirm("Deseja realmente excluir este veículo?");

    if (!confirmar) return;

    try {
        const resposta = await fetch(
            `${API}/veiculos/placa/${encodeURIComponent(placa)}`,
            { method: "DELETE" }
        );

        if (!resposta.ok) {
            throw new Error("Erro ao excluir veículo.");
        }

        alert("Veículo excluído com sucesso!");

        document.getElementById("resultado-consulta").innerHTML = "";

        if (document.getElementById("tela-veiculos").style.display === "block") {
            carregarVeiculos();
        }

    } catch (erro) {
        alert("Não foi possível excluir o veículo.");
        console.error(erro);
    }
}
