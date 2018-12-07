var url = 'http://api.open-notify.org/iss-now.json';
var api_key = 'APPID=570b78367d0ddeb10b8f17fa92dbc7d5';

let myMap;
let canvas;

const mappa = new Mappa('Leaflet');
var iss;


// All our map options
const options = {
  lat: 0,
  lng: 0,
  zoom: 1,
  style: "http://{s}.tile.osm.org/{z}/{x}/{y}.png"
}

function setup() {
  iss = new spaceStation(0, 0);

  //loadData();
  myMap = mappa.tileMap(options);
  canvas = createCanvas(640, 640);
  // Create a tile map center in New York with an initial zoom level of 10.

  // Overlay the canvas to the new tile map created.
  myMap.overlay(canvas);

  myMap.onChange(drawPoint);

}

function draw() {
  
}

function drawPoint() {
  // clear Canvas when the new ISS location is known
  clear();
  const iss_location = myMap.latLngToPixel(iss.latitude, iss.longitude)
  fill(0);
  ellipse(iss_location.x, iss_location.y, 10, 10)
}

// Callback function after the iss-api call.
function gotData(data) {
  console.log(data.iss_position.latitude, data.iss_position.longitude);
  iss.latitude = data.iss_position.latitude
  iss.longitude = data.iss_position.longitude
  drawPoint();
}

function loadData() {
  loadJSON(url, gotData);
}

class spaceStation {
  constructor(lat, lon) {
    this.latitude = lat;
    this.longitude = lon;
  }
}



setInterval(loadData, 10000);

//[Log] {message: "success", timestamp: 1544172735, iss_position: {latitude: "-44.0984", longitude: "-103.3333"}} (iss-api.js, line 35)