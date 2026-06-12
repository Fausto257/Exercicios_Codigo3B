function calcula1(nota1, nota2, nome){
    let resultado;
    resultado = (nota1 + nota2) / 2;
    if (resultado === 10 && nome === "Matheus"){
        console.log("Parabéns " + nome + " sua nota: " + resultado);
        }
    else{
        console.log(nome +" sua nota é: " + resultado);
    }
}
calcula1(10,10,"Mateus");
calcula1(10,10,"Matheus");
calcula1(10,9,"Matheus");
calcula1(10,9,"Adriano");