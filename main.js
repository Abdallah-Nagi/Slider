let prevBtn = document.querySelector(".previous-btn");
let nextBtn = document.querySelector(".next-btn");
let indicatorContainer = document.querySelector(".number-container");
let counter = document.querySelector(".slider-counter");
let images = Array.from(document.querySelectorAll(".slide-image"));
let imagesLength = images.length;
// let isFirst = slidesNum[0];
// let isLast = slidesNum[slidesNum.length - 1];

currentSlide = 1;

// Create indicators dynamiclly
for (let i = 1; i <= imagesLength; i++) {
  let slideIndicator = document.createElement("span");
  slideIndicator.classList.add("slide-number");
  slideIndicator.setAttribute("data-index", i);
  slideIndicator.textContent = i;
  indicatorContainer.appendChild(slideIndicator);
}

let indicatorItems = Array.from(indicatorContainer.children);

check();
nextBtn.addEventListener("click", () => {
  if (currentSlide != imagesLength) {
    currentSlide++;
    check();
  }
});

prevBtn.addEventListener("click", () => {
  if (currentSlide != 1) {
    currentSlide--;
    check();
  }
});

function check() {
  // update counter value
  counter.textContent = `Slide ${currentSlide} / ${imagesLength} `;

  // remove visible from all images then add visible to current image
  images.forEach((image) => {
    image.classList.remove("visible");
  });
  images[currentSlide - 1].classList.add("visible");

  // remove active from all indicators then add visible to current indicator

  indicatorItems.forEach((item) => {
    item.classList.remove("active");
  });

  indicatorItems[currentSlide - 1].classList.add("active");
  if (currentSlide == imagesLength) {
    disableBtn(nextBtn);
  } else {
    RemoveDisable(nextBtn);
  }

  if (currentSlide == 1) {
    disableBtn(prevBtn);
  } else {
    RemoveDisable(prevBtn);
  }
}

indicatorItems.forEach((indicator) => {
  indicator.addEventListener("click", () => {
    currentSlide = indicator.getAttribute("data-index");
    check();
  });
});

// ***************FUNCTIONS***************************
// Add disabled class for next btn
function disableBtn(btn) {
  btn.classList.add("disable");
}
// Remove disabled
function RemoveDisable(btn) {
  btn.classList.remove("disable");
}
// ***************END FUNCTIONS***************************
