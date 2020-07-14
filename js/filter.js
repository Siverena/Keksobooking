(function() {

    var Price = {
        MIN: 10000,
        MAX: 50000
    };
    var ANY_VALUE = 'any';

    var typeFilter = document.querySelector('#housing-type');
    var priceFilter = document.querySelector('#housing-price');
    var roomsFilter = document.querySelector('#housing-rooms');
    var guestsFilter = document.querySelector('#housing-guests');
    var featuresFilter = document.querySelector('#housing-features');

    var adFilter = function(AD_OBJECT) {
        var checkTypeField = function(advert) {
            return (typeFilter.value === advert.offer.type) || (typeFilter.value === ANY_VALUE);
        };

        var checkPriceField = function(advert) {
            switch (priceFilter.value) {

                case 'low':
                    return advert.offer.price < Price.MIN;

                case 'middle':
                    return advert.offer.price > Price.MIN && advert.offer.price < Price.MAX;

                case 'high':
                    return advert.offer.price > Price.MAX;

                default:
                    return true;
            }
        };

        var checkRoomsField = function(advert) {
            return (roomsFilter.value === advert.offer.rooms.toString()) || (roomsFilter.value === ANY_VALUE);
        };

        var checkGuestsField = function(advert) {
            return (guestsFilter.value === advert.offer.guests.toString()) || (guestsFilter.value === ANY_VALUE);
        };

        var checkFeaturesField = function(advert) {
            var checkedElements = featuresFilter.querySelectorAll('input[type=checkbox]:checked');
            var selectedFeatures = [].map.call(checkedElements, function(item) {
                return item.value;
            });
            return selectedFeatures.every(function(currentFeature) {
                return advert.offer.features.includes(currentFeature);
            });
        };

        var sortedArray = AD_OBJECT.filter(checkTypeField).filter(checkPriceField).filter(checkRoomsField).filter(checkGuestsField).filter(checkFeaturesField);
        return sortedArray;
    };
    window.filter = {
        adFilter: adFilter
    }
})();