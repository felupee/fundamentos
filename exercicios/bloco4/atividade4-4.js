//exibe uma propriedade
let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };
  console.log("Bem-Vinda,", info.personagem);





//insere uma nova propriedade
  let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };
  info.recorente = 'sim';

  console.log(info);





// usando o for/in, mostra todas as chaves do objeto
  let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };
  for (key in info) {
      console.log(key);
  }





//mostra todos os valores das chaves do objeto
  let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };
  for (key in info) {
      console.log(info[key]);
  }  




// imprime e concatena dois objetos de uma vez só
  let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };
  let info2 = {
      personagem: 'Tio Patinhas',
      origem: 'Christmas on Bear Mountain, Dell\'s Four Color Comics #178', 
      nota: 'O último MacPatinhas'
  }
  for (key in info) {
      console.log(info[key], 'e', info2[key]);
  }





  //cria uma função que verifica os se uma string é igual a palindromo
  function string(texto) {
      reverso = texto.reverse();
      if (texto === reverso) {
          return string = true;
      } else {
          return string = false;
      }
  }
  console.log(string['felipe']);




let word = 'felipe';
for ( index in word) {
    console.log(word[index]);
}