    var lat = '';
    var lng = '';
    var address = {zipcode};
    geocoder.geocode( { 'address': address}, function(results, status) {
      if (status == google.maps.GeocoderStatus.OK) {
         lat = results[0].geometry.location.lat();
         lng = results[0].geometry.location.lng();
        };
      } else {
        alert("Geocode was not successful for the following reason: " + status);
      }
    });

var map;
var infoWindow;

function initMap() {
  var mapLocation = {lat: 34.0635, lng: -118.4453};

  map = new google.maps.Map(document.getElementById('map'), {
    center: mapLocation,
    zoom: 17
  });

  infoWindow = new google.maps.infoWindow();
  var service = new google.maps.places.PlacesService(map);
  service.nearbySearch({
    location: mapLocation,
    radius: 500,
    type: ['restaurant']
  }, callback);
}

    function callback(results, status) {
            if (status === google.maps.places.PlacesServiceStatus.OK) {
            for (var i = 0; i < results.length; i++) {
               createMarker(results[i]);
            }
         }
      }
        
    function createMarker(place) {
            var placeLoc = place.geometry.location;
            var marker = new google.maps.Marker({
            map: map,
            position: place.geometry.location,
          });
            
            google.maps.event.addListener(marker, 'click', function() {
            infoWindow.setContent(place.name);
            infoWindow.open(map, this);
            });

