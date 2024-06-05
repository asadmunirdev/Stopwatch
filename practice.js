const countDownElement = document.getElementById("countDown");
const resetValueElement = document.querySelector(".resetValue");
let startCount = 0;
let intervalId;

// start button
const startTimer = () => {
  intervalId = setInterval(() => {
    countDownElement.innerText = startCount++;
  }, 1000);
};

// stop button
const stopTimer = () => {
  showStopValue();
  clearInterval(intervalId);
};

// reset button
const resetTimer = () => {
  startCount = 0;
  countDownElement.innerText = startCount;
  clearInterval(intervalId);
};

// showtime button
const showStopValue = () => {
  const newPara = document.createElement("p");
  newPara.innerText = `the stop time is ${startCount - 1}`;
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
