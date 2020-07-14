"use strict";
(function() {
    var form = document.querySelector(".notice__form");
    var allInputs = document.querySelectorAll(".form__element");
    var roomNumber = document.querySelector('#room_number');
    var capacity = document.querySelector('#capacity');
    var capacytyOptions = document.querySelectorAll('#capacity option');
    var inputAddress = document.querySelector("input#address");
    var startPin = document.querySelector(".map__pin--main");
    var timeIn = document.querySelector("#timein");
    var timeOut = document.querySelector("#timeout");
    var arrowHeight = 22;
    var addressValue = (startPin.offsetLeft - startPin.clientWidth / 2) + ", " + (startPin.offsetTop - startPin.clientHeight - arrowHeight);


    //Установить координаты в поле адрес:
    var setCoord = function() {
        inputAddress.setAttribute("value", (1200 / 2 - startPin.clientWidth / 2) + ", " + (750 / 2 - startPin.clientHeight / 2));
    }

    var changeDisabled = function() {
        if (form.classList.contains("notice__form--disabled")) {
            allInputs.forEach(element => {
                element.setAttribute("disabled", '');
            });
        } else {
            allInputs.forEach(element => {
                element.removeAttribute("disabled", '');
            });
        }
    }

    var validRooms = function() {
        var valueRooms = roomNumber.querySelector('option:checked').getAttribute("value");
        var valueGuests = capacity.querySelector('option:checked').getAttribute("value");
        capacity.setCustomValidity("");
        for (var i = 0; i < capacytyOptions.length; i++) {
            //Гости 1-1, 2-2, 3-3, 0-не для гостей
            capacytyOptions[i].removeAttribute("disabled");

            //1 комната для 1 гостя - заблочить 0 и 2, 3
            if (valueRooms == 1) {
                if (capacytyOptions[i].getAttribute("value") != 1) {
                    capacytyOptions[i].setAttribute("disabled", "");
                }
                if (valueGuests != 1) {
                    capacity.setCustomValidity("Недопустимое количество гостей для " + valueRooms + " комнат(ы)");
                }
            }
            //2 комнаты для 1 или 2 гостей - заблочить 0 и 3
            if (valueRooms == 2) {
                if (capacytyOptions[i].getAttribute("value") > 2 || capacytyOptions[i].getAttribute("value") < 1) {
                    capacytyOptions[i].setAttribute("disabled", "");
                }
                if (valueGuests > 2 || valueGuests < 1) {
                    capacity.setCustomValidity("Недопустимое количество гостей для " + valueRooms + " комнат(ы)");
                }
            }
            //3 комнаты для 1, 2 или 3-х гостей  - заблочить 0
            if (valueRooms == 3) {
                if (capacytyOptions[i].getAttribute("value") == 0) {
                    capacytyOptions[i].setAttribute("disabled", "");
                }
                if (valueGuests == 0) {
                    capacity.setCustomValidity("Недопустимое количество гостей для " + valueRooms + " комнат(ы)");
                }
            }
            //100комнат не для гостей  - заблочить 1,2,3
            if (valueRooms == 100) {
                if (capacytyOptions[i].getAttribute("value") > 0) {
                    capacytyOptions[i].setAttribute("disabled", "");
                }
                if (valueGuests > 0) {
                    capacity.setCustomValidity("Недопустимое количество гостей для " + valueRooms + " комнат(ы)");
                }
            }
        }
    };

    //изменение связанного поля
    var validHour = function(time) {
        var fValue = time.querySelector("option:checked").getAttribute("value");
        if (time.id == "timein") {
            timeOut.value = fValue;
        }
        if (time.id == "timeout") {
            timeIn.value = fValue;
        }
    };

    //сброс отправки формы
    var resetFormSumbitHendler = function() {
        form.addEventListener('submit', function(evt) {
            evt.preventDefault();
            window.backend.save(new FormData(form), function(response) {
                form.reset();
            });
        });
    };

    //Отслеживания событий
    roomNumber.addEventListener("change", function(evt) {
        validRooms();
    });
    capacity.addEventListener("change", function(evt) {
        validRooms();
    });

    timeIn.addEventListener("change", function(evt) {
        validHour(evt.target);
    });
    timeOut.addEventListener("change", function(evt) {
        validHour(evt.target);
    });


    //активация формы при перемещении пина
    var formActivate = function() {
        form.classList.remove("notice__form--disabled");
        setCoord(addressValue);
        changeDisabled();
        validRooms();
        resetFormSumbitHendler();

    }


    //блокировака формы при загрузке страницы до активации пина
    changeDisabled();


    //передача данных в область видимости window
    window.form = {
        validRooms: validRooms,
        changeDisabled: changeDisabled,
        formActivate: formActivate
    }

})();