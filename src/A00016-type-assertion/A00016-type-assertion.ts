/*recomendado*/

//condicional
const body1 = document.querySelector('body');

if (body1) {
  body1.style.background = 'red';
}
const body3 = document.querySelector('body') as HTMLBodyElement;
body3.style.background = 'red';

//HTMLELEMENT
const input = document.querySelector('.input') as HTMLInputElement;
input.value = 'a';
/* nao recomendado*/

//no-null assertion(!)
const body2 = document.querySelector('body')!;

//type assertion

body2.style.background = 'red';

//type assertion
const body4 = (document.querySelector('body') as unknown) as number;
