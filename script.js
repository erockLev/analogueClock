'use strict'

let now = new Date();

let curHour = now.getHours() <= 12 ? now.getHours() : now.getHours() - 12;
let curMinute = now.getMinutes();
let curSecond = now.getSeconds();

const hours = document.querySelector('.clock--hour');
const minutes = document.querySelector('.clock--minute');
const seconds = document.querySelector('.clock--second');

let hrsDeg = ((curHour * 30) - 90) + ((Math.trunc(curMinute / 12)) * 6);
hours.style.transform = `rotate(${hrsDeg}deg)`

function hrsRotate() {
    hrsDeg = hrsDeg + 6;
    hours.style.transform = `rotate(${hrsDeg}deg)`;
    if(hrsDeg > 354) hrsDeg = 0;
}

function hourHand() {
hrsRotate();
setInterval(hrsRotate, 720000);
}
setTimeout(hourHand, ((((12 - (curMinute % 12)) * 60) + (60 - curSecond)) * 1000) - 60000);

let minDeg = (curMinute * 6) - 90;
minutes.style.transform = `rotate(${minDeg}deg)`;

function minRotate() {
    minDeg = minDeg + 6;
    minutes.style.transform = `rotate(${minDeg}deg)`;
    if(minDeg > 354) minDeg = 0;
}

function minuteHand() {
minRotate();
setInterval(minRotate, 60000);
};
setTimeout(minuteHand, 60000 - (curSecond * 1000));

let secDeg = (curSecond * 6) - 90;
seconds.style.transform = `rotate(${secDeg}deg)`;
function secRotate() {
    secDeg = secDeg + 6;
    seconds.style.transform = `rotate(${secDeg}deg)`;
}
setInterval(secRotate, 1000);
