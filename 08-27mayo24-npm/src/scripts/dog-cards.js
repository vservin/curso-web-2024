"use strict";

(async function() {

  // Una funcion asincrona, siempre va a retornar una promesa.
  async function getAllDogBreeds() {
    // Promise!
    // Una promesa es una operación asíncrona que tarda "N" tiempo en completarse.
    // La promesa puede ser exitosa o fallar.
    return fetch("https://dog.ceo/api/breeds/list/all");
  }

  // La promesa retornada por getImageForDogBreed es la combinacion de 2 promesas:
  // - la promesa del fetch
  // - la promesa del response.json
  async function getImageForDogBreed(breedString) {
    // Fetch hace llamadas a paginas externas o internas de un servidor.
    return fetch(`https://dog.ceo/api/breed/${breedString}/images/random`)
      // Las promesas se pueden "encadenar" con el metodo then.
      .then((response) => response.json());
  }

  function generateHTMLForDogCard(image) {
    return `
      <div class="cell card">
        <div class="card-image">
          <figure class="image is-4by3">
            <img src="${image}" />
          </figure>
        </div>
      </div>
    `;
  }

  // Formateando la estructura del JSON de la API para que pueda procesarla y usarla en llamadas subsequentes.
  function formatForAPIBreeds(breeds, limit) {
    const formattedBreeds = [];
    Object.entries(breeds).forEach(([breed, subBreeds], index) => {
      if (index >= limit) return false;
      let formattedBreed = breed;
      if (subBreeds.length > 0) {
        subBreeds.forEach((subBreed) => {
          formattedBreeds.push(`${formattedBreed}/${subBreed}`);
        });
      } else {
        formattedBreeds.push(`${formattedBreed}`);
      }
    });
    return formattedBreeds;
  }

  // await es esperar a que la promesa se resuelva o retorne una respuesta.
  const response = await getAllDogBreeds();
  // JSON es un formato de respuesta de una API o de archivos. JavaScript Object Notation.
  const dogBreeds = await response.json();
  console.log({ dogBreeds });

  const limitForBreeds = 10;  
  const formattedBreeds = formatForAPIBreeds(dogBreeds.message, limitForBreeds);
  console.log({ formattedBreeds });

  const cardGrid = document.querySelector(".dog-cards");

  let cardContentToLoad = "";
  for (let i = 0; i < formattedBreeds.length; i++) {
    const breed = formattedBreeds[i];
    const imageResponse = await getImageForDogBreed(breed);
    cardContentToLoad += generateHTMLForDogCard(imageResponse.message);
  }
  cardGrid.innerHTML = cardContentToLoad;
})();
