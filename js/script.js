

function pensarNumero() {
    const palpite = document.getElementById('inputPalpite');
    const resposta = document.getElementById('resultadoChute');   
    const numAleatorio = Math.round(Math.random() * 10);
    
    palpite.style.border = 'none';  
    resposta.style.color = 'inherit';  

    if(!palpite.value) {
        palpite.style.border = '1px solid red';
        resposta.style.color = 'red';
        resposta.innerHTML = 'Digite o palpite';
        
    } else if(palpite.value < 0 || palpite.value > 10) {
        resposta.style.color = 'red';
        palpite.style.border = '1px solid red';
        resposta.innerHTML = 'Número inválido. Digite um valor entre 0 e 10!'
    } else if (palpite.value === String) {
        resposta.innerHtml = 'Só são aceitos números';

    } else if (palpite.value == numAleatorio) {
        resposta.innerHTML = "<b>Você acertou!</b> Pensei em " + numAleatorio;    
        //resposta.innerHTML = 'Deu certo' + numAleatorio;
    } else {
        
        resposta.innerHTML = `Você errou, pensei em ${numAleatorio}`;
    }

    console.log(numAleatorio);
}

let btn = document.getElementById('btn');
//btn.addEventListener('click', pensarNumero);
console.log(btn);

