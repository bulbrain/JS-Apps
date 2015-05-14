$( document ).ready (function(){
    getBooks();
});
var Data = {};
Data.URL = "https://api.parse.com/1/classes/Book/";

function Requester(method, URL, data) {
    $.ajax({
        method: method,
        headers: {
            "X-Parse-Application-ID" : "mR41kuB200PeYZFNpj7Qklm6PtbR5Ubw1mmMUgeb",
            "X-Parse-REST-API-Key" : "Fs1VnWN5YBu6bTbDwPKkVOCFlcap1lUZscOPazj8",
            "Content-Type" : "application/json"
        },
        async: false,
        url: URL,
        data: data
    }).success(function(data) {
        Data.result = data;
    }).error(function (err) {
        console.log(err.responseText)
    })
}

function Appender(parent, child) {
    $("#editBookForm").remove();
    $("#deleteBookForm").remove();
    $("#createBookForm").remove();
    parent.append(child);
}

function reload() {
    location.reload()
}