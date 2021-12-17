const slider = () => {
  const sliderBenefit = document.querySelector(".benefits-wrap");
  const itemSliderBenefit = document.querySelectorAll(".benefits__item");
  const prevNextBenefits = document.querySelector(".benefits-arrows");
  let shiftSlider = sliderBenefit.style.transform.match(/\d+/gi);
  let viewSlides;
  let currentSlide = 0;
  let interval = 0;
  let transSlide = 0;
  let widthSlide = 0;

  const prevSlide = (elems, index, strClass) => {
    elems[index].classList.remove(strClass);
  };
  const nextSlide = (elems, index, strClass) => {
    elems[index].classList.add(strClass);
  };

  const autoSlide = () => {
    prevSlide(itemSliderBenefit, currentSlide, "slide-active");
    currentSlide++;
    window.screen.width > 576 ? (viewSlides = 3) : (viewSlides = 1);
    widthSlide = +(itemSliderBenefit[0].style.width =
      sliderBenefit.offsetWidth / viewSlides);
    shiftSlider = Number(
      sliderBenefit.style.transform.replace(/[^\-\d+]/gi, "")
    );
    if (currentSlide >= itemSliderBenefit.length - (viewSlides - 1)) {
      currentSlide = 0;
      transSlide = 0;
    } else {
      transSlide = shiftSlider - widthSlide;
    }
    sliderBenefit.style.transform = `translateX(${transSlide}px)`;
    sliderBenefit.style.transitionDuration = ".5s";
    nextSlide(itemSliderBenefit, currentSlide, "slide-active");
  };
  const startSlide = (timer = 2000) => {
    interval = setInterval(autoSlide, timer);
  };
  const stopSlide = () => {
    clearInterval(interval);
  };
  startSlide();
  prevNextBenefits.addEventListener("click", (e) => {
    e.preventDefault();
    stopSlide();
    prevSlide(itemSliderBenefit, currentSlide, "slide-active");
    if (e.target === document.querySelector(".benefits__arrow--right img")) {
      currentSlide++;
      window.screen.width > 576 ? (viewSlides = 3) : (viewSlides = 1);
      widthSlide = +(itemSliderBenefit[0].style.width =
        sliderBenefit.offsetWidth / viewSlides);
      shiftSlider = Number(
        sliderBenefit.style.transform.replace(/[^\-\d+]/gi, "")
      );
      if (currentSlide >= itemSliderBenefit.length - (viewSlides - 1)) {
        currentSlide = 0;
        transSlide = 0;
      } else {
        transSlide = shiftSlider - widthSlide;
      }
      sliderBenefit.style.transform = `translateX(${transSlide}px)`;
      sliderBenefit.style.transitionDuration = ".5s";
      startSlide();
    } else if (
      e.target === document.querySelector(".benefits__arrow--left img")
    ) {
      stopSlide();
      currentSlide--;
      window.screen.width > 576 ? (viewSlides = 3) : (viewSlides = 1);
      widthSlide = +(itemSliderBenefit[0].style.width =
        sliderBenefit.offsetWidth / viewSlides);
      shiftSlider = Number(
        sliderBenefit.style.transform.replace(/[^\-\d+]/gi, "")
      );
      if (currentSlide < 0) {
        currentSlide = itemSliderBenefit.length - viewSlides;
        transSlide = -(widthSlide * (itemSliderBenefit.length - viewSlides));
      } else {
        transSlide = shiftSlider + widthSlide;
      }
      sliderBenefit.style.transform = `translateX(${transSlide}px)`;
      sliderBenefit.style.transitionDuration = ".5s";
      startSlide();
    }
    nextSlide(itemSliderBenefit, currentSlide, "slide-active");
  });
};
export default slider;
