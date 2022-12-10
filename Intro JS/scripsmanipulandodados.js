/*
  Prototype

  * prototype-based language
  * prototype chain
  * * __proto__
*/

// coersion and conversion

let string = "9";
console.log(string + 5);
console.log(Number(string) + 5);

// manipulando strings e nmeros

let word = "pneumoultramicroscopicosilicovulcanoconeotico";
console.log(word.length);

// mudando ponto para virgula
let number = 58920541.659186418;
console.log(number.toFixed(2).replace(".", ","));

// uper e lower case

let word2 = "Programar é muito bacana!";
console.log(word2.toUpperCase());
console.log(word2.toLowerCase());

// separar strings

let phrase = "Eu quero viver o Amor!";
let myArray = phrase.split(" ");
console.log(myArray);
let phraseWithUnderscore = myArray.join("_");
console.log(phraseWithUnderscore);

// localizar palavra

console.log(phrase.includes("Amor"));

// criar Array com construtor

let myArray2 = new Array(10);
console.log(myArray2);

// contar elementos do array

console.log(
  [
    "a",
    { type: "array" },
    function () {
      return "aloha";
    },
  ].length
);

// cadeia de caracteres em elementos de um array

let word3 = "manipulação";
console.log(Array.from(word3));

// manipulando Arrays

let techs = ["html", "css", "js"];

// adcionar um item no fim do Array
techs.push("node.js");
techs.push("c#");

//adcionar no começo do Array
techs.unshift("sql");

// remover item do fim
techs.pop();

// remover item do começo
techs.shift();

// pegar somente alguns elementos do array

console.log(techs.slice(1, 3));

// remover 1 ou mais itens em qualquer posição do Array

techs.splice(1, 2);

// encontrar a posição do elemento no array

let index = techs.indexOf("node.js");
console.log(index)
techs.splice(index, 1)

console.log(techs);
