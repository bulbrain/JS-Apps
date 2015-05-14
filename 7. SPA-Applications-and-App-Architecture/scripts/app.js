var app = app || {};

(function() {
    var appId = 'mR41kuB200PeYZFNpj7Qklm6PtbR5Ubw1mmMUgeb';
    var restAPIKey = 'Fs1VnWN5YBu6bTbDwPKkVOCFlcap1lUZscOPazj8';

    var headers = app.headers.load(appId, restAPIKey);
    var requester = app.requester.load();
    var model = app.bookDataModel.load('https://api.parse.com/1/', requester, headers);
    var controller = app.booksController.load(model);

    app.router = Sammy(function () {
        var selector = '#app';

        this.get('#/books', function() {
            controller.loadBooks(selector);
        });
    });

    app.router.run('#/books');
}());