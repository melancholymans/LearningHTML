var message  = "hi from ";
var city = ["Tokyo","Paris","London","Graz"];
window.onload = function(){
  document.getElementById("heading").innerHTML = message + city[Math.floor(Math.random() * 4)];
}
