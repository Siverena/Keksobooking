"use strict";
(function() {
    var map = document.querySelector('.map');
    var mapPins = document.querySelector('.map__pins');
    var cardTemplate = document.querySelector('template').content.querySelector('.map__card');
    var pinTemplate = document.querySelector('template').content.querySelector('.map__pin');
    var startPin = document.querySelector(".map__pin--main");
    var addressInput = document.querySelector("input#address");
    var addObject = [];
    var mapFilters = document.querySelector('.map__filters');
    var maps = document.querySelector('.map__pins');

    var setCoordInput = function(addressValue) {
        addressInput.setAttribute("value", addressValue);
    };

    var addToPage = function() {
        var allPinsInMap = maps.querySelectorAll('.map__pin:not(.map__pin--main)');
        var allPopapMap = maps.querySelectorAll('.popup');
        allPinsInMap.forEach(element => {
            maps.removeChild(element);
        });
        allPopapMap.forEach(element => {
            maps.removeChild(element);
        });
        window.backend.load(successHandler); //отрисуем пины и скрытые карточки( с классом hidden)  
        mapFilters.addEventListener('change', addToPage); //подписываемся на изменения формы
    }

    //активация страницы после первого перемещения главного пина
    startPin.addEventListener("mousedown", function(evt) {
        evt.preventDefault();
        map.classList.remove("map--faded");
        window.form.formActivate(); //активировали форму

        var onMouseUp = function(upEvt) {
            document.removeEventListener('mouseup', onMouseUp);
            addToPage();
        }
        document.addEventListener('mouseup', onMouseUp);

    });


    // открытие карточки при клике на пин  //!!добавить функцию управления с клавиатуры
    var onClicPinsHendler = function(OnClickEvt) {
        OnClickEvt.preventDefault();
        if (OnClickEvt.target.parentElement.classList.contains("map__pin") && !OnClickEvt.target.parentElement.classList.contains("map__pin--main")) {
            if (maps.querySelector('.popup:not(.hidden)')) {
                maps.querySelector('.popup:not(.hidden)').classList.add("hidden");
            }
            var neighbour = OnClickEvt.target.parentElement.nextSibling;
            neighbour.classList.remove("hidden");
            neighbour.querySelector(".popup__close").addEventListener("click", function(evt) {
                onClickCloseCard(neighbour);
            });
        };
    }

    var onClickCloseCard = function(neighbour) {
        neighbour.classList.add("hidden");
    }

    var successHandler = function(data) {
        var fragment = document.createDocumentFragment();
        var addObject = window.filter.adFilter(data);
        addObject.forEach(element => {
            fragment.appendChild(window.pin.renderPin(element));
            fragment.appendChild(window.card.renderCard(element));
        });
        mapPins.appendChild(fragment);
        map.addEventListener('click', onClicPinsHendler);

    };
    //перерисовка пинов с учетом фильтра
    var updateAd = function() {
        var sameFlatAd = addObject.filter(function(it) {
            return it.flat === flat;
        });
        window.card.renderCard(sameFlatAd);
    }
    window.map = {
        cardTemplate: cardTemplate,
        pinTemplate: pinTemplate,
        setCoordInput: setCoordInput,
        updateAd: updateAd
    }
})();