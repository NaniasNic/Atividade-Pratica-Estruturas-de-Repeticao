//DESAFIO 2
function receberMultiplos(n){
    if(n < 350){
        soma = n + 5
        console.log(soma)
    }

    if(soma % 5 === 0){
        console.log("MÚLTIPLO DE 5")
    }

    if(soma % 7 === 0){
        console.log("MÚLTIPLO DE 7")
    }
}

receberMultiplos();