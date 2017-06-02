$(document).ready(function() {
    /** Google Map **/

    function init_map() {
        var locations = [
            ['<div class="scrollFix"><div class="col-md-12"><h4 class="title">Kesar Party Plot</h4></div><div class="col-md-12">  <p>Edappally Road, Edappally, Ponekkara, Edappally, Ernakulam, Kerala 682024</p>  </div>  </div>', 10.021847, 76.304976, 4],
            ['<div class="scrollFix"><div class="col-md-12"><h4 class="title">Party Plot</h4></div><div class="col-md-12">  <p>Edappally Road, Edappally, Ponekkara, Edappally, Ernakulam, Kerala 682024</p>  </div>  </div>', 10.020492, 76.307152, 3],
             ['<div class="scrollFix"><div class="col-md-12"><h4 class="title">Party Plot</h4></div><div class="col-md-12">  <p>Thudathil House, marottichodu, Ernakulam, Kerala 682024</p>  </div>  </div>', 10.025992, 76.312312, 2]
        ];
        var myOptions = {
            scrollwheel: false,
            zoom: 15,
            center: new google.maps.LatLng(10.021847, 76.304976),
            mapTypeId: google.maps.MapTypeId.TERRAIN
        };
        map = new google.maps.Map(document.getElementById('gmap_canvas'), myOptions);
        for (i = 0; i < locations.length; i++) {
            marker = new google.maps.Marker({
                map: map,
                position: new google.maps.LatLng(locations[i][1], locations[i][2],locations[i][3]),
                icon: 'images/retina/general/map_pin.png'
            });

        }
        infowindow = new google.maps.InfoWindow({
            content: ''
        });

    }
    google.maps.event.addDomListener(window, 'load', init_map);
});