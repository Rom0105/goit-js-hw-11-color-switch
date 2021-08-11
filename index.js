const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548",
];

const startBtn = document.querySelector('button[data-action="start"]');
const stoptBtn = document.querySelector('button[data-action="stop"]');
const body = document.querySelector("body");

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const timer = {
  isActive: false,
  start() {
    if (this.isActive) {
      return;
    }

    this.isActive = true;
    this.switchColors = setInterval(() => {
      const min = 0;
      const max = colors.length - 1;
      let i = randomIntegerFromInterval(min, max);
      body.style.backgroundColor = colors[i];
    }, 1000);
  },
  stop() {
    clearInterval(this.switchColors);
    this.isActive = false;
  },
};

startBtn.addEventListener("click", timer.start.bind(timer));
stoptBtn.addEventListener("click", timer.stop.bind(timer));
