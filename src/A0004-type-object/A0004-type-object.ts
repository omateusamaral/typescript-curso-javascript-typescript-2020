const objeto: {
  readonly value1: string;
  value2: string;
  value3?: string;
  [key: string]: unknown;
} = {
  value1: 'valor 1',
  value2: 'valor 2',
};

//objeto.value1 = 'Outro valor'; //value1 só pode ser lida não reescrita
objeto.value2 = 'Outro valor2';

objeto.value3 = 'mama';
