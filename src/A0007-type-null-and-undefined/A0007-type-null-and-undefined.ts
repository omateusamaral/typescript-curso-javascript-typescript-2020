let x;
if (typeof x === 'undefined') x = 20;

console.log(x * 2);

export function createPerson(
  firstName: string,
  lastName?: string,
): {
  firstName: string;
  lastName?: string;
} {
  return {
    firstName,
    lastName,
  };
}

export function squareof(x: any) {
  if (typeof x === 'number') {
    return x * x;
  }
  return null;
}

const squareofTwoNumber = squareof(2);
const squareofTwoString = squareof('2');

if (typeof squareofTwoString === null) {
  console.log('Conta inválida');
} else {
  console.log(squareofTwoString * 100);
}
