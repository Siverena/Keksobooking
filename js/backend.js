"use strict";
(function() {
    var URL_POST = "https://js.dump.academy/keksobooking";
    var URL_GET = "https://js.dump.academy/keksobooking/data";

    var Code = {
        SUCCESS: 200,
        CACHED: 302,
        NOT_FROUND_ERROR: 404,
        SERVER_ERROR: 500
    };

    var save = function(data, onSuccess) {
        var xhr = new XMLHttpRequest();
        xhr.responseType = 'json';
        xhr.addEventListener("load", function() {
            onSuccess(xhr.response);
        });
        xhr.open('POST', URL_POST);
        xhr.send(data);
    };

    var load = function(onSuccess) {
        var xhr = new XMLHttpRequest();
        xhr.responseType = 'json';
        xhr.open('GET', URL_GET);
        ///доработать обработку плохих событий из 6-го урока
        xhr.addEventListener("load", function() {
            onSuccess(xhr.response);
        });
        xhr.send();
    };

    window.backend = {
        load: load,
        save: save
    };

})();