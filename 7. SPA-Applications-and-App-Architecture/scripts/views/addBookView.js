var app = app || {};

app.addBookView = (function() {
    function renderBook(selector, data) {
        $.ajax({
            type: 'GET',
            url: 'templates/addBook.html',
            dataType: 'text',
            success: function (template) {
                $(selector).append(Mustache.render(template, data));
            }
        })
        .then(function () {
            $('#title').val('');
            $('#author').val('');
            $('#isbn').val('');
        })
    }

    return {
        render: function (selector, data) {
            renderBook(selector, data)
        }
    }
}());