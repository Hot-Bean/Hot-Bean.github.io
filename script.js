var slideIndex = 0;
var images_src = ["images/ChristopherEcoli.png","images/BartholomewAnthrax.png", "images/ShivaKhan.png", "images/Arthurbirtingham.png"];
var text_src = [
    "Name: Christopher EcolJob<br>Title: Chief Executive Officer<br> Meet Christopher Ecoli, the CEO of Hotbeans. He built the company to empower developers with resources in order to produce exciting websites. A visionary leader, committed to innovation and collaboration, Hotbeans is now a sought-after company for developers regardless of their background.",
    "Name: Batholomew Anthrax<br>Job Title: Recruit Lead<br>Meet Bartholomew Anthrax, our talented Recruit Lead! Bartholomew is a dedicated professional who is passionate about connecting talented individuals with exciting job opportunities. He is currently leading our efforts to expand our team of website developers, both at the senior and junior level.",
    "Name: Shiva Khan<br>Job Title: Senior Website Developer<br>Meet Shiva Khan, our invaluable Senior Website Developer with years of experience! Shiva has been with Hotbeans since the beginning, who is a  skilled problem solver and a collaborator. His passion for technology and dedication to his craft make him an indispensable member of our team. ",
    "Unknown person" ]

function nextSlide() {
    showSlide(slideIndex += 1);
}
function prevSlide() {
    showSlide(slideIndex -= 1);
}

function showSlide(n) {
    var slides = document.querySelector(".blue-box img");
    var text = document.querySelector(".blue-box p");
    if (n > images_src.length-1) {slideIndex = 0;}
    if (n < 0) {slideIndex = images_src.length-1;}

    for (let i = 0; i < images_src.length; i++) {
        if (slideIndex == i) {
            slides.src = images_src[i];
            text.innerHTML = text_src[i];
        }
    }
}
