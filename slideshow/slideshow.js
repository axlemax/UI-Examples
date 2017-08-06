var slideIndex = 1;     // Staring slide

window.onload = function(e) {
    showSlide(1);
}

function plusSlides(num) {
    showSlide(slideIndex += num);
}

function showCurrentSlide(num) {
    showSlides(slideIndex = num);
}

function showSlide(num) {
    var slides = document.getElementsByClassName('mySlides');
    var dots = document.getElementsByClassName('dot');
    console.log(slides);
    if (num > slides.length) {slideIndex = 1;}
    if (num < 1) {slideIndex = slides.length}
    for (var i = 0; i < slides.length; i++){
        slides[i].style.display = 'none';       // Hide all slides
    }
    for (var j = 0; j < dots.length; j++) {
        dots[j].className = dots[j].className.replace(' active', '');     // Hide all dots
    }
    slides[slideIndex - 1].style.display = 'block';     // Show current slideIndex
    dots[slideIndex - 1].classList.toggle('active');    // Activate current dot
}
