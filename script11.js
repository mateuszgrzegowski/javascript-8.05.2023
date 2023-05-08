//tahh i date

var math = document.getElementById("math");
var date = document.getElementById("date");

//math
var liczba = 3;
//var liczba = prompt("Podaj liczbe:" , "0");
math.innerHTML += "Liczba" + liczba + "<br>";
math.innerHTML += "Abs:" + Math.abs(liczba) + "<br>";
math.innerHTML += "Round" + Math.round(liczba) + "<br>";
math.innerHTML += "Ceil" + Math.ceil(liczba) + "<br>";
math.innerHTML += "Floor" + Math.floor(liczba) + "<br>";
math.innerHTML += "Power" + Math.pow(liczba, 3) + "<br>";
math.innerHTML += "Pi" + (Math.round(Math.PI * 1000) / 1000) +"<br>";
math.innerHTML += "Random" + (Math.floor(Math.random() *10) +1) +"<br>";

//date

date.innerHTML += "Current: " + Date() + "<br>";
var date1 = new Date(10000000);
date.innerHTML += "Date1: " + date1 + "<br>";

var date2 = new Date(1995, 2, 24 , 1, 2, 3);
date.innerHTML += "Date2: " + date2.getDate() + "." + (date2.getMonth() + 1) + "." + date2.getFullYear() + "<br>";

setTime();

function setTime()
{
    var time = new Date();
    date.innerHTML = "Czas: " + time.getHours() + "." + time.getMinutes() + "." + time.getSeconds();
}