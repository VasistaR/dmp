  const options = {
  enableHighAccuracy: true,
  timeout: 1000,
  maximumAge: 0,
};

var coord
function success(pos) {
  const crd = pos.coords;
  console.log("Your current position is:");
  console.log(`Latitude : ${crd.latitude}`);
  console.log(`Longitude: ${crd.longitude}`);
  console.log(`More or less ${crd.accuracy} meters.`);
   coord = [crd.longitude,crd.latitude];
  console.log("map.center",coord);
  return coord;

}

function error(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
}
function getLocation(){
 console.log("inside getLocation");
  navigator.geolocation.watchPosition(coord=success, error, options);
}
