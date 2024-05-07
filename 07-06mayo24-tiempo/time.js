"use strict";

// Optional chaining
/* 
const objeto = {
  animal: {
    nombre: "fideo",
    edad: 15,
  }
};
objeto.alimento.marca; // Error
objeto?.alimento?.marca; // undefined -> Sin error
 */

// Spread operator
/*
const array1 = [1, 2, 3];
function agregaNum(array, num) {
  array[3] = num;
  return array;
}
agregaNum(array1, 4);
console.log(array1); // [1, 2, 3, 4]
function agregaNum2(array, num) {
  const newArray = [...array];
  newArray[3] = num;
  return newArray;
}
agregaNum2(array1, 4);
console.log(array1); // [1, 2, 3]
--------------------------------------------
const persona = {nombre: "Victor", apellido: "Servin", edad: 29};
const copiaPersona = {...persona}
const personaReferencia = persona;
persona.carrera = "Ing Mecatronica"; // Afecta tanto a persona como a personaReferencia
// El spread operator evita efectos secundarios
*/




// Buttons
const startButton = document.getElementById("start");
const restartButton = document.getElementById("restart");
const stopButton = document.getElementById("stop");
const loopButton = document.getElementById("loop");

// Digits
const hoursDigits = document.getElementById("hours");
const minutesDigits = document.getElementById("minutes");
const secondsDigits = document.getElementById("seconds");
const dsDigits = document.getElementById("ds");



function determineButtonsToShow(isChronometerRunning) {
  if (isChronometerRunning) {
    startButton.style.display = "none";
    restartButton.style.display = "none";
    stopButton.style.display = "inline-block";
    loopButton.style.display = "inline-block";
  } else {
    startButton.style.display = "inline-block";
    restartButton.style.display = "inline-block";
    stopButton.style.display = "none";
    loopButton.style.display = "none";
  }
}

function summationLogic(timeArray) {
  let [hours, minutes, seconds, decimals] = timeArray;
  decimals++;
  if (decimals === 10) {
    decimals = 0;
    seconds++;
  }
  if (seconds === 60) {
    seconds = 0;
    minutes++;
  }
  if (minutes === 60) {
    minutes = 0;
    hours++;
  }
  return [hours, minutes, seconds, decimals];
}

function refreshUI(timeArray) {
  const [hours, minutes, seconds, decimals] = timeArray;
  hoursDigits.innerHTML = hours.toString().padStart(2, '0');
  minutesDigits.innerHTML = minutes.toString().padStart(2, '0');
  secondsDigits.innerHTML = seconds.toString().padStart(2, '0');
  dsDigits.innerHTML = decimals.toString().padStart(1, '0');
}


// setTimeout, setInterval, clearTimeout, clearInterval

(function() {
  let timeArray = [0, 0, 0, 0]; // [hours, minutes, seconds, decimals]
  let intervalId = null;
  determineButtonsToShow(false);

  startButton.addEventListener("click", () => {
    intervalId = setInterval(() => {
      timeArray = summationLogic(timeArray);
      refreshUI(timeArray);
    }, 100);
    determineButtonsToShow(true);
  });
  stopButton.addEventListener("click", () => {
    clearInterval(intervalId);
    determineButtonsToShow(false);
  });
  restartButton.addEventListener("click", () => {
    timeArray = [0, 0, 0, 0];
    refreshUI(timeArray);
  });
})();



/**
 * Base: https://reloj-alarma.es/cronometro
 * 1. Corra los centisegundos
 * 2. Cuando llegue a 100, reiniciar a 0 y sumar 1 segundo
 * 3. Usar determineButtonsToShow
 * 4. Implementar Pause
 * 5. Implementar el Reinicio
 * 6. Implementar la vuelta
 */
