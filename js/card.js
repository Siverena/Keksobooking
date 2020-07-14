"use strict";
(function() {
    var cardTemplate = document.querySelector('template').content.querySelector('.map__card');
    var typeOfHouse = {
        'flat': 'квартира',
        'house': 'дом',
        'bungalo': 'бунгало',
        'palac': 'дворец'
    }

    var renderCard = function(card) {
        var cardElement = cardTemplate.cloneNode(true);
        cardElement.classList.add("hidden");
        cardElement.querySelector("img").src = card.author.avatar;
        cardElement.querySelector("h3").textContent = card.offer.title;
        cardElement.querySelector(".popup__price").textContent = card.offer.price + " Р/ночь";
        cardElement.querySelector("h4").textContent = typeOfHouse[card.offer.type];
        cardElement.querySelector("h4~p").textContent = card.offer.rooms + " комнаты для " + card.offer.guests + " гостей";
        cardElement.querySelector("h4~p~p").textContent = "Заезд после " + card.offer.checkin + ", выезд до " + card.offer.checkout;
        cardElement.querySelector(".popup__features").innerHTML = window.general.stringGenerate(card.offer.features, '<li class="feature feature--', '"></li>');
        cardElement.querySelector(".popup__features ~ p").textContent = card.offer.description;
        cardElement.querySelector(".popup__pictures").innerHTML = window.general.stringGenerate(card.offer.photos, '<li><img src="', '"  width="40" height="40" draggable="false"></li>');
        return cardElement;
    }

    window.card = {
        renderCard: renderCard
    }

})();