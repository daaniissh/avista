"use strict";

window.initMap = function() {
  var customMapType = new google.maps.StyledMapType([
    {
      stylers: [
        {'saturation': -100},
        {'lightness': 50},
        {'visibility': 'simplified'}
      ]
    },
    {
      elementType: 'labels',
      stylers: [{visibility: 'on'}]
    },
    {
      featureType: 'road',
      stylers: [{color: '#bbb'}]
    }
  ], {
    name: 'Custom Style'
  });

  var image = new google.maps.MarkerImage(
    'img/widgets/gmap-pin.png',
    new google.maps.Size(48,54),
    new google.maps.Point(0,0),
    new google.maps.Point(24,54)
  );

  var customMapTypeId = 'custom_style';

  var customLocation = {lat: 41.18510411699536, lng: 29.387741346296938}; // Your coordinates
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 6,
    scrollwheel: false,
    streetViewControl: false,
    mapTypeControl: false,
    center: customLocation, // Center the map on your location.
    mapTypeControlOptions: {
      mapTypeIds: [google.maps.MapTypeId.ROADMAP, customMapTypeId]
    }
  });

  var contentString = '<div id="content">'+
    '<div id="siteNotice">'+
    '</div>'+
    '<h1 id="firstHeading" class="firstHeading">Your Location</h1>'+
    '<div id="bodyContent">'+
    '<p>Specific address or description here, <br> Latitude: 41.18510411699536, <br> Longitude: 29.387741346296938</p>'+
    '</div>'+
    '</div>';

  var infowindow = new google.maps.InfoWindow({
    content: contentString,
    maxWidth: 300
  });

  var marker = new google.maps.Marker({
    map: map,
    clickable: true,
    icon: image,
    title: 'Your Location',
    position: customLocation
  });

  marker.addListener('click', function() {
    infowindow.open(map, marker);
  });

  map.mapTypes.set(customMapTypeId, customMapType);
  map.setMapTypeId(customMapTypeId);
}
