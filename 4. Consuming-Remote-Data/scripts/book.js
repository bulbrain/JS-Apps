function getBooks() {
    Requester("GET", Data.URL);
    Data.books = Data.result.results;
    setBooks();
}

function setBooks() {
    var table = $("#booksTable");
    for(var i = 0; i < Data.books.length; i++) {
        var tableData = "<tr id='row" + [i] + "'> <td>" + Data.books[i].title +
            "</td> <td>"+Data.books[i].author+"</td> <td>"+Data.books[i].isbn+"</td> </tr>";
        Appender(table, tableData);
    }
}

function selectBook() {
    Data.selectedBook = Data.books[$("#selectedBook").val()];
    $("#titleInput").val(Data.selectedBook.title);
    $("#authorInput").val(Data.selectedBook.author);
    $("#ISBNInput").val(Data.selectedBook.isbn);
}

function createBook() {
    var data = '{ "title" : "' +  $("#titleInput").val() + '", "author" : "' +  $("#authorInput").val() +
        '", "isbn" : "' +  $("#ISBNInput").val() + '" }';
    Requester("POST", Data.URL, data);
    reload();
}

function editBook() {
    var data = '{ "title" : "' +  $("#titleInput").val() + '", "author" : "' +  $("#authorInput").val() +
        '", "isbn" : "' +  $("#ISBNInput").val() + '" }';
    Requester("PUT", Data.URL + Data.selectedBook.objectId, data);
    reload();
}

function deleteBook() {
    Requester("DELETE", Data.URL + Data.selectedBook.objectId);
    reload();
}