//tupla
const dadoscliente1: readonly [number, string] = [1, 'Mateus'];
const dadoscliente2: [number, string, string] = [1, 'Mateus', 'amaral'];
const dadoscliente3: [number, string, string?] = [1, 'Mateus', 'amaral'];
const dadoscliente4: [number, string, ...string[]] = [1, 'Mateus', 'amaral'];

// dadoscliente1[0] = 100;
// dadoscliente1[1] = 'carlos';
// dadoscliente1.pop();
console.log(dadoscliente1);
console.log(dadoscliente2);
console.log(dadoscliente3);
console.log(dadoscliente4);
//readonly array
const array1: readonly string[] = ['Mateus', 'Amaral'];
const array2: ReadonlyArray<string> = ['Mateus', 'Amaral'];

console.log(array1);
console.log(array2);
