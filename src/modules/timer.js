const twoNumber = (num) => (num < 10 ? `0${num}` : num);

const timer = (deadline) => {
  const timerDay = document.querySelector(".count_1 span");
  const timerHours = document.querySelector(".count_2 span");
  const timerMinutes = document.querySelector(".count_3 span");
  const timerSeconds = document.querySelector(".count_4 span");
  const getTimeRemaining = () => {
    let dateStop = new Date(deadline).getTime();
    let dateNow = new Date().getTime();
    let timeRemaining = (dateStop - dateNow) / 1000;
    let hours = Math.floor(timeRemaining / 60 / 60);
    let day = Math.floor(hours / 24);
    let minutes = Math.floor((timeRemaining / 60) % 60);
    let seconds = Math.floor(timeRemaining % 60);
    return {
      timeRemaining,
      hours,
      minutes,
      seconds,
      day,
    };
  };
  const updateClock = () => {
    let getTime = getTimeRemaining();
    if (getTime.timeRemaining < 0) {
      clearInterval(updateClock);
      timerDay.textContent = "00";
      timerHours.textContent = "00";
      timerMinutes.textContent = "00";
      timerSeconds.textContent = "00";
    } else {
      timerDay.textContent = twoNumber(getTime.day);
      timerHours.textContent = twoNumber(getTime.hours % 24);
      timerMinutes.textContent = twoNumber(getTime.minutes);
      timerSeconds.textContent = twoNumber(getTime.seconds);
    }
  };
  setInterval(updateClock, 1000);
};
export default timer;
