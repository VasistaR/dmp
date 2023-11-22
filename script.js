//var for user loc
let coord;
var start = coord;
function getUserLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.watchPosition(saveUserLocation);
  } else {
    console.log("Geolocation is not supported by this browser.");
  }
}

// trying to save user loc
function saveUserLocation(position) {
  coord = [position.coords.longitude, position.coords.latitude];
  setupMap();
}
mapboxgl.accessToken =
  "pk.eyJ1IjoiY29jb2F6aSIsImEiOiJjbGY4cDJ6YWkwZzhwM3JrZWllMmx5c25tIn0.fBrjOWDc1zF7ynW9nKa-jw";

function errorLocation() {
  setupMap([-121.90207577343561, 37.45077570472731]);
}

errorLocation();

function setupMap(coord) {
  const map = new mapboxgl.Map({
    container: "map",
    style: 'mapbox://styles/mapbox/streets-v11',

    center: coord,
    zoom: 17,
  });
  const nav = new mapboxgl.NavigationControl();
  map.addControl(nav);

  var directions = new MapboxDirections({
    accessToken: mapboxgl.accessToken,
  });

  map.addControl(directions, "top-left");
}
