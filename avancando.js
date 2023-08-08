// manipulacao de arrays
// map, filter, reduce, find etc  usamos normalmente com arrow funcion

const numeros = [1,2,3,4,5,6]

// como encontrar apenas os numeros pares nesse array com diferentes metodos

// FIND retorna apenas o primeiro elemento do criterio
const numeroPar = numeros.find((numero) => numero % 2 === 0); 
// o numero que dividir por 2 e o restante for 0 eh par.
console.log(numeroPar)

// FILTER retorna todos os elementos que batem com o criterio
const numerosPares = numeros.filter((numero) => numero % 2 === 0); 
console.log(numerosPares)

// MANIPULACAO DE STRING

const frase = ' Ola, Mundo  !';
const fraseFormatada = frase.trim();  // retira espacos desnecessarios do inicio e fim mas nao no meio

console.log(fraseFormatada) // Ola, Mundo!

const frase2 = 'Javascript eh incrivel!';

console.log(frase2.startsWith('Java')) //startsWith =  comeca com 'Java'; // TRUE
console.log(frase2.endsWithWith('!')) //startsWith =  termina com '!'; // TRUE