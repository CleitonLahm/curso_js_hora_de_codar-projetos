// FUNDAMENTOS

var minhaVariavel = 'ola, amigos';
console.log(minhaVariavel);

//variaveis e tipos de dados

var meuNumero = 10;

console.log(meuNumero + 10);

console.log(typeof meuNumero);

var meuObjeto = {};
var meuArray = [];
var meuNull = null;
var meuUndefined = undefined;

console.log(typeof meuObjeto);
console.log(typeof meuArray);
console.log(typeof meuNull);
console.log(typeof meuUndefined);


// let e const

let x = 5; // nao muda
const y = 10;


// conversao de tipos

const meuNumero2 = '123';

const meuNumero2Convertido = Number(meuNumero2);
console.log(typeof meuNumero2Convertido) // number, 123


//CONDICOES  IF, ELSE, ELSE IF

const idade = 20;

if (idade < 13) {
  console.log('a pessoa eh uma crianca');

}else if(idade < 20) {
  console.log('adolescente')

} else{
  console.log('a pessoa eh adulta')
}

// switch

const fruta = 'Banana';

switch(fruta){

  case "maca":
    console.log('a fruta eh maca')
    break;

  case "banana":
    console.log('a fruta eh banana')
    break
    default:
      console.log('fruta nao encontrada')
}



