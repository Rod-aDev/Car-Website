var header = document.getElementById("header");
var ms = document.getElementById("models");
var m3 = document.getElementById("model3");
var mx = document.getElementById("modelx");
var my = document.getElementById("modely");
var model = document.getElementById("model");

ms.onclick = function(){
    header.style.backgroundImage = "url(/imagenes/image-1.png)";
    model.innerHTML = "Model S";
}
m3.onclick = function(){
    header.style.backgroundImage = "url(/imagenes/image-2.png)";
    model.innerHTML = "Model 3";
}
mx.onclick = function(){
    header.style.backgroundImage = "url(/imagenes/image-3.png)";
    model.innerHTML = "Model X";
}
my.onclick = function(){
    header.style.backgroundImage = "url(/imagenes/image-4.png)";
    model.innerHTML = "Model Y";
}