/* 01. Write a JavaScript program to display the current day and time in the following format */
console.log('01. Day and Time');

var today = new Date();
var day = today.getDay();
var dayList = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
var currentDay = 'Today is: ' + dayList[day] + '.'
console.log(currentDay);

var time = new Date();
var hour = time.getHours();
var min = time.getMinutes();
var sec = time.getSeconds();
var currentTime = 'Current Time is: ' + hour + ' : ' + min + ' : ' + sec;
console.log(currentTime);
document.getElementById('today').innerHTML = currentDay + ' ' + currentTime;

console.log('--------------------------------------------');




/* 02. Write a JavaScript program to get the current date */
console.log('02. Current Date');

var date = new Date();
document.getElementById('date').innerHTML = date;

console.log('--------------------------------------------');




/* 03. Write a JavaScript program to find the area of a triangle where lengths of the three of its sides are 5, 6, 7 */
console.log('03. Triangle Area');

var side1 = 5;
var side2 = 6;
var side3 = 7;
var sides = (side1 + side2 + side3)/2;
var area = Math.sqrt(sides * ((sides - side1) * (sides - side2) * (sides - side3)));
console.log(area);

console.log('--------------------------------------------');




/* 04. Write a JavaScript program to rotate the string 'w3resource' in right direction by periodically removing one letter from the end of the string and attaching it to the front */
console.log('04. Rotate String');

function animate_string(rotate) 
{
    var element = document.getElementById('rotate');
    var textNode = element.childNodes[0]; // assuming no other children
    var text = textNode.data;

setInterval(function () 
{
 text = text[text.length - 1] + text.substring(0, text.length - 1);
  textNode.data = text;
}, 100);
}

console.log('--------------------------------------------');




/* 05. Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar */
console.log('05. Determine Whether a Given Year is a Leap Year');

function leapyear(year) {
  return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
}

console.log(leapyear(2012));
console.log(leapyear(2004));
console.log(leapyear(1708));
console.log(leapyear(1803));

console.log('--------------------------------------------');




/* 06. Write a JavaScript program to find 1st January is being a Sunday between 2014 and 2050 */
console.log('--------------------------------------------');

for (var year = 2014; year <= 2050; year++) {

    var day = new Date(year, 0, 1);
    if ( day.getDay() === 0 ) {
        console.log("1st January is being a Sunday  " + year);
    }
}

console.log('--------------------------------------------');




/* 07. Write a JavaScript program where the program takes a random integer between 1 to 10, the user is then prompted to input a guess number. If the user input matches with guess number, the program will display a message "Good Work" otherwise display a message "Not matched" */
console.log('--------------------------------------------');

