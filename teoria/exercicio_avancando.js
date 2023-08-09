// EXERCICIO 1 - MANIPULACAO DE ARRAY

//crie uma lista de compras que inicialmente eh vazia.
// adicione 5 itens a lista usando o push()
// agora, remova o primeiro item da lista usando shift()
// imprima  a lista final no console

const listaDeCompras = [];
listaDeCompras.push('carne', 'arroz', 'feijao', 'salada', 'coca');
listaDeCompras.shift();

console.log(listaDeCompras)

// EXERCICIO 2 - MANIPULACAO DE ARRAY - FIND()

// voce tem um array de numeros: [3, 7, 14, 21, 29, 36, 42];
// use a funcao find() para encontrar o primeiro numero que eh divisivel por 7 e maior que 10

const numeros = [3, 7, 14, 21, 29, 36, 42];

const numeroEncontrado = numeros.find((n) => n % 7 === 0 && n > 10)
console.log(numeroEncontrado)

// EXERCICIO 2 - MANIPULACAO DE ARRAY - FILTER()

//dado o array de numeros: [5, 10, 15, 20, 25, 30, 35, 40]
// use a funcao filter() para criar um novo array que  contenha apenas os numeros maiores que 20

const array = [5, 10, 15, 20, 25, 30, 35, 40];

const arrayFiltrado = array.filter((n) => n > 20)
console.log(arrayFiltrado)

// EXERCICIO 3 - MANIPULACAO DE STRING

// dada a string: "  Bom dia, mundo! ".
// remova os espacos em branco no inicio e no final da string e em seguida divida a string em palavras

const string = "  Bom dia, mundo !"

const stringFormatada = string.trim().split(" ")
console.log(stringFormatada)

// EXERCICIO 3 - MANIPULACAO DE STRING - startWith(), e endWith();

// dada a string: "O rato roeu a roupa do rei de Roma!"
//verifique se a string comeca com a palavra 'o' e termina com 'Roma'

const frase = "O rato roeu a roupa do rei de Roma"

const comecaCom = frase.startsWith('O')
const terminaCom = frase.endsWith('Roma')

console.log(comecaCom, terminaCom)
