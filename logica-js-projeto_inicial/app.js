
alert('Boas vindas ao jogo do número secreto!');

let numeroSecreto = 29;
let chute;
let tentativas = 1;

while (chute != numeroSecreto) {
    chute = prompt('Escolha um número de 1 a 30');
    if (chute == numeroSecreto) {
        
        break
    } else if (chute < numeroSecreto) {
        alert('O número é maior que o chute!')
    } else if (chute > numeroSecreto) {
        alert('O número é menor que o chute!')
    }

    tentativas++
}

tentativas > 1 ? alert(`Parabéns! Você acertou o número em apenas ${tentativas} tentativas!`) : alert("Parabéns! Você acertou de primeira!")


