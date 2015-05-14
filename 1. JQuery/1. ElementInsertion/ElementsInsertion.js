/**
 * Created by Georgi on 5.4.2015 ã..
 */
function insertElement() {
    var text = $("#text").val();
    var place = $('input[name=place]:checked').val();
    var selectedItem = "#" + $("#selection").val();
    if(place == "before") {
        $('<div>' + text + '</div>').prependTo(selectedItem);
    } if(place == "after") {
        $('<div>' + text + '</div>').appendTo(selectedItem);
    }
    $("#text").val("");
    $('input[name=place]').prop('checked', false);
}