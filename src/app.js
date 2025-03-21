import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
};


//condicionales

/* 

if (condicion) {
//si es verdadera la condicion se ejecuta esto
} else {
//si es falsa la condicion se ejecuta esto
}

*/

let age = 16

// if (age) {
//   console.log('tenemos edad')
// }

// if (age >15) {
//   console.log('puede manejar en USA')
// } else {
//   console.log('no puede manejar')
// }

// renderizado condicional

// console.log(`${age}`)
// console.log(`tenemos ${age} años`)

//ternarias

// condicion ?  true : false
console.log(`${age? 'tenemos edad' : 'no esta definida'}`)

console.log(`${age>15 ? 'puede manejar en USA' : 'no puede manejar'}`)

// if (age) console.log('tenemos edad)
console.log(`${age && 'tenemos edad &&'}`)
console.log(`${age || 'tenemos edad &&'}`)


const test = document.querySelector('#test')
const varExp = document.querySelector('#var')


varExp.innerHTML = age
test.innerHTML = `${age? 'tenemos edad' : 'no esta definida'}`
test.innerHTML = `${age>15 ? 'puede manejar en USA' : 'no puede manejar'}`

const sum = (a,b) => {
  return a+b
}

const user = {
  name: 'pepe',
  age: 18,
  city: 'Madrid'
}

test.innerHTML = `${sum(57,15) > 20 ? 'la suma es mayor a 20' : 'intenta con otros numeros'}`;

test.innerHTML = `${user.name? `${user.name}` : 'usuario' }`;

console.log(`${user.city=='Sevilla' ? 'ole ole' : 'no hay ole ole pa ti' }`)

console.log(`${user.age>=21 ? 'puedes beber' : 'no hay birra pa ti'}`)

console.log(sum(2,2))
console.log(`la suma de sum(2,2) es --->, ${sum(2,2)}`);


`

(...)
<h1>${variables.name?  variables.name : 'Pepe'} Boilett</h1>
(...)

`