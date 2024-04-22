// ---- Tipo de Dato String ----
const myName = "Victor Servin, tengo 29 años y soy de México.";

const nombre = "Victor";
const apellido = 'Servin';
const apellidoMaterno = `Carrillo`;

// Concatenación
const frase = "Mi nombre es " + nombre + ' ' + apellido + " y tengo 29 años.";

// String template
const fraseTemplate = `Mi nombre es ${nombre} ${apellido} y tengo 29 años.`;

console.log(frase);
console.log(fraseTemplate);

// ---- Tipo de Dato Number ----
const rentaMensual = 7999.99;

// Operaciones
// Suma +
// Resta -
// Multiplicación *
// División /
// Módulo %
// Exponente **  ^  (2^3 = 8) (2**3 = 8)

const rentaAnual = rentaMensual * 12;

console.log(rentaMensual);
console.log(rentaAnual);

// ---- Tipo de Dato Boolean ----
const edad = 20;
const nacionalidad = "Mexicano";

// =  Es asignación (const edad = 20) // 20
// == Es comparación de valor (nacionalidad == "USA") // True
// === Es comparación de valor y tipo de dato (nacionalidad === "USA") // False
const esMayorDeEdad = (nacionalidad == "USA" && edad >= 21) ||
                      (nacionalidad != "USA" && edad >= 18);

console.log(esMayorDeEdad);

// Porque NUNCA usar el ==, siempre usar ===
const edadString = "20";
const edadNumber = 20;

console.log("Concatenacion: ", edadString + 1);
console.log("Suma: ", edadNumber + 1);
// == Es comparación de valor
console.log("Doble igual: ", edadString == edadNumber);
// === Es comparación de valor y tipo de dato
console.log("Triple igual: ", edadString === edadNumber);

if (false) {
  console.log("Soy verdadero!");
} else {
  console.log("Soy falso!");
}

if (2 + 2 === 4) {
  console.log("Genial!");
} else {
  console.log("Que triste!");
}

if (esMayorDeEdad) {
  console.log("Puede tomarse una cerveza!");
} else {
  console.log("No puede tomar cerveza!");
}

const amigosEnMiCumple = 5;

if (amigosEnMiCumple === 0) {
  console.log("Que bueno! Tengo mas comida para mi!");
} else if (amigosEnMiCumple <= 4) {
  console.log("Que bueno! Tengo comida para todos!");
} else {
  console.log("No hay suficiente comida!");
}


switch(amigosEnMiCumple) {
  case 0:
    console.log("Puedo jugar un vidojuego!");
    break;
  case 2:
    console.log("Podemos jugar cartas!");
    break;
  case 4:
  case 5:
  case 6:
    console.log("Podemos jugar Catan");
    break;
  default:
    console.log("No se que hacer!");
    break;
}

let invitados = 0;

console.log("--------------------");
console.log("Bienvenidos a mi fiesta!");
console.log(`Invitados: ${invitados}`);

console.log("Llego Manuel!");
invitados = invitados + 1;
console.log(`Invitados: ${invitados}`);
console.log("Llego Victor!");
invitados += 1;
console.log(`Invitados: ${invitados}`);
console.log("Llego Samantha!");
invitados++;
console.log(`Invitados: ${invitados}`);

console.log("--------------------");

console.log("Tenemos hambre!");
// Ciclo indefinido
while (invitados < 8) {
  console.log(`Somos ${invitados + 1}, vamos a esperar...`);

  console.log("Llego una pareja!");
  invitados = invitados + 2;
}
console.log("Vamos a pedir pizza!!!");

// Ciclo Definido
for (let rebanada = 1; rebanada <= 8; rebanada++) {
  console.log(`La rebanada ${rebanada} fue entregada!`);
}
console.log("Ya no hay Pizza :(");

console.log("--------------------");

// EJERCICIO
// Escribe un codigo que declare 3 variables, caracter, vecesARepetir y resultado
const caracter = '🐶';
const vecesARepetir = 500;
let resultado = '';

for (let rebanada = 1; rebanada <= vecesARepetir; rebanada++) {
  resultado += caracter; // resultado = resultado + caracter
}

console.log(resultado);


console.log("--------------------");


// ---- Funciones ----
function saludar() {
  console.log("Hola!");
}

saludar();

function sumarDos(numero) {
  return numero + 2;
}

const resultadoSuma = sumarDos(5);
console.log(resultadoSuma);

function saludame(nombre, apellido, edad) {
  if (edad !== undefined) {
    return `Hola ${nombre} ${apellido}, tienes ${edad} años.`;
  } else {
    return `Hola ${nombre} ${apellido}, no se cuantos años tienes.`;
  }
}

console.log(saludame("Victor", "Servin", 29));
console.log(saludame("Manuel", "Maldonado", 30));
console.log(saludame("Sergio", "Aguilar"));

function ladrido() {
  console.log("woof");
}

const maullido = () => {
  console.log("meow");
};

const gaznido = function() {
  console.log("quack");
};

ladrido();
maullido();
gaznido();

let saludo = "Buen dia!";

function sumaCinco(numero) {
  const algunaVariable = "No puedes verme fuera de la function!";
  saludo = "Buenas tardes!";
  return numero + 5;
}

console.log(saludo);
console.log(sumaCinco(10));
console.log(saludo);

// console.log(algunaVariable); // ReferenceError: algunaVariable is not defined

for (let i = 0; i < 5; i++) {
  console.log(i);
}

// console.log(i); // ReferenceError: i is not defined


console.log("--------------------");

const A = "A";
let F;

function doStuff(B) {
  console.log(B); // funciona bien
  const C = "C";
  let H = "H";
  if (1 + 1 === 2) {
    const D = "D";
    H = "algo mas";
  }
  // console.log(D); // ReferenceError
  console.log(H); // funciona bien
  F = "F";
}

let E = 0;
while (E < 3) {
  E++;
  console.log(A); // funciona bien
  const G = "G";
}
console.log(E); // funciona bien
// console.log(G); // ReferenceError

doStuff("B");
// console.log(B); // ReferenceError
// console.log(C); // ReferenceError
console.log(F);

// A
// A
// A
// 3 (E)
// ReferenceError (linea 242)
// B
// ReferenceError (linea 230)
// algo mas
// ReferenceError (linea 245)
// ReferenceError (linea 246)
// F


// Retomando los valores de strings
console.log("--------------------");

const frasecita = "HoLa, mE lLaMo ViCtOr!";

console.log(frasecita);
console.log(frasecita.toLowerCase());

console.log(Math.PI);
console.log(Math.random());
console.log(Math.round(4.5));
console.log(Math.round(4.4));

const cadenaDePrueba1 = "The quick brown fox jumps over the lazy dog";

console.log(cadenaDePrueba1.length);
console.log(cadenaDePrueba1.includes("fox"));
console.log(cadenaDePrueba1.includes("cat"));

console.log(Date.now());
console.log((new Date()).toLocaleString());


const inputUsuario = prompt("hola", "test");

alert(inputUsuario);


