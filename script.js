const advinharNumero = Math.round(Math.random() * 10);
let tentativas = 10;

const input = document.getElementById('inputPalpite');
const mensagemRetorno = document.getElementById('pResultado');
const btn = document.getElementById('btn');
const resultadoTentativas = document.getElementById('resultadoTentativas');


// Essa váriavel removes os botões de incremento e decremento de valor dentro dos inputs do tipo number em navegadores que não suportam os psudo-elementos "::-webkit-inner-spin-button" e "::-webkit-outer-spin-button".

const modificarInput = document.querySelectorAll("input[type='number']");

modificarInput.forEach(function(input) {
    input.style.WebkitAppearance = "none"; 
    input.style.MozAppearance = "textfield";
});

btn.addEventListener('click', (event) => {
    event.preventDefault();
    const valor = parseInt(input.value);
    if(isNaN(valor) || valor < 0 || valor > 10){
        input.style.border = "2px solid red";
        mensagemRetorno.innerHTML = '⛔ Utilize apenas números 0 a 10.';
        return;
    }
    if (tentativas <= 0) {
        return;
    }
    tentativas--;
    resultadoTentativas.innerHTML = `💓 Tentativas restantes: ${tentativas}`;
    input.style.border = "";

    
    if (valor === advinharNumero) {
        mensagemRetorno.innerHTML = `🤩🎉 Você acertou! Foram necessárias ${10-tentativas} tentativas.`;
        input.value = "";
        tentativas = 0;
        btn.style.display = "none";
    } else {
        if(tentativas === 0){
          mensagemRetorno.innerHTML = `<span style="color:red">👽 <b>Fim de jogo!</b> O número correto era <b>${advinharNumero}</b></span>`;
          input.value = "";
          btn.style.display = "none";
        } else {
          mensagemRetorno.innerHTML = `💔 Você errou. Tente novamente.`;
          input.value = "";
        }
    }
});

resultadoTentativas.style.marginTop = '10px';
mensagemRetorno.style.marginTop = '10px';

input.addEventListener("keyup", (event) => {
    if (event.code === "Enter") {
        event.preventDefault();
        btn.click();
    }
});
