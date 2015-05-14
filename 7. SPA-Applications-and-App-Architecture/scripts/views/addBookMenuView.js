var app = app || {};

app.addBookMenuView = (function() {
    function render(controller, selector) {
        $('#deleteBookForm').remove();
        $('#editBookForm').remove();
        $('#addBookForm').remove();
        $.ajax({
            type: 'GET',
            url: 'templates/addBookMenu.html',
            dataType: 'text',
            success: function (template) {
                $(selector).append(template);
            }
        })
        .then(function () {
            $('#submit').click(function () {
                var bookTitle = $('#title').val();
                var bookAuthor = $('#author').val();
                var bookISBN = $('#isbn').val();
                controller.addBook('#books', bookTitle, bookAuthor, bookISBN);
                controller.loadBooks(selector);
            })
        })
    }

    return {
        render: function (controller, selector) {
            render(controller, selector)
        }
    }
}());