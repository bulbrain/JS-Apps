var app = app || {};

app.bookDataModel = (function() {
    function BookDataModel(baseURL, requester, headers){
        this._requester = requester;
        this._headers = headers;
        this._serviceURL = baseURL + 'classes/Book/'
    }

    BookDataModel.prototype.getBooks = function () {
        var headers = this._headers.getHeaders();
        return this._requester.get(this._serviceURL, headers);
    };

    BookDataModel.prototype.addBook = function (book) {
        var headers = this._headers.getHeaders();
        return this._requester.post(this._serviceURL, headers, book);
    };

    BookDataModel.prototype.editBook = function (bookId, data) {
        var headers = this._headers.getHeaders();
        return this._requester.put(this._serviceURL + bookId, headers, data);
    };

    BookDataModel.prototype.deleteBook = function (bookId) {
        var headers = this._headers.getHeaders();

        return this._requester.delete(this._serviceURL + bookId, headers);
    };

    return {
        load: function(baseURL, requester, headers) {
            return new BookDataModel(baseURL, requester, headers);
        }
    }
}());