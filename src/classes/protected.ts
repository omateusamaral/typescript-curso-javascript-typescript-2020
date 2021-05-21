export class Empresa {
  public readonly nome: string;
  protected readonly coloboradores: Coloaborador[] = [];
  private readonly cnpj: string;

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
export class Facebook extends Empresa {
  constructor() {
    super('Facebook', '11.111.1111/0001-11');
  }

  popColaborador(): Coloaborador | null {
    const coloaborador = this.coloboradores.pop();
    if (coloaborador) return coloaborador;

    return null;
  }
}
export class Coloaborador {
  constructor(
    public readonly nome: string,
    public readonly sobrenome: string,
  ) {}
}

const empresa1 = new Facebook();
const coloborador1 = new Coloaborador('mateus', 'amaral');
const coloborador2 = new Coloaborador('mateus2', 'amaral2');

empresa1.adicionaColoborador(coloborador1);
empresa1.motrarColoboradores();
const colaboradorRemovido = empresa1.popColaborador();
console.log(colaboradorRemovido);

console.log(empresa1);
