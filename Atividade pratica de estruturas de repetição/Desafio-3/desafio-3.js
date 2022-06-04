//DESAFIO 3
function fibonacci(valor){
    var primeiro = 0;
    var segundo = 1;
    var terceiro = 1;

    for(let i = 0; i < valor; i++){
        console.log(terceiro)
        primeiro = segundo + terceiro
        segundo = terceiro
        terceiro = primeiro
    }
}

fibonacci(100)