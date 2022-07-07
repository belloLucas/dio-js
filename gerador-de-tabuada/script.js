var valor = window.prompt("Digite um valor: ");
var multiplicacao = 0;
var vezes = 0;

for (let i = 0; i < 10; i++) {
    multiplicacao++;
    multiplicados = valor * multiplicacao;
    vezes++;
    console.log("x", vezes, multiplicados);
    
}

var text = document.getElementById('resultado');
text.innerHTML += multiplicados;