var app = app || {};

$( document ).ready (function() {
    (function() {
        app.router = Sammy (function() {
            var selector = "#wrapper";

            this.get('#/Gosho', function() {
                $(selector).html('<h2>Welcome Gosho!</h2>')
            });

            this.get('#/Pesho', function() {
                $(selector).html('<h2>Welcome Pesho!</h2>')
            });

            this.get('#/Ginka', function() {
                $(selector).html('<h2>Welcome Ginka!</h2>')
            });

            this.get('#/Mariika', function() {
                $(selector).html('<h2>Welcome Mariika!</h2>')
            });

        });
        app.router.run('#/');
    }());
});
