var app = app || {};

app.editBookView = (function() {
    function render(controller, selector, data) {
        $('#deleteBookForm').remove();
        $('#editBookForm').remove();
        $('#addBookForm').remove();
        $.ajax({
            type: 'GET',
            url: 'templates/editBookMenu.html',
            dataType: 'text',
            success: function (template) {
                $(selector).append(Mustache.render(template, data));
            }
        })
            .then(function () {
                $('#submit').click(function () {
                    var bookTitle = $('#title').val();
                    var bookAuthor = $('#author').val();
                    var bookISBN = $('#isbn').val();
                    var bookId = $('#selected').children(":selected").attr("id");
                    $('#'+bookId).html('<td>' + bookTitle + '</td><td>'+ bookAuthor +'</td><td>' + bookISBN + '</td>');
                    controller.editBook(selector, bookId, bookTitle, bookAuthor, bookISBN)
                })
            })
    }

    return {
        render: function (controller, selector, data) {
            render(controller, selector, data)
        }
    }
}());