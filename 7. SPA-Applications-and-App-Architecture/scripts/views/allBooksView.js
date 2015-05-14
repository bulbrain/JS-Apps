var app = app || {};

app.allBooksView = (function() {
    function render(controller, selector, data) {
        $.ajax({
            type: 'GET',
            url: 'templates/allBooks.html',
            dataType: 'text',
            success: function (template) {
                $(selector).html(Mustache.render(template, data));
            }
        })
            .then(function () {
                app.menuView.render(controller, selector, data);
            });
    }

    return {
        render: function (controller, selector, data) {
            render(controller, selector, data)
        }
    }
}());