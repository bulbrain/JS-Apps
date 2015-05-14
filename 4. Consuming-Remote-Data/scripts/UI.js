/**
 * Created by Georgi on 15.4.2015 ã..
 */

function createBookMenu() {
    var wrapper = $("#wrapper");
    var form = "<form id='createBookForm'> <input type='text' id='titleInput' placeholder='Title...'/>" +
        "<input type='text' id='authorInput' placeholder='Author...'/>" +
        "<input type='text' id='ISBNInput' placeholder='ISBN...'/>" +
        "<input type='button' id='submit' onclick='createBook()' value='Create!'/> </form>";
    Appender(wrapper, form);
}

function editBookMenu() {
    var wrapper = $("#wrapper");
    var select = "<select id='selectedBook' onchange='selectBook()'><option disabled selected>Select a book</option>";
    for(var i = 0; i < Data.books.length; i++) {
        select += "<option value='" + i + "'>" + Data.books[i].title + "</option>";
    }
    select += "</select>";
    var form = "<form id='editBookForm'>" + select + "<input type='text' id='titleInput' placeholder='Title...'/>" +
        "<input type='text' id='authorInput' placeholder='Author...'/>" +
        "<input type='text' id='ISBNInput' placeholder='ISBN...'/>" +
        "<input type='button' id='submit' onclick='editBook()' value='Edit!'/> </form>";
    Appender(wrapper, form);
}

function deleteBookMenu() {
    var wrapper = $("#wrapper");
    var select = "<select id='selectedBook' onchange='selectBook()'><option disabled selected>Select a book</option>";
    for(var i = 0; i < Data.books.length; i++) {
        select += "<option value='" + i + "'>" + Data.books[i].title + "</option>";
    }
    select += "</select>";
    var form = "<form id='deleteBookForm'>" + select +
        "<input type='button' id='submit' onclick='deleteBook()' value='Delete!'/> </form>";
    Appender(wrapper, form);
}