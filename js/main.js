// Progress Scroller

let scroller = document.querySelector(".scroller");

let height =
  document.documentElement.scrollHeight - document.documentElement.clientHeight;

window.addEventListener("scroll", () => {
  let scrollTop = document.documentElement.scrollTop;
  scroller.style.width = `${(scrollTop / height) * 100}%`;
});

// Skills Smooth Fill + Percentage counting
let mySkills = document.getElementById("my-skills");

let fillerSpans = document.querySelectorAll(".filler");
let percentageSpans = document.querySelectorAll(".percentage");

// Stats Counting
let stats = document.querySelector(".stats");
let statsNumbers = document.querySelectorAll(".stats .number");

// Stoping The Counting from Running with every scoll
let skillsStarted = false;
let statsStarted = false;

// Scrolling function

window.onscroll = function () {
  if (window.scrollY >= mySkills.offsetTop - 250) {
    fillerSpans.forEach((span) => {
      span.style.width = span.dataset.width;
    });
    if (!skillsStarted) {
      countingOnscroll(percentageSpans, true);
      skillsStarted = true;
    }
  }
  if (window.scrollY >= stats.offsetTop - 250 && !statsStarted) {
    countingOnscroll(statsNumbers);
    statsStarted = true;
  }
};

function countingOnscroll(arr, isPercentage) {
  arr.forEach((e) => {
    let current = 0;
    let target = parseInt(e.dataset.number);
    const interval = setInterval(() => {
      if (current < target) {
        current++;
        e.innerHTML = isPercentage ? current + "%" : current;
      } else {
        clearInterval(interval);
      }
    }, 10);
  });
}

// The end of the year
let countDownDate = new Date("Dec 31,2027 23:59:59").getTime();
let counter = setInterval(() => {
  //get date now
  let dateNow = new Date().getTime();
  // find the differance between Now & Countdown Date
  let differance = countDownDate - dateNow;
  // get time units
  let days = Math.floor(differance / (1000 * 60 * 60 * 24));
  let hours = Math.floor(
    (differance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  let minutes = Math.floor((differance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((differance % (1000 * 60)) / 1000);
  document.querySelector(".days-span").innerHTML =
    days < 10 ? `0${days}` : days;
  document.querySelector(".hours-span").innerHTML =
    hours < 10 ? `0${hours}` : hours;
  document.querySelector(".minutes-span").innerHTML =
    minutes < 10 ? `0${minutes}` : minutes;
  document.querySelector(".seconds-span").innerHTML =
    seconds < 10 ? `0${seconds}` : seconds;
  if (differance == 0) {
    clearInterval(counter);
  }
}, 1000);
