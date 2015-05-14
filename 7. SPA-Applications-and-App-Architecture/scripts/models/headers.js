var app = app || {};

app.headers = (function() {
    function Headers(applicationId, restAPIKey) {
        this.appId = applicationId;
        this.restAPIKey = restAPIKey;
    }

    Headers.prototype.getHeaders = function() {
        var headers = {
            'X-Parse-Application-Id': this.appId,
            'X-Parse-REST-API-Key': this.restAPIKey,
            'Content-Type': 'application/json'
        };
        return headers;
    };
    return {
        load: function(applicationId, restAPIKey) {
            return new Headers(applicationId, restAPIKey);
        }
    }
}());