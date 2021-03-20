type Idade = number;
type Pessoa = {
  name: string;
  age: Idade;
  salario: number;
  corPreferida?: string;
};

type CorRGB = 'Vermelho' | 'Verde' | 'Azul';
type CorBPA = 'Branco' | 'preto' | 'amarelo';
type corPreferida = CorBPA | CorRGB;

const pessoa: Pessoa = {
  name: 'mateus',
  age: 19,
  salario: 200_000,
};

export function setCorPreferida(pessoa: Pessoa, cor: corPreferida): Pessoa {
  return { ...pessoa, corPreferida: cor };
}
console.log(setCorPreferida(pessoa, 'Branco'));
