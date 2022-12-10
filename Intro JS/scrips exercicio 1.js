// 1. Declare uma variavel de nome weight

let weight;

// 2. Que tipo de dados é a variavel acima

undefined

/* 3. Declare uma variavel e atribua valores para um dos dados
  * name: String
  * age: Number (integer)
  * stars: Number (float)
  * isSubscribed: Boolean

*/

let name = "Nick";
let age = 34;
let stars = 4.9;
isSubscribed = true;

/* 4. A variavel dog abaixo é de que tipo de dado?

4.1 Atibua a ela as mesmas propriedades e valores do exercicio 3.

4.2 Mostre no console a seguinte mensagem:

  <name> de idade <age> pesa <weight> kg.

  Atenção, substitua <name> <age> e <weight> pelos valores de cada propriedade do objeto

*/

let dog = {
  name: "Lua",
  age: 6,
  weight: 10
};

console.log(`${dog.name} de idade ${dog.age} pesa ${dog.weight} kg`);

Object

/* 5. Declare uma variavel do tipo Array, de nome dogs e atribua a ela nenhum valor, ou seja, somente o Array vazio
*/

let dogs = [];

/* 6. Reatribua valor para a variavel acima, colocando dentro dela o objeto students da questao 4. (Não copiar e colar o objeto, mas usar o objeto criado e inserir ele no Array)
*/

dogs = [dog];

/* 7. Coloque no console o valor da posição zero do Array acima
*/

console.log(dogs[0]);

/* 8. Crie um novo dog e coloque na posição 1 do Array dogs
*/

const dog2 = {
  name: "Belinha",
  age: 10,
  weight: 8
};

dogs[1] = dog2;

/* 9. Sem rodar o codigo responda qual é a resposta do codigo abaixo e por que? Após sua resposta, rode o codigo e veja se você acertou.

  console.log(a)
  var a = 1

*/

// resposta: a recebe undefined