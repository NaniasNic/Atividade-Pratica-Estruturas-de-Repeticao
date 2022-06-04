//Primeira Questão
function mediaPares(){
    soma = 0;
    quantidade = 0;
    for(i = 70;i <= 100;i++){
        if(i % 2 == 0 && Number.isInteger(i) == true){
            soma += i;
            quantidade +=1;
            media = soma / quantidade
            console.log(media)
        }
    }
}


mediaPares()

//Segunda Questão
function olaMundo(){
    for(i = 0;i <= 15;i++){
        console.log("Hello Word!")
    }
}

olaMundo()

//Terceira Questão
function numero(){
    for(i = 88;i <= 94; i++){
        console.log(i)
    }
}

numero()