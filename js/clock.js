const secondElement = document.querySelector(`.second-hand`);
const minuteElement = document.querySelector(`.minute-hand`);
const hourElement = document.querySelector(`.hour-hand`);

setInterval(() => {
    const date = new Date;
    const secondDegree = date.getSeconds() / 60 * 360 -90;
    const minuteDegree = date.getMinutes() / 60 * 360 -90;
    const hourDegree = date.getHours() / 12 * 360 -90;
    secondElement.style.transform = `rotate(${secondDegree}deg)`;
    minuteElement.style.transform = `rotate(${minuteDegree}deg)`;
    hourElement.style.transform = `rotate(${hourDegree}deg)`;
}, 1000);







