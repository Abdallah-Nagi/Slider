let prevBtn = document.querySelector(".previous-btn");
let nextBtn = document.querySelector(".next-btn");
let slidesNum = document.querySelectorAll(".slide-number");
let counter = document.querySelector(".slider-counter");
let images = document.querySelectorAll(".slide-image");

let isFirst = slidesNum[0];
let isLast = slidesNum[slidesNum.length - 1];
// ***************EVENT LISTENERS***************************
slidesNum.forEach((slideNum) => {
  slideNum.addEventListener("click", (e) => {
    heighlightNum(e.target);
    updateCounter(e.target);
    changeImage(e.target);
    if (checkPosition(isLast)) {
      disableBtn(nextBtn);
    } else {
      RemoveDisable(nextBtn);
    }
    if (checkPosition(isFirst)) {
      disableBtn(prevBtn);
    } else {
      RemoveDisable(prevBtn);
    }
  });
});

nextBtn.addEventListener("click", () => {
  if (!checkPosition(isLast)) {
    updateCounter(getNextorPrevSlide("next"));
    changeImage(getNextorPrevSlide("next"));
    heighlightNum(getNextorPrevSlide("next"));
    if (checkPosition(isLast)) {
      disableBtn(nextBtn);
    }
  }
});

prevBtn.addEventListener("click", () => {
  if (!checkPosition(isFirst)) {
    updateCounter(getNextorPrevSlide("prev"));
    changeImage(getNextorPrevSlide("prev"));
    heighlightNum(getNextorPrevSlide("prev"));
    if (checkPosition(isFirst)) {
      disableBtn(prevBtn);
    }
  }
});
// ***************END EVENT LISTENERS***************************

// ***************FUNCTIONS***************************
// heighlight new slide number when clicked
function heighlightNum(slide) {
  slidesNum.forEach((slide) => {
    slide.classList.remove("active");
  });
  slide.classList.add("active");
}

// Get the slide with the next active class
function getNextorPrevSlide(order) {
  let nextSlide;
  let prevSlide;
  slidesNum.forEach((slide, index) => {
    if (slide.classList.contains("active") && order == "next") {
      nextSlide = slidesNum[index + 1];
    } else if (slide.classList.contains("active") && order == "prev") {
      prevSlide = slidesNum[index - 1];
    }
  });
  if (order == "next") {
    return nextSlide;
  } else if (order == "prev") {
    return prevSlide;
  }
}

// update the slide number counter
function updateCounter(slideNum) {
  counter.textContent = `Slide ${slideNum.textContent} / ${slidesNum.length}`;
}

// Update slider image
function changeImage(slide) {
  images.forEach((image) => {
    image.classList.remove("visible");
  });
  images[slide.textContent - 1].classList.add("visible");
}

// Check if current slide is last
function checkPosition(slide) {
  if (slide.classList.contains("active")) {
    return true;
  }
}
// function to return the next counter
function nextCountIndex() {
  let newValue;
  slidesNum.forEach((slide, index) => {
    if (slide.classList.contains("active")) {
      newValue = slidesNum[index + 1];
    }
  });
  return newValue;
}
// Add disabled class for next btn
function disableBtn(btn) {
  btn.classList.add("disable");
}
// Remove disabled
function RemoveDisable(btn) {
  btn.classList.remove("disable");
}
// ***************END FUNCTIONS***************************
