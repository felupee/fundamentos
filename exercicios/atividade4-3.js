//imprime um quadrado de simbolos a partir de um numero 
let n = 5;
let symbol = '*';
let inputLine = '';

for (let lineIndex = 0; lineIndex < n; lineIndex += 1) {
  inputLine = inputLine + symbol;
};
for (let lineIndex = 0; lineIndex < n; lineIndex += 1) {
  console.log(inputLine);
};




//formando triangulo
let n = 5;
let simbolo = '*';
let concatenar = '';

for (let i = 0; i < n; i += 1) {
    concatenar = concatenar + simbolo;
    console.log(concatenar);
}




//formando triangulo ao da direita pra esquerda
let n = 5;
let symbol = '*';
let inputLine = '';
let inputPosition = n;

for (let lineIndex = 0; lineIndex < n; lineIndex += 1) {
  for (let columnIndex = 0; columnIndex <= n; columnIndex += 1) {
    if (columnIndex < inputPosition) {
      inputLine = inputLine + ' ';
    } else {
      inputLine = inputLine + symbol;
    }
  }
  console.log(inputLine);
  inputLine = '';
  inputPosition -= 1;
}



