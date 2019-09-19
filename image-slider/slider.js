let slideIndex = 0;
showSlide(slideIndex);

function nextSlide(n) {
  slideIndex += n;
  showSlide(slideIndex);
}

function chooseSlide(n) {
  slideIndex = n - 1;
  showSlide(slideIndex);
}

function showSlide(n) {
  let slides = document.getElementsByClassName("picture");
  let dots = document.getElementsByClassName("dot");
  slideIndex = n;
  if (n < 0) {
    slideIndex = slides.length - 1;
  }
  if (n >= slides.length) {
    slideIndex = 0;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex].style.display = "block";
  dots[slideIndex].className += " active";
}
