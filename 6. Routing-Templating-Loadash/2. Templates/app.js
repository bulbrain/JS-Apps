$( document ).ready (function() {
    $.ajax({
        type: 'GET',
        url: 'templates/table.html',
        dataType: 'text',
        success: function (data) {
            $('#wrapper').html(Mustache.render(data, users));
        }
    });
});

var users = { "users": [
    { "name": "Garry Flinch",
        "job": "Front End Technical Leed",
        "website": "http://website.com"
    },
    { "name": "Bob McFrey",
        "job": "Photographer",
        "website": "http://goo.gle"
    },
    { "name": "Jenny O'Sullivan",
        "job": "LEGO Geek",
        "website": "http://stackoverflow.com"
    }
]};