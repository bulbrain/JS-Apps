/**
 * Created by Georgi on 13.4.2015 ã..
 */
function getTowns() {
    var countryID = Data.checkedCountry.objectId;
    $.ajax({
        method: "GET",
        headers: Data.headers,
        url: Data.townURL + '?where={"country":{"__type":"Pointer","className":"country","objectId":"' +
        countryID + '"}}'
    }).success(function(data) {
        var count = 0;
        for (var i = 0; i < data.results.length; i++) {
            Data.towns[i] = data.results[i];
            count++
        }
        Data.towns.length = count;
        setTowns();
    }).error(function (err) {
        console.log(err.responseText)
    })
}

function setTowns() {
    var townTableDiv = $("#townTableDiv");
    var townFormDiv = $("#townFormDiv");
    var townTable = '<table id="townTable"> <tr><th>Towns</th></tr>';
    townTableDiv.append(townTable);
    var townsTable = $("#townTable");
    for (var i = 0; i < Data.towns.length; i++) {
        var tableData = '<tr><td><input type="checkbox" id="town' + [i] +
            '" onclick="selectedTown(' + [i] + ')">' + Data.towns[i].name + '</td></tr>';
        townsTable.append(tableData);
    }
    var form = '<form id="townForm"><input type="text" id="townInput"><br>' +
        '<input type="button" value="Add" onclick="addTown()"/>'+
        '<input type="button" value="Edit" onclick="editTown()"/><br>'+
        '<input type="button" value="Delete" onclick="deleteTown()"/></form>';
    townFormDiv.append(form);
}

function selectedTown(townNum) {
    Data.checkedTown = Data.towns[townNum];
    if($("#town"+townNum)[0].checked) {
        $("#townInput").val(Data.checkedTown.name);
    } else {
        $("#townInput").val("");
    }
}

function addTown() {
    var countryID = Data.checkedCountry.objectId;
    var data = '{ "country": { "__type": "Pointer", "className": "country", "objectId": "' + countryID + '"}, "name" : "' +
        $('#townInput').val() + '" }';
    restAPI("POST", Data.townURL, data);
}

function editTown() {
    var townID = Data.checkedTown.objectId;
    var data = '{ "name" : "' + $('#townInput').val() + '" }';
    restAPI("PUT", Data.townURL + townID, data);
}

function deleteTown() {
    var townID = Data.checkedTown.objectId;
    restAPI("DELETE", Data.townURL + townID);
}