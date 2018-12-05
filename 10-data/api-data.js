var base_url = 'http://api.openweathermap.org/data/2.5/weather?';
var api_key = 'APPID=570b78367d0ddeb10b8f17fa92dbc7d5';


function setup() {
  input = createInput();
  input.changed(loadData);
}

function gotData(data) {
  console.log(data);
}

function loadData() {
  var url = base_url + '&' + api_key + '&q=' + input.value();
  loadJSON(url, gotData, 'jsonp');
}

function draw() {


}