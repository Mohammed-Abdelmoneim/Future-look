/* const sliderContainer = document.querySelector(".slider");
const slideRight = document.querySelector(".right-slide");
const slideLeft = document.querySelector(".left-slide");

const backArrow = document.querySelector(".back-arrow");
const forwardArrow = document.querySelector(".forward-arrow");

const slideLength = slideLeft.querySelectorAll("div").length;
const slides = slideLeft.querySelectorAll("div");

let activeSlideIndex = 0;

forwardArrow.addEventListener("click", (e) => swipe(e));

const swipe = (e) => {
  console.log(e.target);

  for (let i = 0; i <= slideLength; i++) {
    slides[i].node.parentNode.childNodes.classList.remove("hidden-slide");
  }
};
 */

const slides = document.querySelectorAll(".img-slide");
const slidesText = document.querySelectorAll(".text-slide");
var counter = 0;

slides.forEach((slide, index) => {
  slide.style.left = `${index * 100}%`;
});

slidesText.forEach((slide, index) => {
  slide.style.bottom = `${index * 100}%`;
});

const goPrev = () => {
  if (counter == 0) {
    counter = slides.length - 1;
    slideImg();
    slideText();
  } else {
    counter--;
    slideImg();
    slideText();
  }
};

const goNext = () => {
  if (counter == slides.length - 1) {
    counter = 0;
    slideImg();
    slideText();
  } else {
    counter++;
    slideImg();
    slideText();
  }
};

function slideImg() {
  slides.forEach((slide) => {
    slide.style.transform = `translateX(-${counter * 100}%)`;
  });
}

function slideText() {
  slidesText.forEach((slide) => {
    slide.style.transform = `translateY(${counter * 100}%)`;
  });
}

let scrollContainer = document.querySelector(".logos");
let backArrow = document.getElementById("back-arrow");
let forwardArrow = document.getElementById("forward-arrow");

/* scrollContainer.addEventListener("wheel", (evt) => {
  evt.preventDefault();
  scrollContainer.scrollLeft += evt.deltaY;
  scrollContainer.style.scrollBehavior = "auto";
});
 */
/* forwardArrow.addEventListener("click", () => {
  scrollContainer.style.scrollBehavior = "smooth";
  scrollContainer.scrollLeft += 500;
});

backArrow.addEventListener("click", () => {
  scrollContainer.style.scrollBehavior = "smooth";
  scrollContainer.scrollLeft -= 500;
});
 */
const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

///////////////////////////////////////////////////////////
// Fixing flexbox gap property missing in some Safari versions
function checkFlexGap() {
  var flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);

  if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();

const dropdowns = document.querySelectorAll(".dropdown-toggle");
console.log($(window).height());

if ($(window).width() <= 750) {
  console.log("true");
  for (let i = 0; i <= dropdowns.length; i++) {
    if (dropdowns[i].hasAttribute("data-bs-toggle")) {
      dropdowns[i].removeAttribute("data-bs-toggle");
    }
  }
}
