const prompt = require('prompt-sync')();

let contador = prompt('Digite qtd vezes: ');

for (i = 0; i < contador; i++) {
    // ****** Recebe o nome ********
    let nome = "";

    do {
        nome = prompt('Digite o seu nome ');

    } while (nome === "");

    // **** Recebe a Idade ******
    let idade;
    do {
        idade = prompt('Digite sua idade: ');
        if (idade > 17 && idade < 25) {
            break;
        }
    } while (true);


    // *****  Recebe o Telefone ********
    let telefone = "";
    do {
        telefone = prompt('Digite o seu Telefone: ');
    } while (!telefone);

    // ********* Recebe o Cidade ********
    let cidade = "";
    do {
        cidade = prompt('Digite a sua Cidade: ');
        if (cidade === "Rio de Janeiro") {
            console.log("Seja Bem Vindo!!!");
        }
    } while (cidade === "");

}
console.log("Parabéns Cadastro Concluído!!");


