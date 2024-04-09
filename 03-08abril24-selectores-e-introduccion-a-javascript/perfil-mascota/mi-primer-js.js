// alert("hola!");

// ✅ Declara una variable CONSTANTE
const gatito = "Bigotes";
// ✅ Declara una variable REASIGNABLE
let perrito = "Fideo";

// 𐄂 Declara una variable REASIGNABLE (forma viejita)
// var miMascota = "Bigotes";


// perrito = 123;
// alert(typeof perrito);


// Encuentra la PRIMER coincidencia del selector
// const buttons = document.querySelector("div.mascota button");

// Encuentra TODAS las coincidencias del selector
const buttons = document.querySelectorAll("div.mascota button");

console.log(buttons);

/* buttons.addEventListener("click", function() {
  alert("¡Hola!");
}); */

buttons.forEach(function(button) {
  button.addEventListener("click", function() {
    if (button.textContent === "Like") {
      alert("=)");
    } else {
      alert("=(");
    }
  });
});
