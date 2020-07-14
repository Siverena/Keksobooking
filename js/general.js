"use strict";
(function() {
    window.general = {
        randomInteger: function(min, max) {
            let rand = min + Math.random() * (max + 1 - min);
            return Math.floor(rand);
        },
        randomItem: function(arr) {
            return arr[Math.floor(Math.random() * arr.length)]
        },
        stringGenerate: function(arr, part1, part2, arrLength = arr.length) {
            var arrElem = [];
            var str = "";
            for (var i = 0; i < arrLength; i++) {
                arrElem[i] = part1 + arr[i] + part2;
                str = str + arrElem[i];
            }
            return str;
        }
    }
})();