"use strict";
(function() {

    var renderPin = function(pin) {
        var pinElement = window.map.pinTemplate.cloneNode(true);
        pinElement.setAttribute('style', 'left: ' + pin.location.x + "px; top: " + pin.location.y + "px; cursor: pointer;");
        pinElement.querySelector("img").src = pin.author.avatar;
        pinElement.setAttribute("alt", pin.offer.title);
        return pinElement;
    }

    window.pin = {
        renderPin: renderPin
    }

})();