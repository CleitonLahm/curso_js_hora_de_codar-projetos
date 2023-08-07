//exercicio 1 - imprimir ola mundo

console.log('ola mundo');

//exercicio 2 - converter string em number

let numeros = '1234';

let numerosConvertidos = Number(numeros);
console.log(numerosConvertidos)

//exercicio 3 - pegar a frase e mostrar quantas letras e quantas palavras ela tem

const frase = 'javascript e incrivel';

const numeroDeCaracteres = frase.length;
const numeroDePalavras = frase.split(' ').length;

console.log(numeroDeCaracteres, numeroDePalavras);

//exercicio 4 - crie um array com 5 nomes e use o loop for para imprimir cada nome no console

const nomes = ['ana', 'maria', 'bruna', 'cleiton', 'joao'];

for (let i = 0; i < nomes.length; i++){
  console.log(nomes[i])
}

// exercicio 5 - funcoes, string e math
//