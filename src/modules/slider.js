const slider = ({ view, wrap, arrows, item, times }) => {
  const slider = document.querySelector(wrap);
  const itemSlider = document.querySelectorAll(item);
  const arrowsSlider = document.querySelectorAll(arrows);

  let shiftSlider = slider.style.transform.match(/\d+/gi);
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

  const parametrSlide = () => {
    window.screen.width > 576 ? (viewSlides = view) : (viewSlides = 1);
    widthSlide = +(itemSlider[0].style.width = slider.offsetWidth / viewSlides);
    shiftSlider = Number(slider.style.transform.replace(/[^\-\d+]/gi, ""));
    slider.style.transitionDuration = ".5s";
  };

  const autoSlide = () => {
    prevSlide(itemSlider, currentSlide, "slide-active");
    currentSlide++;
    parametrSlide();
    if (currentSlide >= itemSlider.length - (viewSlides - 1)) {
      currentSlide = 0;
      transSlide = 0;
    } else {
      transSlide = shiftSlider - widthSlide;
    }
    slider.style.transform = `translateX(${transSlide}px)`;
    nextSlide(itemSlider, currentSlide, "slide-active");
  };
  const startSlide = (timer = times) => {
    interval = setInterval(autoSlide, timer);
  };
  const stopSlide = () => {
    clearInterval(interval);
  };
  startSlide();
  arrowsSlider.forEach((arrow) => {
    arrow.addEventListener("click", (e) => {
      e.preventDefault();
      stopSlide();
      prevSlide(itemSlider, currentSlide, "slide-active");
      if (e.target === document.querySelector(`${arrows}--right img`)) {
        currentSlide++;
        parametrSlide();
        if (currentSlide >= itemSlider.length - (viewSlides - 1)) {
          currentSlide = 0;
          transSlide = 0;
        } else {
          transSlide = shiftSlider - widthSlide;
        }
        slider.style.transform = `translateX(${transSlide}px)`;
        startSlide();
      } else if (e.target === document.querySelector(`${arrows}--left img`)) {
        stopSlide();
        currentSlide--;
        parametrSlide();
        if (currentSlide < 0) {
          currentSlide = itemSlider.length - viewSlides;
          transSlide = -(widthSlide * (itemSlider.length - viewSlides));
        } else {
          transSlide = shiftSlider + widthSlide;
        }
        slider.style.transform = `translateX(${transSlide}px)`;
        startSlide();
      }
      nextSlide(itemSlider, currentSlide, "slide-active");
    });
  });
};
export default slider;
