export abstract class Personagem {
  protected abstract emoji: string;
  constructor(
    protected name: string,
    protected attack: number,
    protected life: number,
  ) {}

  toAttack(Personagem: Personagem): void {
    console.log(`${this.name} is attacking....`);

    Personagem.lostLife(this.attack);
  }

  lostLife(strengthAttack: number): void {
    this.life -= strengthAttack;
    console.log(
      `${this.emoji} - ${this.name} now has ${this.life} of live....`,
    );
  }
  abstract speak(): void;
}

export class Guerreira extends Personagem {
  protected emoji = '\u{1F9DD}';
  speak(): void {
    console.log(this.emoji + 'GUERREIRA AOOO ATTAAQUEE!!!');
  }
}
export class Monstro extends Personagem {
  protected emoji = '\u{1F9DF}';

  speak(): void {
    console.log(this.emoji + 'SSTTTTAARAARRRR');
  }
}

const guerreira = new Guerreira('Guerreira', 100, 1000);
const monstro = new Monstro('Monstro', 87, 1000);

guerreira.toAttack(monstro);
monstro.toAttack(guerreira);
