/* 01. Write a JavaScript program to display the current day and time in the following format.*/
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


/* 02. Write a JavaScript program to get the current date. */

var date = new Date();

document.getElementById('date').innerHTML = date;


/* 03. Write a JavaScript program to find the area of a triangle where lengths of the three of its sides are 5, 6, 7. */
console.log('03. Triangle Area');

var side1 = 5;
var side2 = 6;
var side3 = 7;
var sides = (side1 + side2 + side3)/2;

var area = Math.sqrt(sides * ((sides - side1) * (sides - side2) * (sides - side3)));
console.log(area);
console.log('--------------------------------------------');


/* 04. Write a JavaScript program to rotate the string 'w3resource' in right direction by periodically removing one letter from the end of the string and attaching it to the front. */
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
