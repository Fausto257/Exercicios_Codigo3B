const prompt = require('prompt-sync')();


let pessoas = [];

let contador = prompt('Digite qtd vezes: ');

let nome = "";
let idade = 0;
let telefone = "";
let cidade = "";

for (i = 0; i < contador; i++) {
    nome = prompt("Digite o nome: ");
    idade = Number(prompt("Digite a idade: "));
    telefone = prompt("Digite o telefone: ");
    cidade = prompt("Digite a cidade: ");
    
    // Adiciona no array
    
    let pessoa = {
    nomes: nome,
    idades: idade,
    telefones: telefone,
    cidades: cidade };

    pessoas.push(pessoa);
}
console.log(pessoas.length)

for (let i = 0; i < pessoas.length; i++) {
    console.log("\nCadastro " + (i + 1));
    console.log("Nome: " + pessoas[i].nome);
    console.log("Idade: " + pessoas[i].idade);
    console.log("Telefone: " + pessoas[i].telefone);
    console.log("Cidade: " + pessoas[i].cidade);
}

