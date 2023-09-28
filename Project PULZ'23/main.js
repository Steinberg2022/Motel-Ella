//Animating Side bar for the map;

var bar = document.getElementById("situation");
var map = document.getElementById("map");
bar.style.backgroundImage = "linear-gradient(rgba(168, 255, 136, 0.468),rgba(0, 255, 30, 0.568))"
bar.innerHTML = "Click To Expand"
bar.style.maxWidth = '180px'
function toggy(){
    if(bar.style.maxWidth == '180px'){
        bar.style.maxWidth = '400px'
        bar.style.backgroundImage = " linear-gradient(rgba(0, 255, 255, 0.468),rgba(127, 255, 212, 0.568))"
        bar.innerHTML = "Situated Near The Kuda Ravana Falls"
        map.style.backgroundImage = "url(../img/map2.png)"
    }
    else{
        bar.style.backgroundImage = "linear-gradient(rgba(168, 255, 136, 0.468),rgba(0, 255, 30, 0.568))"
        bar.innerHTML = "Click To Expand"
        bar.style.maxWidth = '180px'
        map.style.backgroundImage = "url(../img/Map.png)"
    }
}