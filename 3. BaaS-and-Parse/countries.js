/**
 * Created by Georgi on 13.4.2015 ã..
 */
function getCountries() {
    $.ajax({
        method: "GET",
        headers: Data.headers,
        url: Data.countryURL
    }).success(function(countries) {
        var count = 0;
        for (var i = 0; i < countries.results.length; i++) {
            Data.countries[i] = countries.results[i];
            count++;
        }
        Data.countries.length = count;
        setCountries(Data.countries);
    }).error(function (err) {
        console.log(err.responseText)
    })
}

function setCountries(countriesNames) {
    var countryTableDiv = $("#countryTableDiv");
    var countryFormDiv = $("#countryFormDiv");
    var countryTable = '<table id="countryTable"> <tr><th>Countries:</th></tr>';
    countryTableDiv.append(countryTable);
    var countriesTable = $("#countryTable");
    for (var i = 0; i < Data.countries.length; i++) {
        var tableData = '<tr><td><input type="checkbox" id="' + [i] +
            '" onclick="selectedCountry(' + [i] + ')">' + Data.countries[i].name + '</td></tr>';
        countriesTable.append(tableData);
    }
    var countriesForm = '<form id="countriesForm"><input type="text" id="countryInput"><br>' +
        '<input type="button" value="Add" onclick="addCountry()"/>'+
        '<input type="button" value="Edit" onclick="editCountry()"/><br>'+
        '<input type="button" value="Delete" onclick="deleteCountry()"/></form>';
    countryFormDiv.append(countriesForm);
}

function selectedCountry(countryNum) {
    Data.checkedCountry = Data.countries[countryNum];
    if($("#townTable")) {
        $("#townTable").remove();
        $("#townForm").remove();
    }
    if($("#"+countryNum)[0].checked) {
        $("#countryInput").val(Data.checkedCountry.name);
        getTowns();
    } else {
        $("#countryInput").val("");
        $("#townTable").remove();
        $("#townForm").remove();
    }
}

function addCountry() {
    var data = '{ "name" : "' + $('#countryInput').val() + '" }';
    restAPI("POST", Data.countryURL, data);
}

function editCountry() {
    var countryID = Data.checkedCountry.objectId;
    var data = '{ "name" : "' + $('#countryInput').val() + '" }';
    restAPI("PUT", Data.countryURL + countryID, data);
}

function deleteCountry() {
    var countryID = Data.checkedCountry.objectId;
    restAPI("DELETE", Data.countryURL + countryID);
}