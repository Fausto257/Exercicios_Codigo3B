const prompt = require('prompt-sync')();

let pessoas = [];
let opcao;

do {

    console.log("\n===== MENU =====");
    console.log("1 - Inserir Pessoa");
    console.log("2 - Consultar Todas");
    console.log("3 - Consultar por Nome");
    console.log("4 - Remover Pessoa");
    console.log("5 - Sair");

    opcao = prompt("Escolha uma opção: ");

    switch (opcao) {

        case "1":

            // Nome
            let nome = "";
            do {
                nome = prompt("Digite o nome: ");
            } while (nome === "");

            // Idade
            let idade;
            do {
                idade = Number(prompt("Digite a idade (18 a 24): "));
            } while (idade < 18 || idade > 24);

            // Telefone
            let telefone = "";
            do {
                telefone = prompt("Digite o telefone: ");
            } while (telefone === "");

            // Cidade
            let cidade = "";
            do {
                cidade = prompt("Digite a cidade: ");
            } while (cidade === "");

            // Cria objeto
            let pessoa = {
                nome: nome,
                idade: idade,
                telefone: telefone,
                cidade: cidade
            };

            // Adiciona no array
            pessoas.push(pessoa);

            console.log("\nCadastro realizado com sucesso!");
            break;

        case "2":

            console.log("\n===== LISTA DE PESSOAS =====");

            if (pessoas.length === 0) {
                console.log("Nenhum cadastro encontrado.");
            } else {

                for (let i = 0; i < pessoas.length; i++) {

                    console.log("\nCadastro " + (i + 1));
                    console.log("Nome: " + pessoas[i].nome);
                    console.log("Idade: " + pessoas[i].idade);
                    console.log("Telefone: " + pessoas[i].telefone);
                    console.log("Cidade: " + pessoas[i].cidade);
                }
            }

            break;

        case "3":

            let busca = prompt("Digite o nome para pesquisar: ");

            let encontrado = false;

            for (let i = 0; i < pessoas.length; i++) {

                if (pessoas[i].nome.toLowerCase() === busca.toLowerCase()) {

                    console.log("\nPessoa encontrada:");
                    console.log("Nome: " + pessoas[i].nome);
                    console.log("Idade: " + pessoas[i].idade);
                    console.log("Telefone: " + pessoas[i].telefone);
                    console.log("Cidade: " + pessoas[i].cidade);

                    encontrado = true;
                    break;
                }
            }

            if (!encontrado) {
                console.log("Pessoa não encontrada.");
            }

            break;

        case "4":

            let nomeRemover = prompt("Digite o nome da pessoa a remover: ");

            let indice = -1;

            for (let i = 0; i < pessoas.length; i++) {

                if (pessoas[i].nome.toLowerCase() === nomeRemover.toLowerCase()) {
                    indice = i;
                    break;
                }
            }

            if (indice >= 0) {

                pessoas.splice(indice, 1);

                console.log("Pessoa removida com sucesso!");

            } else {

                console.log("Pessoa não encontrada.");

            }

            break;

        case "5":

            console.log("Encerrando o sistema...");
            break;

        default:

            console.log("Opção inválida!");

    }

} while (opcao !== "5");