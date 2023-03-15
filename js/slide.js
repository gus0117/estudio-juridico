/* 
    Code from https://www.w3schools.com/howto/howto_js_slideshow.asp
*/

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("img-perfil");

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    

  slides[slideIndex-1].style.display = "flex";  

  setTimeout(showSlides, 30000); // Change image every 2 seconds
}