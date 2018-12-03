function setup() {
  loadJSON("http://api.open-notify.org/astros.json", gotData)

}

function gotData(data){
  console.log(data);
}

function draw() {


}