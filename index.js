class CountdownTimer {
  constructor({ selector, targetDate }) {
    // this.selector = selector;
    this.targetDate = targetDate;
  }

  intervalId = setInterval(() => {
    const time = countDownTimer.targetDate - new Date();

    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((time % (1000 * 60)) / 1000);

    document
      // .querySelector(countDownTimer.selector)
      .querySelector('[data-value="days"]').textContent = days;
    document
      // .querySelector(countDownTimer.selector)
      .querySelector('[data-value="hours"]').textContent = hours;
    document
      // .querySelector(countDownTimer.selector)
      .querySelector('[data-value="mins"]').textContent = mins;
    document
      // .querySelector(countDownTimer.selector)
      .querySelector('[data-value="secs"]').textContent = secs;

    if (time < 0) {
      clearInterval(intervalId);
    }
  }, 1000);
}

const countDownTimer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('<Mar 11, 2022'),
});
