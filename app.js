const countDownElement = document.getElementById("countDown");
const resetValueElement = document.querySelector(".resetValue");
let startCount = 0;
let intervalId;

// start button
const startTimer = () => {
  intervalId = setInterval(() => {
    const minutes = Math.floor(startCount / 6000);
    const seconds = Math.floor((startCount % 6000) / 100);
    const milliseconds = startCount % 100;

    countDownElement.innerHTML = `<span style="color: #FFFF00;">${minutes
      .toString()
      .padStart(2, "0")}</span>:<span style="color: #FFFF00;">${seconds
      .toString()
      .padStart(2, "0")}</span>:<span style="color: #FFFF00;">${milliseconds
      .toString()
      .padStart(2, "0")}</span>`;

    startCount++;
  }, 10); // 10 milliseconds for accurate milliseconds display
};

// stop button
const stopTimer = () => {
  showStopValue();
  clearInterval(intervalId);
};

// reset button
const resetTimer = () => {
  startCount = 0;
  countDownElement.innerHTML =
    '<span style="color: #FFFF00;">00</span>:<span style="color: #FFFF00;">00</span>:<span style="color: #FFFF00;">00</span>';
  clearInterval(intervalId);
};

// showtime button
const showStopValue = () => {
  const minutes = Math.floor((startCount - 1) / 6000);
  const seconds = Math.floor(((startCount - 1) % 6000) / 100);
  const milliseconds = (startCount - 1) % 100;

  const newPara = document.createElement("p");
  newPara.innerHTML = `The stop time is <span style="color: #FFFF00;">${minutes
    .toString()
    .padStart(2, "0")}</span>:<span style="color: #FFFF00;">${seconds
    .toString()
    .padStart(2, "0")}</span>:<span style="color: #FFFF00;">${milliseconds
    .toString()
    .padStart(2, "0")}</span>`;
  resetValueElement.append(newPara);
};

// cleartime button
const clearTimeValue = () => {
  resetValueElement.innerHTML = "";
};

document.querySelector(".start_btn").addEventListener("click", startTimer);
document.querySelector(".reset_btn").addEventListener("click", resetTimer);
document.querySelector(".stop_btn").addEventListener("click", stopTimer);
document.querySelector(".time_btn").addEventListener("click", showStopValue);
document.querySelector(".clear_btn").addEventListener("click", clearTimeValue);
