var app = app || {};

app.deleteBookView = (function() {
    function render(controller, selector, data) {
        $('#deleteBookForm').remove();
        $('#editBookForm').remove();
        $('#addBookForm').remove();
        var bookId;
        $.ajax({
            type: 'GET',
            url: 'templates/deleteBookMenu.html',
            dataType: 'text',
            success: function (template) {
                $(selector).append(Mustache.render(template, data));
            }
        })
            .then(function () {
                $('#submit').click(function () {
                    bookId = $('#selected').children(":selected").attr("id");
                    controller.deleteBook(selector, bookId);
                    $('#' + bookId).remove();
                })
            })
    }

    return {
        render: function (controller, selector, data) {
            render(controller, selector, data)
        }
    }
}());