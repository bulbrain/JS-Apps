/**
 * Created by Georgi on 9.4.2015 ã..
 */
var name = localStorage.naMe;
if (!sessionStorage.counter) {
    sessionStorage.setItem('counter', 0);
}

var currentCount = parseInt(sessionStorage.getItem('counter'));
currentCount += 1;
sessionStorage.setItem('counter', currentCount);
document.getElementById('countDiv').innerHTML = "Session visits: " + currentCount;

if (!localStorage.counter) {
    localStorage.setItem('counter', 0);
}

var totalCount = parseInt(localStorage.getItem('counter'));
totalCount += 1;
localStorage.setItem('counter', totalCount);
document.getElementById('totalVisitCount').innerHTML = "Total visits: " + totalCount;

if(name) {
    document.getElementById("nameForm").style.display = 'none';
    document.getElementById("greeting").innerHTML += " " + name;
}

function setName() {
    localStorage.naMe = document.getElementById("naMe").value;
    sesionStorage.count ++;
}