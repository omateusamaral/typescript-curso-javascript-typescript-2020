export class Empressa {
  public readonly nome: string;
  private readonly coloboradores: Coloaborador[] = [];
  protected readonly cnpj: string;

  constructor(nome: string, cnpj: string) {
    this.nome = nome;
    this.cnpj = cnpj;
  }
  adicionaColoborador(coloaborador: Coloaborador): void {
    this.coloboradores.push(coloaborador);
  }
  motrarColoboradores(): void {
    for (const coloaborador of this.coloboradores) {
      console.log(coloaborador);
    }
  }
}

export class Coloaborador {
  constructor(
    public readonly nome: string,
    public readonly sobrenome: string,
  ) {}
}

const empresa1 = new Empressa('Facebook', '11.111.1111/0001-11');
const coloborador1 = new Coloaborador('mateus', 'amaral');
empresa1.adicionaColoborador(coloborador1);
empresa1.motrarColoboradores();
