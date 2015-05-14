var app = app || {};

app.booksController = (function() {
    function BooksController(model) {
        this._model = model;
    }

    BooksController.prototype.loadBooks = function (selector) {
        var _this = this;
        this._model.getBooks()
            .then(function (booksData) {
                var outputData = {
                    books: booksData.results
                };
                app.allBooksView.render(_this, selector, outputData);
            }, function (error) {
                console.log(error.responseText);
            }
        )
    };

    BooksController.prototype.addBook = function (selector, title, author, ISBN) {
        var book = {
            title: title,
            author: author,
            isbn: ISBN
        };

        this._model.addBook(book)
            .then(function () {
                app.addBookView.render(selector, book);
            }, function (error) {
                console.log(error)
            })
    };

    BooksController.prototype.deleteBook = function (selector, bookId) {
        this._model.deleteBook(bookId);
    };

    BooksController.prototype.editBook = function (selector, bookId, bookTitle, bookAuthor, bookISBN) {
        var book = {
                title: bookTitle,
                author: bookAuthor,
                isbn: bookISBN
            };
        this._model.editBook(bookId, book);
    };

    return {
        load: function (model) {
            return new BooksController(model);
        }
    }
}());