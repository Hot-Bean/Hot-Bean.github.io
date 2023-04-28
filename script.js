// setting up variables 
var slideIndex = 0;
var images_src = ["images/ChristopherEcoli.png","images/BartholomewAnthrax.png", "images/ShivaKhan.png", "images/Arthurbirtingham.png", "images/TravisCoprolalia.png"];
var text_src = [
    "Name: Christopher Ecoli<br><br>Job Title: Chief Executive Officer<br><br>Meet Christopher Ecoli, the CEO of Hotbeans. He built the company to empower developers with resources in order to produce exciting websites. A visionary leader, committed to innovation and collaboration, Hotbeans is now a sought-after company for developers regardless of their background.",
    "Name: Batholomew Anthrax<br><br>Job Title: Recruit Lead<br><br>Meet Bartholomew Anthrax, our talented Recruit Lead! Bartholomew is a dedicated professional who is passionate about connecting talented individuals with exciting job opportunities. He is currently leading our efforts to expand our team of website developers, both at the senior and junior level.",
    "Name: Shiva Khan<br><br>Job Title: Senior Website Developer<br><br>Meet Shiva Khan, our invaluable Senior Website Developer with years of experience! Shiva has been with Hotbeans since the beginning, who is a  skilled problem solver and a collaborator. His passion for technology and dedication to his craft make him an indispensable member of our team. ",
    "Name: Arthur Birtingham<br><br> Title: Junior Website Developer<br><br> Arthur Birthingham is a talented and enthusiastic young website developer who recently joined our company. Arthur has a variety of knowledge and expertise in the field of website building, including proficiency in numerous programming languages and a good eye for design. We anticipate benefiting from his efforts over the next months and years",
    "Name: Travis Coprolalia<br><br> Title: IT Technician<br><br>Travis Coprolalia our accomplished IT technician. He ensures that the company's technology functions effectively due to his significant knowledge of network administration, hardware/software investigation, and cybersecurity. We're fortunate to have Travis on our team because of his attention to detail, rapid problem-solving, and excellent communication. "
]

 // function to go to the next image    
function nextSlide() {
    showSlide(slideIndex += 1);
}
// function to go to the previous image 
function prevSlide() {
    showSlide(slideIndex -= 1);
}

//function that shows the text with the image 
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
