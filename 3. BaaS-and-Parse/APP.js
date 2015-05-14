/**
 * Created by Georgi on 12.4.2015 ã..
 */
$( document ).ready (function() {
    getCountries();
});

var Data = {};
    Data.countries = {}; Data.towns = {};
    Data.checkedCountry = {}; Data.checkedTown = {};
    Data.headers = {
        "X-Parse-Application-ID" : "2wTB9wdDfDwuqWvciSCuHI2QPOQF6clvVwfceHvG",
        "X-Parse-REST-API-Key" : "Vbo5Xoa9Ewg6sIgphRa7Z92DHvS4nP5QKfwbYGw5",
        "Content-Type" : "application/json"
    };
    Data.countryURL = "https://www.parse.com/1/classes/country/";
    Data.townURL = "https://www.parse.com/1/classes/town/";

function restAPI(method, URL, data) {
    $.ajax({
        method: method,
        headers: Data.headers,
        url: URL,
        data: data
    }).success(function(data) {
        reload();
    }).error(function (err) {
        console.log(err.responseText)
    })
}

function reload() {
    $("#countryInput").val("");
    $('#townInput').val("");
    location.reload();
}