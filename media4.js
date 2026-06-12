const prompt = require('prompt-sync')();

let nota1 = prompt('Digite sua nota1: ');
let nota2 = prompt('Digite sua nota2: ');
let nome1 = prompt('Digite seu Nome: ');

function calcula(nota1, nota2, nome){
    let resultado;
    resultado = (nota1 + nota2) / 2;
    if (resultado > 9 || nome === "Matheus" ){
        console.log("Aluno " +nome + 
            " você passou");
        }
    else if (resultado === 0){
        console.log("Aluno "+nome+ " você está em Risco..");
    }    
    else{
        console.log("Aluno "+nome + " você não Passou");
    }
}

calcula(Number(nota1),Number(nota2),nome1);


