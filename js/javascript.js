function validateform() {
  var name = document.forms["myform"]["name"].value;
  var email = document.forms["myform"]["email"].value;
  var ordered = document.forms["myform"]["order"].value;
  if (name == "" || email == "" || ordered == "") {
    alert("tidak boleh ada yang kosong");
    return false;
  }
}

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("Slides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 1000);
}
