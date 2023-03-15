const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
})

/* 
 https://programadorwebvalencia.com/javascript-loading-hasta-que-las-imagenes-esten-cargadas/
*/

document.addEventListener('DOMContentLoaded', () => {

    // Lista de urls que deseas precargar
    const LIST_IMAGES_PRELOAD = ["img/hammer.webp", "img/balance.svg", "img/img-perfil-1.jpg"];
    // Elemento visual del loading
    const LOADING = document.querySelector('.loading');
    // Obtiene elemento donde serán precargadas las imágenes
    const CONTAINER_IMAGES_PRELOAD = document.querySelector('#preload-images');
    // Tiempo de espera entre revisiones en ms
    const SLEEP_CHECK = 50;
  
    // Create una imagen por cada elemento de la lista LIST_IMAGES_PRELOAD y la guarda en el elemento CONTAINER_IMAGES_PRELOAD
  
    function makePreloadImages() {
  
      LIST_IMAGES_PRELOAD.forEach(urlImg => {
        // Crea la imagen
          const IMG_PRELOAD = document.createElement('img');
          // Añade su ruta
          IMG_PRELOAD.src = urlImg;
          // Oculta para que no se muestre
          IMG_PRELOAD.style = 'display: none';
          // Añade al contenedor
          CONTAINER_IMAGES_PRELOAD.appendChild(IMG_PRELOAD);
      });
    }
  
  
    // Herramienta para esperar un tiempo determinado en una función asíncrona
  
    function sleep(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    }
  
    // Comprueba de forma recursiva si todas las imágenes se han completado
    // Si todas estan descargadas, quitará la clase 'loading--show' a 'loading' para ocultarlo
  
    async function checkIfAllImagesCompleted() {
  
      // Obtiene todas las imágenes sin completar
      const NO_COMPLETES = Array.from(CONTAINER_IMAGES_PRELOAD.querySelectorAll('img')).filter((img) => {
          return !img.complete;
      });
  
      if (NO_COMPLETES.length !== 0) {
        // Vuelve a iterar si existe alguna sin completar
        await sleep(SLEEP_CHECK);
        return checkIfAllImagesCompleted();
      } else {
        // Oculta el loading
        LOADING.classList.remove('loading--show');
      } 
      return true;
    }
  
  
    // Inicia
            
    makePreloadImages();
    checkIfAllImagesCompleted();
  
  });