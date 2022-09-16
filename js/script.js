let slideIndex = 1;
showSlides(slideIndex);


function plusSlides(n) {
  showSlides(slideIndex += n);
}

function home(){
 let i;
 let slides = document.getElementsByClassName("mySlides");
 let slide = document.getElementById("Home");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  showSlides(slideIndex = 1);
}
function about(){
 let i;
 let slides = document.getElementsByClassName("mySlides");
 let slide = document.getElementById("About");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  showSlides(slideIndex = 2);
}
function eduction(){
 let i;
 let slides = document.getElementsByClassName("mySlides");
 let slide = document.getElementById("Education");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  showSlides(slideIndex = 3);
}
function experience(){
 let i;
 let slides = document.getElementsByClassName("mySlides");
 let slide = document.getElementById("Experience");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  showSlides(slideIndex = 4);
}
function projects(){
 let i;
 let slides = document.getElementsByClassName("mySlides");
 let slide = document.getElementById("Experience");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  showSlides(slideIndex = 5);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}