function calcula(nota1, nota2, nota3, nota4){
let resultado;
resultado = (nota1 + nota2+nota3+nota4) / 4;
if (resultado > 10){
    console.log("Passou, sua nota:" + resultado);
}
else if (resultado === 3){
    console.log("Você está em Risco:" + resultado);
}
else if (resultado === 0){
    console.log("Sua nota é:" + resultado);
}
else {
    console.log("Não passou, sua nota:" + resultado);
}
}
calcula(5,5,7,9);
calcula(10,11,12,13);
calcula(1,1,8,9);
calcula(0,0,0,0);