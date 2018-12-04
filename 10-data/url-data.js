var url = 'api.openweathermap.org/data/2.5/weather?q=London&APPID=570b78367d0ddeb10b8f17fa92dbc7d5'

function setup() {
  loadJSON(url, gotData)

}

function gotData(data){
  console.log(data);
}

function draw() {


}