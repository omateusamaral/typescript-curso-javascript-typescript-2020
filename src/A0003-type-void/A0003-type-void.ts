function semRetorno(...args: string[]): void {
  console.log(args.join(' '));
}
const pessoa = {
  nome: 'mateus',
  sobrenome: 'Amaral',
  exibirNome(): void {
    console.log(this.nome + ' ' + this.sobrenome);
  },
};
semRetorno('mateus', 'amaral');
pessoa.exibirNome();

export { pessoa };
