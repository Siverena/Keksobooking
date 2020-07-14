"use strict";
(function() {

    var titles = ["Большая уютная квартира", "Маленькая неуютная квартира", "Огромный прекрасный дворец", "Маленький ужасный дворец", "Красивый гостевой домик", "Некрасивый негостеприимный домик", "Уютное бунгало далеко от моря", "Неуютное бунгало по колено в воде"];

    // var types2 = {
    //     'palace': "Дворец",
    //     'flat': "Квартира",
    //     'house': "Дом",
    //     'bungalo': "Бунгало"
    // };


    // console.log(types2);

    var types = ['palace', 'flat', 'house', 'bungalo'];
    var times = ['12:00', '13:00', '14:00'];
    var featuresTmp = ["wifi", "dishwasher", "parking", "washer", "elevator", "conditioner"];
    var photosTmp = ["http://o0.github.io/assets/images/tokyo/hotel1.jpg", "http://o0.github.io/assets/images/tokyo/hotel2.jpg", "http://o0.github.io/assets/images/tokyo/hotel3.jpg"];


    var ads = [];

    for (var i = 0; i < 8; i++) {

        ads[i] = {
            "author": {
                "avatar": "img/avatars/user0" + (i + 1) + ".png",
            },
            "offer": {
                "title": window.general.randomItem(titles),
                "address": "600, 350",
                "price": window.general.randomInteger(1000, 1000000),
                "type": window.general.randomItem(types), //не доделано
                "rooms": window.general.randomInteger(1, 5),
                "guests": Math.floor(Math.random() * 100),
                "checkin": window.general.randomItem(times),
                "checkout": window.general.randomItem(times),
                "features": window.general.stringGenerate(featuresTmp, '<li class="feature feature--', '"></li>', window.general.randomInteger(1, featuresTmp.length)),
                "data": i,
                "description": " ",
                "photos": window.general.stringGenerate(photosTmp, '<li><img src="', '"  width="40" height="40" draggable="false"></li>'),
            },
            "location": {
                "x": window.general.randomInteger(0, document.querySelector(".map").clientWidth) + 24,
                "y": window.general.randomInteger(130, 630) + 64,
            }
        };

    }


})();