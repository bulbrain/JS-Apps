var app = app || {};

app.menuView = (function() {
    function render(controller, selector, data) {
        $.ajax({
            type: 'GET',
            url: 'templates/menu.html',
            dataType: 'text',
            success: function (template) {
                $(selector).append(template);
            }
        })
        .then(function () {
            $('#addBook').click(function () {
                app.addBookMenuView.render(controller, selector);
            });
            $('#editBook').click(function () {
                app.editBookView.render(controller, selector, data);
            });
            $('#deleteBook').click(function () {
                app.deleteBookView.render(controller, selector, data);
            })
        });
    }

    return {
        render: function (controller, selector, data) {
            render(controller, selector, data)
        }
    }
}());