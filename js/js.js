function pulaLinha() {
    document.write("<br>");
}
function mostra(texto) {
    document.write(texto);
    pulaLinha();
}

function pensaNumero(n) {
    return Math.round(Math.random() * n);
}

var numeroPensado = pensaNumero(10);
var chute = parseInt(prompt("Advinhe um número de 0 a 10."));

if(chute == numeroPensado) {
    mostra("Você acertou!");
} else{
    if(chute > numeroPensado) {
        mostra("Você pensou em um número maior.");
    } else{
        if(chute < numeroPensado) {
            mostra("Você pensou em um número menor.");
        }
    }
}

//mostra("Pensei em " + numeroPensado);
var div = document.createElement('div');
div.innerHTML = "pensei em " + "<b>" + numeroPensado + "</b>";
//div.style.height = "100 px";
//div.style.width = "100 px";
div.style.color = "red";
div.style.backgroundColor = "white"
div.style.fontFamily = "Tahoma";
document.body.appendChild(div);