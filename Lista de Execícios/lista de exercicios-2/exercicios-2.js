//Primeira questão
function tabuadaDeSubtracao(n){
    for(let i = 1; i <= 10 ; i++){
        console.log(n + " - " + i + " = " + ( n - i ));
    }
}
 
tabuadaDeSubtracao(10)

//Segunda Questão
function multiDez(){
    for(let i = 0; i <=100; i++){
        if(i % 10 === 0){
            console.log(i + " MÚLTIPLO DE 10")
        }else{
            console.log(i)
        }
    }
}

multiDez()

//Terceira Questão
function graos(){
    g = 1
    for(i = 0;i <=10; i++){
        g = g * 2
        console.log("A quantidade a ser paga sera: " + g)
    }
}

graos()