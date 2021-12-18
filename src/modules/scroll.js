const scrollUp = () => {
  const smoothScroll = document.querySelector(".smooth-scroll");
  const offerBlock = document.getElementById("offer");

  const showSmooth = () => {
    if (window.pageYOffset <= offerBlock.offsetTop + offerBlock.offsetHeight) {
      smoothScroll.style.opacity = "0";
    } else {
      smoothScroll.style.opacity = "1";
    }
  };
  window.addEventListener("scroll", showSmooth);
  showSmooth();
  smoothScroll.addEventListener("click", (event) => {
    event.preventDefault();
    document.body.scrollIntoView({
      behavior: "smooth",
    });
  });
};
export default scrollUp;
