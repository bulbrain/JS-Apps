/**
 * Created by Georgi on 9.4.2015 ã..
 */
function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            submitAnswers()
        }
    }, 1000);
}

window.onload = function () {
    var fiveMinutes = 60 * 1,
        display = document.querySelector('#time');
    startTimer(fiveMinutes, display);
};

function saveName() {
    localStorage.naMe = document.getElementById("naMe").value;
}

function saveGender() {
    localStorage.gender = document.getElementById("gender").value;
}

function saveVehicle() {
    localStorage.vehicle = document.getElementById("vehicle").value;
}

function savePet() {
    localStorage.pet = document.getElementById("pet").value;
}



if (localStorage.pet && localStorage.vehicle && localStorage.gender && localStorage.naMe) {
    document.getElementById("timer").style.display = 'none';
    document.getElementById("forn").style.display = 'none';
    document.getElementById("answers").innerHTML = "Your answers: " + localStorage.naMe + " " + localStorage.gender + " " + localStorage.vehicle + " " + localStorage.pet;
}

function submitAnswers() {
    location.reload();
}