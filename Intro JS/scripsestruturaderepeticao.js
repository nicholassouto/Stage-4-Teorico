// estrutura de repetição
// for
// break - para a execução do loop
// continue - pula a execução do momento
let contador = 0;
for (let i = 0; i < 10; i++) {
  if (i === 8) {
    continue;
  }
  contador += i;
  console.log(contador);
}

// while

let i = 0;

while (i < 10) {
  console.log(i);
  i++;
}

// for...of

let name = "Nick";
let names = ["Lua", "Luanna"];

for (let name of names) {
  console.log(name);
}

// for...in

let person = {
  name: "Nana",
  age: 110,
  weight: 40.3,
};

for (let property in person) {
  console.log(property);
  console.log(person[property]);
}
