// Importa o pacote prompt-sync
const prompt = require("prompt-sync")();

// Função para validar nome
function validarNome() {
    let nome = "";

    while (nome.trim() === "") {
        nome = prompt("Digite o nome: ");

        if (nome.trim() === "") {
            console.log("ERRO: O nome nao pode ser vazio.");
        }
    }

    return nome;
}

// Função para validar idade
function validarIdade() {
    let idade = 0;

    while (idade <= 0 || isNaN(idade)) {
        idade = Number(prompt("Digite a idade: "));

        if (idade <= 0 || isNaN(idade)) {
            console.log("ERRO: Digite uma idade valida.");
        }
    }

    return idade;
}

// Função para validar telefone
function validarTelefone() {
    let telefone = "";

    while (telefone.length < 8) {
        telefone = prompt("Digite o telefone: ");

        if (telefone.length < 8) {
            console.log("ERRO: Telefone invalido.");
        }
    }

    return telefone;
}

// Função para validar cidade
function validarCidade() {
    let cidade = "";

    while (cidade.trim() === "") {
        cidade = prompt("Digite a cidade: ");

        if (cidade.trim() === "") {
            console.log("ERRO: Cidade nao pode ser vazia.");
        }
    }

    return cidade;
}

// Programa principal
console.log("=== CADASTRO DE PESSOA ===");

// Chamada das funções
let nome = validarNome();
let idade = validarIdade();
let telefone = validarTelefone();
let cidade = validarCidade();

// Exibição final
console.log("\n=== DADOS CADASTRADOS ===");
console.log("Nome:", nome);
console.log("Idade:", idade);
console.log("Telefone:", telefone);
console.log("Cidade:", cidade);