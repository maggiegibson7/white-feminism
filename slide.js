var upButton = document.querySelector('#up-button');
var downButton = document.querySelector('#down-button');
var slideArray = document.querySelectorAll(".slide");

var currentSlideNum = 1;

showSlides(currentSlideNum);

// Next/previous controls
function plusSlides(n) {
    console.log('running');
    showSlides(currentSlideNum += n);
}

// Thumbnail image controls
function currentSlide(n) {
    console.log('counting');
    showSlides(currentSlideNum = n);
}

function showSlides(n) {
    console.log('putting in work!');
  let i;
  if (n > slideArray.length) {currentSlideNum = 1}
  if (n < 1) {currentSlideNum = slideArray.length}
  for (i = 0; i < slideArray.length; i++) {
    slideArray[i].style.display = "none";
  }
  slideArray[currentSlideNum-1].style.display = "block";
}

//upButton.addEventListener('click', plusSlides(-1));
//downButton.addEventListener('click', plusSlides(1));