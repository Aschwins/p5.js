var url = 'http://api.open-notify.org/iss-now.json';
var api_key = 'APPID=570b78367d0ddeb10b8f17fa92dbc7d5';


function setup() {
loadData();
}

function gotData(data) {
  console.log(data);
}

function loadData() {
  loadJSON(url, gotData);
}

function draw() {


}

setInterval(loadData, 1000);