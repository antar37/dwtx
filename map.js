let churches = [
   {
     "type": "point",
     "lat": 27.7525097,
     "lon": -98.0741625,
     "entity_id": "6043",
     "popup": "",
     "alt": "church",
     "icon": {
       "iconUrl": "/themes/custom/eam/images/map-icon-church.svg",
       "iconSize": {
         "x": 33,
         "y": 51
       },
       "iconAnchor": {
         "x": 16,
         "y": 51
       },
       "className": "nid--6043"
     }
   },
   {
     "type": "point",
     "lat": 27.8994131,
     "lon": -97.1526837,
     "entity_id": "6044",
     "popup": "",
     "alt": "church",
     "icon": {
       "iconUrl": "/themes/custom/eam/images/map-icon-church.svg",
       "iconSize": {
         "x": 33,
         "y": 51
       },
       "iconAnchor": {
         "x": 16,
         "y": 51
       },
       "className": "nid--6044"
     }
   },
 ]

var map = L.map('mapid', {
	center: [39.73, -104.99],
	zoom: 10
});

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
	id: 'mapbox.streets',
	accessToken: 'pk.eyJ1Ijoicmtkc3R1ZGlvIiwiYSI6ImNrMWpzaHVhNjIzeXgzYnA2aDd3bW92YzQifQ._P1ZMrxr85X9J8twAPYy-A'
}).addTo(map);

var markers = L.markerClusterGroup();
churches.forEach(function(church){
   markers.addLayer(L.marker([church.lat, church.lon]));
});
map.addLayer(markers);