//Primeira questão
function restoDiv(n1,n2){
    if(n1 === 0){
        console.log("Numero Invalido")
    }else if(n1 > 0){
        resultado = n1 % n2
        console.log(resultado)
    }
}

restoDiv(11, 2)

//Segunda Questão
function dezCem(){
    for(i = 100;i <= 110; i++){
        console.log(i)
    }
}

dezCem()

//Terceira Questão
function cemDuzentos(){
    for(i = 100;i <=200; i++){
        if(i % 2 != 0){
            console.log(i)
        }
    }
}

cemDuzentos()