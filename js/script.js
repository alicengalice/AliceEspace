// Scrollspy
var spy = new Gumshoe("nav a");

// Burger
$(".burger").on("click", function (event) {
  $(".navigation-bar").slideToggle("200");
  $(".toggle-open").toggleClass("open");
  $(".toggle-close").toggleClass("close");
});

// Sticky Navbar
$(document).ready(function () {
  $(window).bind("scroll", function () {
    var navHeight = $("header").height();
    if ($(window).scrollTop() > navHeight) {
      $("header").addClass("fixed");
    } else {
      $("header").removeClass("fixed");
    }
  });
});

// Scroll to TOP
var btn = $(".scrollup");
$(window).scroll(function () {
  if ($(window).scrollTop() > 500) {
    btn.addClass("show");
  } else {
    btn.removeClass("show");
  }
});
btn.on("click", function (e) {
  e.preventDefault();
  $("html, body").animate({ scrollTop: 0 }, "500");
});

// Reveal Animation
const sr = ScrollReveal({
  origin: "top",
  distance: "20px",
  duration: 1500,
  reset: true,
});
ScrollReveal().reveal(".col, .aboutme-image, .img-col", { origin: "left" });
ScrollReveal().reveal(".aboutme-content, .home-image", { origin: "right" });
ScrollReveal().reveal(
  ".product-item, .skill-item, .brand-wrapper, .newsletter-wrapper",
  { interval: 100 }
);

// Show text with blur background
function toggle() {
  var blur = document.getElementById("blur");
  blur.classList.toggle("active");
  var contactme = document.getElementById("contactme");
  contactme.classList.toggle("blur-background");
  var popup = document.getElementById("item1");
  popup.classList.toggle("active");
  var arrow = document.getElementById("arrow-up");
  arrow.classList.toggle("show", false);
  arrow.classList.toggle("hidden");
  var element = document.body;
  element.classList.toggle("stop-scroll");
}

// Click on different recipes
function showRecipe() {
    var recipes = document.getElementsByTagName("product-item");
    var recipeCount = recipes.length;
    for (var i = 0; i <= recipeCount; i += 1) {
    recipes[i].onclick = function(e) {
        alert(this.id);
    };
}

}
