type TemNome = { nome: string };
type TemSobreNome = { sobrenome: string };
type TemIdade = { idade: number };

type Pessoa = TemNome & TemSobreNome & TemIdade; //and

type AB = 'A' | 'B';
type AC = 'A' | 'C';
type Intersecao = AB & AC;
const pessoa: Pessoa = {
  idade: 19,
  nome: 'mateus',
  sobrenome: 'amaral',
};
console.log(pessoa);

export { pessoa };
