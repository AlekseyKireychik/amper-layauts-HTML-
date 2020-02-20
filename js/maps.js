$(document).ready(function () {
    //map
    initMap();

    function initMap() {

        var map = new google.maps.Map(document.getElementById('map'), {
            scrollwheel: false,
            zoom: 15,
            disableDefaultUI: true,
        });

        var geocoder = new google.maps.Geocoder();

        var address = $('.contacts-item-address').text();

        geocoder.geocode({'address': address}, function (results, status) {
            if (status == 'OK') {
                map.setCenter(results[0].geometry.location);
                var marker = new google.maps.Marker({
                    map: map,
                    position: results[0].geometry.location,
                    title: document.title,
                    icon: './img/map-marker.svg'
                });
            } else {
                console.log('Geocode was not successful for the following reason: ' + status);
            }
        });
    }
});