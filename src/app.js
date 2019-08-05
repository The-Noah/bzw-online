var worldSize = 400;
var objects = "";

function rand(min, max){
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function updateOutput(){
  var output = "world\n";
  output += "  size "+worldSize+"\n";
  output += "end\n";

  document.querySelector("#output").value = output + objects;
}

function worldSizeChange(value){
  worldSize = value;
  updateOutput();
}

function generate(){
  objects = "";

  for(var i = 0; i < 10; i++){
    var tmp = "";

    if(rand(0, 1) == 0){
      tmp += "box\n";
    }else{
      tmp += "pyramid\n";
    }

    tmp += "  position "+rand(-worldSize, worldSize)+" "+rand(-worldSize, worldSize)+" "+rand(-worldSize, worldSize)+"\n";
    tmp += "  size "+rand(1, 50)+" "+rand(1, 50)+" "+rand(1, 50)+"\n";

    tmp += "end\n";
    objects += tmp;
  }

  updateOutput();
}

generate();