import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {
  //write your code here
  console.log("Hello Rigo from the console!");
//  alert('se cargo la pagina')
};


// document --> objeto js

console.log(document)

const pageTitle = document.querySelector('#pageTitle') // devuelve el primer elemento
console.log(pageTitle)
const allLi = document.querySelectorAll('.li-item') // devuelve el primer elemento
console.log(allLi)
/*
const gettingElementById = document.getElementById('pageTitle') // devuelve uno solo
const gettingElementByClass = document.getElementsByClassName('li-item') // si tiene una s en Elements devuelve una coleccion 
const gettingElementByName = document.getElementsByName('input-email')
*/
let age = 55
pageTitle.textContent = '<p>pepe</p>' //esto agrega el texto que tenga como valor
pageTitle.innerHTML = '<p>pepe</p>' // esto puede agrear elementos html y texto
pageTitle.textContent = 'My awesome site'


const solitario = document.querySelector('#solitario');

solitario.innerHTML = `
    <div class='card'>
      <div class='card-header'>
        title ${age}
      </div>
      <div class='card-body'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, facilis sequi. Voluptatibus eaque maxime soluta ratione ex fugit quod, delectus reiciendis ipsam quas, saepe voluptas assumenda corporis eius. Est, quidem!
      </div>
      <div class='card-footer'>
        <button>aja!</button>
      </div>
    </div>
`
const newDiv = document.createElement('div')
newDiv.innerHTML = 'pepe'
const body = document.querySelector('body')
body.appendChild(newDiv)

const names = [{avatar: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftoppng.com%2Fpublic%2Fuploads%2Fpreview%2Fcool-avatar-transparent-image-cool-boy-avatar-11562893383qsirclznyw.png&f=1&nofb=1&ipt=9f65124b4dea9e35af3615369accb38265814492a5f0c503f3aae5d442fd5323&ipo=images',name: 'pepe', gender: 'male'}, {avatar: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftoppng.com%2Fpublic%2Fuploads%2Fpreview%2Fcool-avatar-transparent-image-cool-boy-avatar-11562893383qsirclznyw.png&f=1&nofb=1&ipt=9f65124b4dea9e35af3615369accb38265814492a5f0c503f3aae5d442fd5323&ipo=images',name: 'lola', gender: 'female'}, {avatar: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftoppng.com%2Fpublic%2Fuploads%2Fpreview%2Fcool-avatar-transparent-image-cool-boy-avatar-11562893383qsirclznyw.png&f=1&nofb=1&ipt=9f65124b4dea9e35af3615369accb38265814492a5f0c503f3aae5d442fd5323&ipo=images',name: 'matia', gender: 'male'}, {avatar: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftoppng.com%2Fpublic%2Fuploads%2Fpreview%2Fcool-avatar-transparent-image-cool-boy-avatar-11562893383qsirclznyw.png&f=1&nofb=1&ipt=9f65124b4dea9e35af3615369accb38265814492a5f0c503f3aae5d442fd5323&ipo=images',name: 'barbara', gender: 'female'}, {avatar: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftoppng.com%2Fpublic%2Fuploads%2Fpreview%2Fcool-avatar-transparent-image-cool-boy-avatar-11562893383qsirclznyw.png&f=1&nofb=1&ipt=9f65124b4dea9e35af3615369accb38265814492a5f0c503f3aae5d442fd5323&ipo=images',name: 'Charlie', gender: 'neutral'}]

const wrappingRow = document.createElement('section')
wrappingRow.classList.add('row')
const showNames = () => {
names.forEach((el, i) => {

    const newCard = document.createElement('div');
    newCard.classList.add('card')
  
    newCard.classList.add('col-sm-12', 'col-md-4', 'col-lg-3')
    newCard.classList.add('p-3', 'bg-danger')
    const newCardHeader = document.createElement('div')
    newCardHeader.classList.add('card-header')
    newCardHeader.innerHTML = `<h3>Hello this is a ${el.gender} name: </h3>`
    const newCardBody = document.createElement('div')
    newCardBody.classList.add('card-body')
    newCardBody.innerHTML = `<p class="test">${el.name}</p>`
    const cardImg = document.createElement('img')
    cardImg.setAttribute('src', el.avatar)
    cardImg.classList.add('img-fluid');
    newCardBody.appendChild(cardImg)
    newCard.appendChild(newCardHeader);
    newCard.appendChild(newCardBody)
    wrappingRow.appendChild(newCard)
  
 
})

body.appendChild(wrappingRow)
}

// creo elemento con document.createElement()
// modifico elemento segun lo que necesite 
// Pongo a mi elemento como hijo de alguna etiqueta ya creada


//classlist
const superH2 = document.querySelector('#superH2')
superH2.classList.add('bg-warning', 'fs-1') // añade una clase o cuantas sean necesarias
console.log(superH2.classList)
superH2.classList.remove('bg-warning')
console.log(superH2.classList)
superH2.classList.replace('fs-1', 'fs-5')
console.log(superH2.classList)


//cambiar atributos
const superImg = document.querySelector('#superImg')
superImg.setAttribute('src', 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2F4.bp.blogspot.com%2F-QMGOoEe7ORo%2FUictQ1DRsJI%2FAAAAAAAB4ow%2FQ3F1jbR67fo%2Fs1600%2Fcerca-del-cielo-y-los-planetas-im%25C3%25A1genes-de-fantas%25C3%25ADa-close-to-sky-landscape-1920x1200-wallpaper-.jpg&f=1&nofb=1&ipt=6202bc9afd1e8e9fe5b8d2a940c31228b6bd763169b7321516dd36478a956f45&ipo=images')


//eventos

// necesito un elemento
const hideBtn = document.querySelector('#toggle');
// añadimos evento
// hideBtn.addEventListener('tipo de evento', funcion a ejecutar)
hideBtn.addEventListener('click', ()=>{
  const testingDiv = document.querySelector('#testing')
  if (testingDiv.classList.contains('hide')){
    hideBtn.textContent= testingDiv.classList.contains('hide') ? 'show lala' : 'hide lala'
    return testingDiv.classList.remove('hide')  
  } 
  hideBtn.textContent= testingDiv.classList.contains('hide') ? 'show lala' : 'hide lala'
  return testingDiv.classList.add('hide')
})

const namesBtn = document.querySelector('#namesBtn');

namesBtn.addEventListener('click', showNames)



//change

const inputEmail = document.querySelector('#input-email')

inputEmail.addEventListener('change', (evento)=>{
console.log(evento.target.value)
document.querySelector('#inputText').textContent = evento.target.value
})

