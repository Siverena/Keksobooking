var ads = [{
    "author": {
        // "avatar": строка, адрес изображения вида img / avatars / user {{ xx }}.png, где {{ xx }} это число от 1 до 8 с ведущим нулём.Например, 01, 02 и т.д.Адреса изо бражений не повторяются
        "avatar": "img/avatars/user02.png",
    },
    "offer": {
        // "title": строка, заголовок предложения, одно из фиксированных значений
        "title": titles[0],
        // "address": строка, адрес предложения, представляет собой запись вида "{{location.x}}, {{location.y}}",например, "600, 350"
        "address": "600, 350",
        // "price": число, случайная цена от 1000 до 1000000
        "price": randomInteger(1000, 1000000),
        // "type": строка с одним из четырёх фиксированных значений: palace, flat, ho use или bungalo 
        "type": types[3],
        // "rooms": число, случайное количество комнат от 1 до 5
        "rooms": randomInteger(1, 5),
        // "guests": число, случайное количество гостей, которое можно разместить 
        "guests": Math.floor(Math.random()),
        // "checkin": строка с одним из трёх фиксированных значений: 12:00, 13:00 или 14:00
        "checkin": times[0],
        // "checkout": строка с одним из трёх фиксированных значений: 12:00, 13:00 или 14:00 
        "checkout": times[2],
        // "features": массив строк случайной длины из ниже предложенных: "wifi", "dishwasher", "parking", "washer", "elevator", "conditioner"
        "features": features,
        // "description": пустая строка
        "description": " ",
        // "photos": массив из строк "http://o0.github.io/assets/images/tokyo/hotel1.jpg", "http://o0.github.io/assets/images/tokyo/hotel2.jpg" и "http://o0.github.io/assets/images/tokyo/hotel3.jpg" расположенных в произвольном порядке
        "photos": photos,
    },
    "location": {
        // «x»: случайное число, координата x метки на карте. Значение ограничено размерами блока, в котором перетаскивается метка. 
        "x": randomInteger(0, document.querySelector(".map").clientWidth),
        // «y»: случайное число, координата y метки на карте от 130 до 630
        "y": randomInteger(130, 630),
    }
}];