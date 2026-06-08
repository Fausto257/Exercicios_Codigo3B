const prompt = require('prompt-sync')();

for (let i = 0 ; i < 5; i++) {
    console.log(i);
}

let contador = 0;
let correto = false;
while (!correto) {
    let idade = prompt('Digite sua idade: ');
    if (Number(idade) != 0 )
    {
        correto = true;
    }
}

while (true) {
    let idade = prompt('Digite sua idade: ');
    if (Number(idade) != 0 )
    {
        break;
    }
}


//let idade = prompt('Digite sua idade: ');
let Estado = prompt('Digite o Estado: ');

if (Estado==="SP" && idade > 80) {
    console.log("Não Pode dirigir");
}
else if(Estado === "RJ" && idade > 18){
    console.log("Pode dirigir");
}
else if (Estado === "SP" && idade >= 18){
    console.log("Pode dirigir");
}
else {
    console.log("Não pode dirigir");
}

/*
function CNH(idade,estado){
if (estado==="SP" && idade > 80) {
    console.log("Não Pode dirigir");
}
else if(estado === "RJ" && idade > 18){
    console.log("Pode dirigir");
}
else if (estado === "SP" && idade >= 18){
    console.log("Pode dirigir");
}
else {
    console.log("Não pode dirigir");
}
}
CNH(idade,Estado);
*/

