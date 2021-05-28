export class Escritor {
  private _ferramenta: Ferramenta | null = null;

  constructor(private _nome: string) {}
  get nome(): string {
    return this._nome;
  }

  set ferramenta(ferramenta: Ferramenta | null) {
    this._ferramenta = ferramenta;
  }

  get ferramenta(): Ferramenta | null {
    return this.ferramenta;
  }

  escrever(): void {
    if (this.ferramenta === null) {
      console.log('Não posso escrever sem a ferramenta');
      return;
    }
    this.ferramenta.escrever();
  }
}
export abstract class Ferramenta {
  constructor(private _nome: string) {}

  abstract escrever(): void;

  get nome(): string {
    return this._nome;
  }
}
export class Caneta extends Ferramenta {
  escrever(): void {
    console.log(`${this.nome} está escrevendo...`);
  }
}

export class MaquinaEscrever extends Ferramenta {
  escrever(): void {
    console.log(`${this.nome} está digitando...`);
  }
}

const escritor = new Escritor('Mateus');
const caneta = new Caneta('Bic');
const maquina = new MaquinaEscrever('Máquina');
// console.log(escritor.nome);
// console.log(caneta.escrever);
// console.log(maquina.escrever);

escritor.ferramenta = caneta;
escritor.ferramenta = maquina;
escritor.ferramenta = null;

escritor.escrever();
