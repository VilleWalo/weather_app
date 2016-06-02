//--------background visualization----------//

var clientHeight = document.documentElement.clientHeight;
var bodyBlock = document.getElementsByTagName('BODY')[0];
var container = document.getElementsByClassName('container')[0];
bodyBlock.style.height = clientHeight + "px";
bodyBlock.style.paddingTop = (clientHeight - 400) / 2  + "px";

//--------get information and her visualization----------//

var lat, lon, mainInfo, temp, pressure, wDescription, status;
var visualization = function(){
  $("#temp").text(temp);
  $("#pressure").text(pressure + " hpa");
  $("#wDescription").text(wDescription);
  $("#humidity").text(humidity + " %");
  $("#wind").text(wind + " m/s");
  switch(status){
  	case '2' : $(".img_block").css("background-image", "url(img/thunderstorm.jpg)");
  			  break;
  	case '3' : $(".img_block").css("background-image", "url(img/drizzle.jpg)");
  			  break;
  	case '5' : $(".img_block").css("background-image", "url(img/rain.jpg)");
  			  break;
  	case '6' : $(".img_block").css("background-image", "url(img/snow.jpg)");
  			  break;
  	case '7' : $(".img_block").css("background-image", "url(img/atmosphere.jpg)");
  			  break;
  	case '8' : $(".img_block").css("background-image", "url(img/clear.jpg)");
  			   $("#user-city").css("color", "#333");
  			   $("#temp").css("color", "#333");
  			  break;
  	case '9' : $(".img_block").css("background-image", "url(img/extreme.jpg)");
  			  break;
  }

};
window.onload = function () {
  $("#user-city").text(ymaps.geolocation.city);
  lat = ymaps.geolocation.latitude.toFixed(2);
  lon = ymaps.geolocation.longitude.toFixed(2);
  $("#user-lat").text(lat);
  $("#user-lon").text(lon);
  var content = document.getElementById("content");
  (function loadInfo() {
      var XHR = ("onload" in new XMLHttpRequest()) ? XMLHttpRequest : XDomainRequest;
      var xhr = new XHR();

      xhr.open('GET', 'http://api.openweathermap.org/data/2.5/forecast?lat='+lat+'&lon='+lon+'&APPID=a21f1d86bc62d7031ed00a1225259126&units=metric', true);
 	  xhr.send();

      xhr.onload = function() {
        mainInfo = JSON.parse(xhr.responseText);	
        console.log(mainInfo);
  	    temp = mainInfo.list[0].main.temp.toFixed(0);
  	    pressure = mainInfo.list[0].main.pressure;
  	    wDescription = mainInfo.list[0].weather[0].description.toUpperCase();
  	    humidity = mainInfo.list[0].main.humidity;
  	    wind = mainInfo.list[0].wind.speed;
  	    status = +mainInfo.list[0].weather[0].id / 100;
  	    if(!((status ^ 0) === status)) {status = parseFloat(status).toFixed()};
  	    console.log(status);
        visualization();
	  }

  })(); 
}

 