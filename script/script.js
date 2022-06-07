let nomes = ["luiz", "Vinicius", "Joao", "Davi"]

function sortear(){
    let np = nomes.length;

    let ns = Math.floor(Math.random() * np);
    console.log(ns)
    document.getElementById("d").innerHTML = nomes[ns]

}