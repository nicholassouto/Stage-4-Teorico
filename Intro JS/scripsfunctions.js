// function expression
// function anonymous
// parâmetros da função
const sum = function (number1, number2) {
  total = number1 + number2; // nao crie variavel sem palavra chave
  return total;
};

sum(2, 3); // args - argumentos

let number1 = 34;
let number2 = 25;

sum(number1, number2);

console.log(`o número 1 é ${number1}`);
console.log(`o número 2 é ${number2}`);
console.log(`a soma é ${(number1, number2)}`);

// function scope

let subjetc = "create video"

function createThink(subjetc) {
  subjetc = "study"
  return subjetc
}

console.log(subjetc)
console.log(createThink(subjetc))


// function hoisting

sayMyName()

function sayMyName() {
  console.log("Nick")
}

// função com expressão nao sofre elevação


// arrow function

const sayName = (name) => {
  console.log(name)
}

sayName("nick")

// callback function

function sayMy (name) {
  console.log("Antes de executar a função callback")
  name()
  console.log("Depois de executar a callback")
}

sayMy(
  () => {
    console.log("Estou em uma callback")
  }
)

/* função construtora

  * expressão new
  * criar um novo objeto
  * this keyword

*/

function Person(name) {
  this.name = name
  this.walk = function(){
    return this.name + " está andando"
  }
}
const nick = new Person("Nick")
const lua = new Person("Lua")
console.log(nick.walk())
console.log(lua.walk())