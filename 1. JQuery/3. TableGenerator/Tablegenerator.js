/**
 * Created by Georgi on 5.4.2015 ã..
 */
function generateTable() {
    var text = $("#textarea").val();
    var obj = $.parseJSON(text);
    var keys = [];
    for(var k in obj[0]) {
        keys.push(k);
    }
    $('#wrapper').append('<table id = "table">');
    for(var i = 0; i < keys.length; i++) {
        var th = $('<th>' + keys[i] + '</th>');
        th.appendTo('#table')
    }
    for(var j = 0; j < obj.length; j++) {
        var tr = '<tr>';
        for(var k in obj[j]) {
            tr += '<td>' + obj[j][k] + '</td>';
        }
        tr += '</tr>';
        $(tr).appendTo('#table');
    }
}