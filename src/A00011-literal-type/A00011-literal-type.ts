let x = 10; //eslint-disable-line
x = 0b1010;
const y = 10;

const a = 100;
const person = {
  name: 'Mateus' as const,
  secondName: 'Amaral',
};

function escolhaCor(cor: 'Vermelho' | 'Amarelo' | 'Azul'): string {
  return cor;
}

console.log(escolhaCor('Amarelo'));

//module mode
export default 1;
