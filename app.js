/*1. Write a JavaScript program to display the current day and time in the following format.*/
console.log('01. Day and Time');

var today = new Date();
var day = today.getDay();
var dayList = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
console.log('Today is: ' + dayList[day] + '.');

var time = new Date();
var hour = time.getHours();
var min = time.getMinutes();
var sec = time.getSeconds();
var currentTime = 'Current Time is: ' + hour + ' : ' + min + ' : ' + sec;
console.log(currentTime);

console.log('--------------------------------------------');
/**********************************************************************************************/