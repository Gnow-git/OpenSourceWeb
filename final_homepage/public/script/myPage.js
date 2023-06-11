var slideIndex = 0;
var slideIndex2 = 0;
let timer;
let timer2;

function showReviewSlides() {
    var i;
    var slides = document.getElementsByClassName("myReview");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "block";
    timer = setTimeout(showReviewSlides, 2000);
}

function showBookMarkSlides() {
    var i;
    var slides = document.getElementsByClassName("myBookMark");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex2++;
    if (slideIndex2 > slides.length) {
        slideIndex2 = 1;
    }
    slides[slideIndex2 - 1].style.display = "block";
    timer2 = setTimeout(showBookMarkSlides, 2000);
}

function stopReview() {
    clearTimeout(timer);
}

function stopBookMark() {
    clearTimeout(timer2);
}

function reviewSlides(n) {
    showCurrentReviewSlides(slideIndex += n);
}

function bookMarkSlides(n) {
    showCurrentBookMarkSlides(slideIndex2 += n);
}

function showCurrentReviewSlides(n) {
    var i;
    var slides = document.getElementsByClassName("myReview");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}

function showCurrentBookMarkSlides(n) {
    var i;
    var slides = document.getElementsByClassName("myBookMark");
    if (n > slides.length) { slideIndex2 = 1 }
    if (n < 1) { slideIndex2 = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex2 - 1].style.display = "block";
}