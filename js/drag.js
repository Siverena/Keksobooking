"use strict";
(function() {
    var startPin = document.querySelector(".map__pin--main");
    var map = document.querySelector(".map");


    startPin.addEventListener("mousedown", function(evt) {
        evt.preventDefault();
        var startCoords = {
            x: evt.clientX,
            y: evt.clientY
        };
        var onMouseMove = function(moveEvt) {
            moveEvt.preventDefault();
            var shift = {
                x: startCoords.x - moveEvt.clientX,
                y: startCoords.y - moveEvt.clientY
            };
            startCoords = {
                x: moveEvt.clientX,
                y: moveEvt.clientY
            }
            startPin.style.top = (startPin.offsetTop - shift.y) + "px";
            startPin.style.left = (startPin.offsetLeft - shift.x) + "px";
            var addressValue = (startPin.offsetTop - shift.y) + ", " + (startPin.offsetLeft - shift.x);
            window.map.setCoordInput(addressValue);
        };

        var onMouseUp = function(upEvt) {
            upEvt.preventDefault();
            map.removeEventListener("mousemove", onMouseMove);
            map.removeEventListener("mouseup", onMouseUp);
        };
        map.addEventListener("mousemove", onMouseMove);
        map.addEventListener("mouseup", onMouseUp);
    });


})();