const twoNumber = (num) => (num < 10 ? `0${num}` : num);

const timer = (deadline) => {
  const timerDay = document.querySelectorAll(".count_1 span");
  const timerHours = document.querySelectorAll(".count_2 span");
  const timerMinutes = document.querySelectorAll(".count_3 span");
  const timerSeconds = document.querySelectorAll(".count_4 span");
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
      timerDay.forEach((day) => {
        day.textContent = "00";
      });
      timerHours.forEach((hour) => {
        hour.textContent = "00";
      });
      timerMinutes.forEach((minute) => {
        minute.textContent = "00";
      });
      timerSeconds.forEach((second) => {
        second.textContent = "00";
      });
    } else {
      timerDay.forEach((day) => {
        day.textContent = twoNumber(getTime.day);
      });
      timerHours.forEach((hour) => {
        hour.textContent = twoNumber(getTime.hours % 24);
      });
      timerMinutes.forEach((minute) => {
        minute.textContent = twoNumber(getTime.minutes);
      });
      timerSeconds.forEach((second) => {
        second.textContent = twoNumber(getTime.seconds);
      });
    }
  };
  setInterval(updateClock, 1000);
};
export default timer;
