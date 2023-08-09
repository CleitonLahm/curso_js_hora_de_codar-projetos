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
//crie um funcao que aceite uma string no formato de 24hrs(ex: 14:30)
//a funcao deve retornar uma string que converta o horario para o formato de 12hrs (ex: 2:30)
//use o objeto math para auxiliar nessa conersao

function converteString(horario24) {
  // const hora = horario24.split(':')[0];
  // const minuto = horario24.split(':')[1];

  //ou posso fazer de um jeito melhor como abaixo

  const [hora, minuto] = horario24.split(':');

  const hora12 = hora % 12 || 12;
  let periodo = 'AM';

  if(hora > 12){
    periodo = 'PM';
  }

  console.log(`${hora12}:${minuto} ${periodo}`);
}

converteString('14:30')
converteString('1:30')
converteString('11:37')