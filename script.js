var slideIndex = 0;
var images_src = ["images/ChristopherEcoli.png","images/BartholomewAnthrax.png", "images/ShivaKhan.png", "images/Arthurbirtingham.png"];
function nextSlide() {
    showSlide(slideIndex += 1);
}
  
function prevSlide() {
    showSlide(slideIndex -= 1);
}

function showSlide(n) {
    var slides = document.querySelector(".blue-box img");
    if (n > images_src.length-1) {slideIndex = 0;}
    if (n < 0) {slideIndex = images_src.length-1;}

    for (let i = 0; i < images_src.length; i++) {
        if (slideIndex == i) {
            slides.src = images_src[i];
        }
    }
}