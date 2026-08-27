// ==========================================
// ELEMENTOS DA PÁGINA
// ==========================================

const formCadastro =
    document.getElementById("formCadastro");

const campoPesquisa =
    document.getElementById("campoPesquisa");

const btnPesquisar =
    document.getElementById("btnPesquisar");

const btnListar =
    document.getElementById("btnListar");

const tabelaPessoas =
    document.getElementById("tabelaPessoas");

const mensagem =
    document.getElementById("mensagem");


// ==========================================
// QUANDO A PÁGINA CARREGAR
// ==========================================

document.addEventListener("DOMContentLoaded", () => {

    listarPessoas();

});


// ==========================================
// CADASTRAR PESSOA
// ==========================================

formCadastro.addEventListener("submit", async (evento) => {

    evento.preventDefault();


    const nome =
        document.getElementById("nome").value.trim();

    const idade =
        Number(document.getElementById("idade").value);

    const telefone =
        document.getElementById("telefone").value.trim();

    const cidade =
        document.getElementById("cidade").value.trim();


    // ======================================
    // VALIDAÇÕES
    // ======================================

    if (nome === "") {

        mostrarMensagem(
            "Digite o nome.",
            "erro"
        );

        return;

    }


    if (idade < 18 || idade > 24) {

        mostrarMensagem(
            "A idade deve estar entre 18 e 24 anos.",
            "erro"
        );

        return;

    }


    if (telefone === "") {

        mostrarMensagem(
            "Digite o telefone.",
            "erro"
        );

        return;

    }


    if (cidade === "") {

        mostrarMensagem(
            "Digite a cidade.",
            "erro"
        );

        return;

    }


    // ======================================
    // OBJETO
    // ======================================

    const pessoa = {

        nome: nome,

        idade: idade,

        telefone: telefone,

        cidade: cidade

    };


    try {

        // ==================================
        // ENVIA PARA A API
        // ==================================

        const resposta = await fetch(
            "/api/pessoas",
            {

                method: "POST",

                headers: {

                    "Content-Type":
                        "application/json"

                },

                body: JSON.stringify(pessoa)

            }
        );


        const dados =
            await resposta.json();


        if (!resposta.ok) {

            throw new Error(
                dados.erro ||
                "Erro ao cadastrar."
            );

        }


        mostrarMensagem(
            dados.mensagem,
            "sucesso"
        );


        // Limpa formulário

        formCadastro.reset();


        // Atualiza tabela

        listarPessoas();


    } catch (erro) {

        console.error(erro);


        mostrarMensagem(
            erro.message,
            "erro"
        );

    }

});


// ==========================================
// LISTAR TODAS AS PESSOAS
// ==========================================

async function listarPessoas() {

    try {

        const resposta =
            await fetch("/api/pessoas");


        const pessoas =
            await resposta.json();


        if (!resposta.ok) {

            throw new Error(
                "Erro ao consultar pessoas."
            );

        }


        mostrarTabela(pessoas);


    } catch (erro) {

        console.error(erro);


        mostrarMensagem(
            "Não foi possível consultar o banco de dados.",
            "erro"
        );

    }

}


// ==========================================
// PESQUISAR POR NOME
// ==========================================

async function pesquisarPessoa() {

    const nome =
        campoPesquisa.value.trim();


    if (nome === "") {

        listarPessoas();

        return;

    }


    try {

        const resposta =
            await fetch(
                `/api/pessoas?nome=${encodeURIComponent(nome)}`
            );


        const pessoas =
            await resposta.json();


        if (!resposta.ok) {

            throw new Error(
                "Erro ao pesquisar."
            );

        }


        mostrarTabela(pessoas);


        if (pessoas.length === 0) {

            mostrarMensagem(
                "Nenhuma pessoa encontrada.",
                "erro"
            );

        } else {

            mostrarMensagem(
                `${pessoas.length} pessoa(s) encontrada(s).`,
                "sucesso"
            );

        }


    } catch (erro) {

        console.error(erro);


        mostrarMensagem(
            erro.message,
            "erro"
        );

    }

}


// ==========================================
// MOSTRAR DADOS NA TABELA
// ==========================================

function mostrarTabela(pessoas) {

    tabelaPessoas.innerHTML = "";


    if (pessoas.length === 0) {

        tabelaPessoas.innerHTML = `

            <tr>

                <td
                    colspan="6"
                    class="centralizado">

                    Nenhuma pessoa encontrada.

                </td>

            </tr>

        `;

        return;

    }


    pessoas.forEach(pessoa => {

        const linha =
            document.createElement("tr");


        linha.innerHTML = `

            <td>${pessoa.id}</td>

            <td>${pessoa.nome}</td>

            <td>${pessoa.idade}</td>

            <td>${pessoa.telefone}</td>

            <td>${pessoa.cidade}</td>

            <td>

                <button
                    class="btn btn-remover"
                    onclick="removerPessoa(${pessoa.id})">

                    Remover

                </button>

            </td>

        `;


        tabelaPessoas.appendChild(linha);

    });

}


// ==========================================
// REMOVER PESSOA
// ==========================================

async function removerPessoa(id) {

    const confirmou =
        confirm(
            "Deseja realmente remover esta pessoa?"
        );


    if (!confirmou) {

        return;

    }


    try {

        const resposta =
            await fetch(
                `/api/pessoas/${id}`,
                {

                    method: "DELETE"

                }
            );


        const dados =
            await resposta.json();


        if (!resposta.ok) {

            throw new Error(
                dados.erro ||
                "Erro ao remover pessoa."
            );

        }


        mostrarMensagem(
            dados.mensagem,
            "sucesso"
        );


        listarPessoas();


    } catch (erro) {

        console.error(erro);


        mostrarMensagem(
            erro.message,
            "erro"
        );

    }

}


// ==========================================
// BOTÃO PESQUISAR
// ==========================================

btnPesquisar.addEventListener(
    "click",
    pesquisarPessoa
);


// ==========================================
// BOTÃO LISTAR TODOS
// ==========================================

btnListar.addEventListener(
    "click",
    () => {

        campoPesquisa.value = "";

        listarPessoas();

    }
);


// ==========================================
// MOSTRAR MENSAGEM
// ==========================================

function mostrarMensagem(
    texto,
    tipo
) {

    mensagem.textContent = texto;


    mensagem.className = "";


    if (tipo === "sucesso") {

        mensagem.classList.add(
            "mensagem-sucesso"
        );

    }


    if (tipo === "erro") {

        mensagem.classList.add(
            "mensagem-erro"
        );

    }


    setTimeout(() => {

        mensagem.className = "";

        mensagem.textContent = "";

    }, 4000);

}