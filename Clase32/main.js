const body = document.getElementById('body');
const number = document.getElementById('number');
const button = document.getElementById('button');
const result = document.getElementById('result');
const title = document.getElementById('title');


const getRandom = (min, max)=> {
    //console.log("Random: ", Math.random()) 
    return Math.floor(Math.random() * (max - min)) + min;
}

let numberRandom = getRandom(0, 10)
console.log("Random: ", numberRandom)

body.addEventListener('keyup', (event)=>{
    //console.log("la tecla ingresada es: ", event);
    const regex = /[0-9]+/
    if(event.key.match(regex)){
        if(numberRandom == event.key){
            console.log("Son iguales")
            result.innerHTML = 'Adivinaste'
        }
        if(event.key > numberRandom){
            console.log("El número es chico")
            result.innerHTML = `El número más es chico: Número ${event.key}`
        }
        if(event.key < numberRandom){
            console.log("El número es mas grande")
            result.innerHTML = `El número es más grande: Número ${event.key}`
        }
        console.log("es un numero", event.key)
        number.innerHTML = event.key
    }else{
        console.log("Ingresaste letras")
    }
})

button.addEventListener('click', (event)=>{
    numberRandom = getRandom(0, 10)
    title.innerHTML = '¡Nueva partida! Presione un número.'
    number.innerHTML = 'X'
    result.innerHTML = ''
})

