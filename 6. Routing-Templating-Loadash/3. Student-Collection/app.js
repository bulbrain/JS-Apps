$( document ).ready (function() {
    render(students);
});

function render(datas) {
    $.ajax({
        type: 'GET',
        url: 'templates/table.html',
        dataType: 'text',
        success: function (data) {
            $('#wrapper').html(Mustache.render(data, datas));
        }
    });
}

var students = { "students": [{"gender":"Male","firstName":"Joe","lastName":"Riley","age":22,"country":"Russia"},
    {"gender":"Female","firstName":"Lois","lastName":"Morgan","age":41,"country":"Bulgaria"},
    {"gender":"Male","firstName":"Roy","lastName":"Wood","age":33,"country":"Russia"},
    {"gender":"Female","firstName":"Diana","lastName":"Freeman","age":40,"country":"Argentina"},
    {"gender":"Female","firstName":"Bonnie","lastName":"Hunter","age":23,"country":"Bulgaria"},
    {"gender":"Male","firstName":"Joe","lastName":"Young","age":16,"country":"Bulgaria"},
    {"gender":"Female","firstName":"Kathryn","lastName":"Murray","age":22,"country":"Indonesia"},
    {"gender":"Male","firstName":"Dennis","lastName":"Woods","age":37,"country":"Bulgaria"},
    {"gender":"Male","firstName":"Billy","lastName":"Patterson","age":24,"country":"Bulgaria"},
    {"gender":"Male","firstName":"Willie","lastName":"Gray","age":42,"country":"China"},
    {"gender":"Male","firstName":"Justin","lastName":"Lawson","age":38,"country":"Bulgaria"},
    {"gender":"Male","firstName":"Ryan","lastName":"Foster","age":24,"country":"Indonesia"},
    {"gender":"Male","firstName":"Eugene","lastName":"Morris","age":37,"country":"Bulgaria"},
    {"gender":"Male","firstName":"Eugene","lastName":"Rivera","age":45,"country":"Philippines"},
    {"gender":"Female","firstName":"Kathleen","lastName":"Hunter","age":28,"country":"Bulgaria"}]};

var between18and24 = {}, nameBeforeLastName = {}, fromBulgaria = {}, lastFive = {}, firstNotBulgarianMales = {};

between18and24.students = _.filter(students.students, function(element) {
    return (element.age > 18 && element.age < 24);
});

nameBeforeLastName.students = _.filter(students.students, function(element) {
    return (element.firstName < element.lastName);
});

fromBulgaria.students = _.where(students.students, { country: "Bulgaria" } );

lastFive.students = _.at(students.students, [10, 11, 12, 13, 14]);

firstNotBulgarianMales.students = _.filter(students.students, function(element) {
    return (element.country != "Bulgaria" && element.gender == "Male");
});
firstNotBulgarianMales.students = _.at(firstNotBulgarianMales.students, [0, 1, 2]);