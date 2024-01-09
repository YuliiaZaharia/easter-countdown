function easterCountdown() {
    const easterDate = new Date("March 31, 2024 00:00");
    const now = new Date();
    const diff = easterDate - now;

    const msInSecond = 1000;
    const msInMinute = 60 * 1000;
    const msInHour = 60 * 60 * 1000;
    const msInDay = 24 * 60 * 60 * 1000;

    const displayDay = Math.floor(diff/msInDay);
    document.querySelector(".days").textContent = displayDay;

    const displayHour = Math.floor((diff%msInDay) / msInHour); 
    document.querySelector(".hours").textContent = displayHour;

    const displayMinute = Math.floor((diff%msInHour) / msInMinute); 
    document.querySelector(".minutes").textContent = displayMinute; 

    const displaySecond = Math.floor((diff%msInMinute) / msInSecond);
    document.querySelector(".seconds").textContent = displaySecond; 

    if (diff <= 0) {
        document.querySelector(".days").textContent = 0;
        document.querySelector(".hours").textContent = 0;
        document.querySelector(".minutes").textContent = 0;
        document.querySelector(".seconds").textContent = 0;
        clearInterval(timerID);
        merryChristmas();
    }
}

let timerID = setInterval(easterCountdown, 1000);

function merryChristmas() {
    const heading = document.querySelector("h1");
    heading.textContent = "Wish you a Happy Easter!"; 
    heading.classList.add("red"); 
}

const button = document.querySelector("#myButton");
button.addEventListener("click", function() {
document.querySelector("#myAudio").play();
})

gsap.from('.heading', {
    duration: 1.5,
    opacity: 0,
    y: 50,
    stagger: 0.1,
    ease: 'power4.out',
  });

  gsap.to('h1', {
    duration: 3,
    delay: 1.5,
    color: '#FFE5E5',
    repeat: -1,
    yoyo: true,
    ease: 'elastic.out(1, 0.3)',
  });

let isRotated = false;

document.querySelector('#myButton').addEventListener('click', () => {
  isRotated = !isRotated;
  gsap.to('#myButton', {
    duration: 0.5,
    rotate: isRotated ? 360 : 0,
    ease: 'power2.out',
  });
});

gsap.fromTo('.days, .hours, .minutes, .seconds', {y: -100 }, { y: 0, delay: .5, duration: 4, ease: 'bounce'});
