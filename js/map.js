$(document).ready(function() {
    /** Google Map **/
    function init_map() {
        var locations = [
            ['<div class="scrollFix"><div class="col-md-12"><h4 class="title">Kesar Party Plot</h4></div><div class="col-md-12">  <p>Besides Sharnam-IV, </p><p>Jodhpur Tekra, Ahmedabad</p><p>Gujarat 380015</p>  </div>  </div>', 41.889448, 12.472484, 4],
            ['<div class="scrollFix"><div class="col-md-12"><h4 class="title">Party Plot</h4></div><div class="col-md-12">  <p>Besides Sharnam-IV, </p><p>Jodhpur Tekra, Ahmedabad</p><p>Gujarat 380015</p>  </div>  </div>', 41.909448, 12.582484, 3]
        ];
        var myOptions = {
            scrollwheel: false,
            zoom: 10,
            center: new google.maps.LatLng(41.889448, 12.472484),
            mapTypeId: google.maps.MapTypeId.TERRAIN
        };
        map = new google.maps.Map(document.getElementById('gmap_canvas'), myOptions);
        for (i = 0; i < locations.length; i++) {
            marker = new google.maps.Marker({
                map: map,
                position: new google.maps.LatLng(locations[i][1], locations[i][2]),
                icon: 'images/retina/general/map_pin.png'
            });

        }
        infowindow = new google.maps.InfoWindow({
            content: ''
        });

    }
    google.maps.event.addDomListener(window, 'load', init_map);
});