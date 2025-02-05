alert("Boas vindas ao jogo do numero secreto!");  //exibir uma mensagem
let numeroMaximo = 50;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1); //armazenar o numero na variavel e gerar um numero aleatorio a ser sortiado
console.log(numeroSecreto) //Exibir no console 
let chute //armazena e interagi com o usuario
let tentativas = 1;

//Enquanto o chute nao for igual ao numero secreto
while (chute != numeroSecreto) {
    chute = prompt(`Escolha um numero entre 1 e ${numeroMaximo}`);
// Se o chute for igual ao numero secreto
    if (chute == numeroSecreto) {  // Condicao if
        break; //Para o loop while
    } else {
        if (chute > numeroSecreto) {  //o numero secreto é maior que o chute
            alert(`O numero secreto é menor que ${chute}`);
        } else {
            alert(`O numero secreto é maior que ${chute}`)
        }
        tentativas = tentativas + 1;
        // tentativas++;
    }

}
let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
alert(`Isso ai! Voce descobriu o numero secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}`);

// if(tentativas > 1){
//     alert(`Isso ai! Voce descobriu o numero secreto ${numeroSecreto} com ${tentativas} tentativas.`);
// } else { 
//     alert(`Isso ai! Voce descobriu o numero secreto ${numeroSecreto} com ${tentativas} tentativa.`);
// }
