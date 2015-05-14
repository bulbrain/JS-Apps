/**
 * Created by Georgi on 5.4.2015 ã..
 */
function paint() {
    var clazz = "." + $("#class").val();
    var color = $("#color").val();
    $(clazz).css('background', color);
    $("#class").val("");
    $("#color").val("");
}