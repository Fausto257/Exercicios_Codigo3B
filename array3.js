/* **** Exemplo Array 1 ******
let nome = "Amanda";

console.log(nome[0]);
console.log(nome[1]);
console.log(nome[2]);
console.log(nome[3]);
console.log(nome[4]);
console.log(nome[5]);
console.log(nome[6]);
*/

/* **** Exemplo Array 2 ******
let nome = "Amanda";
console.log(nome.length);
for(let i = 0; i < nome.length; i++) {

    console.log(nome[i].toUpperCase());
    console.log(nome[i]);
   
}
*/

/* **** Exemplo Array 3 ******
let nome = "amanda";

if (nome[0] === nome[0].toUpperCase()) {
    console.log("A primeira letra é maiúscula");
} else {
    console.log("A primeira letra é minúscula");
}
*/

/* **** Exemplo Array 4 ******
let palavra = "computador";

let contador = 0;

for(let letra of palavra) {

    if(
        letra === "a" ||
        letra === "e" ||
        letra === "i" ||
        letra === "o" ||
        letra === "u"
    ) {

        contador++;

    }
}

console.log("Quantidade de vogais:", contador);
*/


// **** Exemplo Array 5 ******
let palavra = "computador";

let contador = 0;

for(let i = 0; i < palavra.length; i++)
{

    if(
        palavra[i] === "a" ||
        palavra[i] === "e" ||
        palavra[i] === "i" ||
        palavra[i] === "o" ||
        palavra[i] === "u"
    ) {

        contador++;

    }
}

console.log("Quantidade de vogais:", contador);


