// selecao dos elementos
const display = document.querySelector('#displayInput');
const botaoIgual = document.querySelector('.igual');
const botaoPonto = document.querySelector('.ponto');
const botoesNumeros = document.querySelectorAll('.num');
const botoesOperadores = document.querySelector('.operador');


// variaveis globais
let operacaoAtual = "";
let operador = null;
let valorAnterior = "";
let calculando = false;

// funcoes
function atualizaDisplay(){
  display.value = operacaoAtual;
}

function insereNumero(evento) {

  if(calculando) {
    operacaoAtual = evento.target.textContent;
    calculando = false;
    
  }else{
    operacaoAtual += evento.target.textContent;
  }

  atualizaDisplay()
}

// eventos
botoesNumeros.forEach((botao) => botao.addEventListener('click', insereNumero));