/* Expressoes e operadores

- Expressions
- Operators

  Binary
  Unary
  Ternary

*/

let number = 1; // expressoes

console.log(number + 1); // binary 2 elementos
console.log(++number); // unary 1 elemento

console.log(false ? "Alo" : "nada"); // ternary 3 expressoes

// new - left-hand-side expression - criar novo objeto

let name = new String("Nick");
name.surName = "Souto";
console.log(name, name.surName);

let date = new Date("1988-04-26");
console.log(date);

// operadores unários
// typeof e delete

const person = {
  name: "Lua",
  age: 6,
};

delete person.age;
console.log(person);

// operadores aritmeticos

// multiplicação
console.log(3.257 * 6.78);

// divisão
console.log(98.34 / 7.85);

// soma
console.log(5 + 19);

// subtração
console.log(24 - 11);

// resto da divisão
console.log(25 % 9);

// incremento
let increment = 0;
increment++;
increment++;
console.log(++increment);
console.log(increment++);
console.log(increment);

// decremento é o inverso do incremento, usa --

// exponencial

console.log(3 ** 27);

// grouping operator ()

let total = (2 + 3) * 5;

// operadores de comparação

let one = 1;
let two = 2;

// igual a
console.log(two == 1);
console.log(one == 1);

// diferente de

console.log(one != 1);
console.log(two != 1);
console.log(one != "1");

// estritamente igual a

console.log(one === "1");
console.log(one === 1);

// estritamente diferente de

console.log(two !== "2");
console.log(two !== 2);

// maior, maior/menor igual e menor que

/*
  maior >
  maior igual >=
  menor igual <=
  menor <
*/

// operadores de atribuição (Assignment)

let x;

// assignment
x = 1;

// addition assignment
x += 2;

// substraction assignment
x -= 1;

// multiplication assignment
x *= 2;

// division assignment
x /= 2;

// remainder, exponentiation
x %= 5;

// logical operators

// AND && so é verdade se tudo na expressão for verdadeira
// OR || so é verdade se pelo menos uma das expressoes for verdadeira
// NOT ! so é verdade se a expressão nao for verdadeira - troca o valor de true para false e false para true

// operador ternário - condição (similar ao if no c#)

let pao = true;
let queijo = false;

const niceBreakfast = pao && queijo ? "Café topzera" : "Podia ser melhor";

console.log(niceBreakfast);

// maior de 18

let age = 16;
const canDrive = age >= 18 ? "can drive" : "can't drive";

console.log(canDrive);

// string operator

// concatenation
let alpha = "alpha";
console.log((alpha += "bet" + "s"));

// type conversion and coersion

//falsy and truthy

// falsy - quando o valor é considerado falso em contextos onde o booleano é obrigatorio

/* 
  false
  0
  -0
  ""
  null
  undefined
  NaN
*/

console.log(0 ? "verdadeiro" : "falso");

// truthy quando o valor é considerado verdadeiro onde um booleano é obrigatorio

/*
  true
  {}
  []
  1
  3.23
  "0"
  "false"
  -1
  Infinity
  -Infinity
*/


// operator precedence

/*
  * grouping                  ()
  * negação e incremento      ! ++ --
  * multiplicação e divisão   * /
  * adição e subtração        + -
  * relacional                < <= > >=
  * igualdade                 == != === !===
  * AND                       &&
  * OR                        ||
  * condicional               ?:
  * assignment                = += -= *= %= /=
*/
