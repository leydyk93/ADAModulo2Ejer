// Ejercicios Modulo 2

console.log("Heladeria");

const saborOne = prompt("Ingrese sabor 1");
const saborTwo = prompt("Ingrese sabor 2");
const saborThree = prompt("Ingrese sabor 3");

alert(`Aquí tiene su helado de ${saborOne} ${saborTwo} ${saborThree}`);

console.log("Datos Personales");

//nombre, apellido, edad, nacionalidad, documento
const nombre = prompt("Ingrese Nombre: ");
const apellido = prompt("Ingrese Apellido: ");
const edad = prompt("Ingrese Edad: ");
const nacionalidad = prompt("Ingrese nacionalidad: ");
const documento = prompt("Ingrese documento: ");

alert(`Nuevo usuario agregado al sistema: 
    Nombre: ${nombre}
    Apellido: ${apellido}
    Edad: ${edad}
    Nacionalidad: ${nacionalidad}
    Documento: ${documento}
    `);

console.log("Años perro");
//16 x ln(edad cronológica del perro) + 31 = edadHu
// e(age -31)/16
const edad = prompt("Ingrese su edad");
const expo = (edad - 31)/16;
const edadPerro = Math.exp(expo);

alert(`Su equivalente de edad en años perro es: ${edadPerro}`);


console.log("Minutos a segundos");

const minutos = prompt('Ingrese la cantidad de minutos');
const segundos = minutos*60;

alert(`${minutos} minutos equivalen a ${segundos} segundos`);


console.log("Area del triangulo");
//A = b*h/2
const base = prompt('Ingrese la base del triangulo');
const altura = prompt('Ingrese la altura del triangulo');

const area = (base*altura)/2;

alert(`El area del triangulo es de: ${area}`);

console.log('Tiempo de viaje');
//5 km/hora, bici 10km/hora v = d/t / t = d/v 
const PIE = 5;
const BICI = 10;
const AUTO = 80;

const distancia = prompt('Ingrese la distancia de su viaje en KM');

alert(` Su viaje de ${distancia} km le tomara: 
A pie: ${distancia/PIE} horas 
En Bici: ${distancia/BICI} horas
En Auto: ${distancia/AUTO} horas
`);

console.log("Duración de Vuelo");

const destinoOne = prompt('Ingrese destino 1');
const duracionOne = prompt(`Ingrese el tiempo estimado de vuelo para ${destinoOne}`); 

const destinoTwo = prompt('Ingrese destino 2');
const duracionTwo = prompt(`Ingrese el tiempo estimado de vuelo para ${destinoTwo}`); 

const destinoThree = prompt('Ingrese destino 3');
const duracionThree = prompt(`Ingrese el tiempo estimado de vuelo para ${destinoThree}`); 

const total = Number(duracionOne) + Number(duracionTwo) + Number(duracionThree);

alert(`Su vuelo tiene las siguientes escalas: 
   ${destinoOne} con duración: ${duracionOne}hrs
   ${destinoTwo} con duración: ${duracionTwo}hrs 
   ${destinoThree} con duración: ${duracionThree}hrs
   Total de su vuelo: ${total}hrs`);

console.log("Cantidad de Caracteres");
const cadena = prompt(`Introduzca un texto`);
alert(`El texto ${cadena} tiene ${cadena.length} caracteres`);

console.log("Calculador gastos");
let totalService = 3;
let moneyDisponible = 0;

const dineroTotal = prompt('Ingrese la cantidad de dinero destinado para pagar los servicios');

const serviceNameOne = prompt(`${totalService} servicios disponible y su saldo disponible es: ${dineroTotal}: 
Ingrese nuevo servicio`);
const servicioPriceOne = prompt(`Ingrese el costo del servicio ${serviceNameOne}`);

moneyDisponible = dineroTotal - servicioPriceOne;

const serviceNameTwo = prompt(`${totalService = totalService - 1} servicios disponibles y su saldo disponible es: ${moneyDisponible}:
 Ingrese nuevo servicio`);
const servicioPriceTwo = prompt(`Ingrese el costo del servicio ${serviceNameTwo}`);

moneyDisponible = moneyDisponible - servicioPriceTwo;

const serviceNameThree = prompt(`${totalService = totalService - 1} servicios disponibles y su saldo disponible es: ${moneyDisponible}: 
Ingrese nuevo servicio`);
const servicioPriceThree = prompt(`Ingrese el costo del servicio ${serviceNameThree}`);

moneyDisponible = moneyDisponible - servicioPriceThree;

alert(` Servicios a Pagar: 
${serviceNameOne}: ${servicioPriceOne}
${serviceNameTwo}: ${servicioPriceTwo}
${serviceNameThree}: ${servicioPriceThree}
Disponible: ${moneyDisponible}
Saldo inicial: ${dineroTotal}
`);

console.log("Ordenes de compra");

const PrecioProductOne = 2000;
const PrecioProductTwo = 3000;
const PrecioProductThree = 1000;  

const cantProductOne = prompt(`Ingrese la cantidad a comprar para producto 1`);
const cantProductTwo = prompt(`Ingrese la cantidad a comprar para producto 2`);
const cantProductThree = prompt(`Ingrese la cantidad a comprar para producto 3`);

const totalCompra = cantProductOne*PrecioProductOne + cantProductTwo*PrecioProductTwo + cantProductThree*PrecioProductThree;

const coutas = prompt(`El costo de su compra es de ${totalCompra} ¿En cuantas cuotas desea cancelar?`);

const valorCouta = totalCompra / coutas;

alert(`Detalle de compra: 
 1) Producto 1: ${cantProductOne}uds Precio: ${PrecioProductOne}c/u
 2) Producto 2: ${cantProductTwo}uds Precio: ${PrecioProductTwo}c/u
 2) Producto 3: ${cantProductThree}uds Precio: ${PrecioProductThree}c/u
 Total a Pagar: ${totalCompra} en ${coutas} de ${valorCouta} c/u
 `)








