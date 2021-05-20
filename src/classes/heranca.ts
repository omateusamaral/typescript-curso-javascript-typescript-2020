export class Pessoa {
  constructor(
    public nome: string,
    public sobrenome: string,
    private idade: number,
    protected cpf: string,
  ) {}

  getIdade(): number {
    return this.idade;
  }
  getCpf(): string {
    return this.cpf;
  }

  getNomeCompleto(): string {
    return `${this.nome} ${this.sobrenome}`;
  }
}
export class Aluno extends Pessoa {
  sala: string;
  constructor(
    nome: string,
    sobrenome: string,
    idade: number,
    cpf: string,
    sala: string,
  ) {
    super(nome, sobrenome, idade, cpf); //constructor de pessoa
    this.sala = sala;
  }
  getNomeCompleto(): string {
    console.log('Antes');
    const result = super.getNomeCompleto();
    return result + ' HEYYY';
  }
}

export class Cliente extends Pessoa {
  getNomeCompleto(): string {
    return `Isso vem do cliente ${this.nome} ${this.sobrenome}`;
  }
}

const pessoa = new Pessoa('Mateus', 'Amaral', 19, '000.000.000-00');
const aluno = new Aluno('Mateus', 'Amaral', 19, '000.000.000-00', '0001');
const cliente = new Cliente('Mateus', 'Amaral', 19, '000.000.000-00');

console.log(pessoa);
console.log(aluno.getIdade());
console.log(cliente);
console.log(aluno);
