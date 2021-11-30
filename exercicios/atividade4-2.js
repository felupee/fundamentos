//mostra os valores de uma array
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
for (cont = 0; cont < numbers.length; cont += 1) {
    console.log(numbers[cont]);
}



// soma valores de uma array
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;
for (cont = 0; cont < numbers.length; cont += 1) {
    soma += numbers[cont];
    
}
console.log(soma);



// tira a média dos valores de uma array
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;

for (cont = 0; cont < numbers.length; cont += 1) {
    soma += numbers[cont];
    
}
console.log(soma / numbers.length);




// condiciona o final da média se é menor ou maior que 20
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;
let media = 0;
for (cont = 0; cont < numbers.length; cont += 1) {
    soma += numbers[cont];
    
}
media = soma / numbers.length;
if (media> 20) {
    console.log('valor maior que 20');
} else {
    console.log('valor menor ou igual a 20');
}




// mostra o maior numero de uma array
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
var maior = 0;
for (var cont = 0; cont < numbers.length; cont += 1) {
   if ( numbers[cont] > maior ) {
      maior = numbers[cont];
   }
}
console.log(maior);




// exibe todos os numeros impares de uma array e fala se nao tiver numeros
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
numeroImpar = 0;
for (cont = 0; cont < numbers.length; cont += 1) {
    if (numbers[cont] % 2 === 1){
        numeroImpar += 1;
        console.log(numbers[cont])
    } 
}
if (numeroImpar === 0) {
    console.log('nao existe nenhum numero impar')
}




// exibe o menor número de uma array
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let menor = numbers[0];
for (let cont = 0; cont < numbers.length; cont += 1) {
    
   if ( numbers[cont] <= menor ) {
      menor = numbers[cont];
   }
}
console.log(menor);




// cria uma array de 1 a 25
numeros = [];
for (let i = 1; i <= 25; i += 1) {
    numeros.push(i);
}
console.log(numeros);




//divide por dois todos os elementos do array criando anteriormente
for (let i = 0; i < numeros.length; i += 1) {
    console.log(numeros[i] / 2);
}