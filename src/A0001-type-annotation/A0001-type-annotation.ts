/*eslint-disable */
// Tipos básicos (aqui ocorre inferência de tipos)
let nome: string = 'Luiz'; // Qualquer tipo de strings: '' "" ``
let idade: number = 0b1010; // 10, 1.57, -5.55, 0xf00d, 0b1010, 0o7744
let adulto: boolean = true; // true ou false
let simbolo: symbol = Symbol('qualquer-symbol'); // symbol
// let big: bigint = 10n; // bigint

//Arrays

let arrayNumbers:Array<number> = [1,2,3];
let arrayNumbers2:number[] = [1,2,3];
let arrayString:Array<string> = ["1","2","3"];

//objetos
let pessoa:{
  nome:string,
  idade:number,
  adulto?:boolean

} ={
  nome:"Mateus",
  idade:19,

}

//funções

function soma(x:number,y:number):number{

  return x+y;
}

const soma2:(x:number, y:number)=> number = (x,y) => x+y;

const result = soma(2,2);
