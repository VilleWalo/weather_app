var lat, lon;
window.onload = function () {
  $("#user-city").text(ymaps.geolocation.city);
  $("#user-region").text(ymaps.geolocation.region);
  $("#user-country").text(ymaps.geolocation.country);
  lat = ymaps.geolocation.latitude.toFixed(2);
  lon = ymaps.geolocation.longitude.toFixed(2);
  $("#user-lon").text(lon);
  $("#user-lat").text(lat);

alert(lat);
var content = document.getElementById("content");
    (function loadCoords() {
      var XHR = ("onload" in new XMLHttpRequest()) ? XMLHttpRequest : XDomainRequest;
      var xhr = new XHR();
      xhr.open('GET', 'http://api.openweathermap.org/data/2.5/forecast/city?id=524901&APPID={a21f1d86bc62d7031ed00a1225259126}', true);
      xhr.onload = function() {
  		alert( this.responseText );
	  }

	  xhr.onerror = function() {
  		alert( 'Ошибка ' + this.status );
	  }

	xhr.send();
      // xhr.open('GET', 'http://api.openweathermap.org/data/2.5/forecast?lat='+lat+'&lon='+lon, true);
      // xhr.send();
// a21f1d86bc62d7031ed00a1225259126 Default
//'http://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+lon+'&APPID={a21f1d86bc62d7031ed00a1225259126}
      // xhr.onreadystatechange = function() { 
      // if (xhr.readyState != 4) return;
      // button.innerHTML = 'Готово!';

      // if (xhr.status != 200) {
      //   // обработать ошибку
      //   alert('Ошибка ' + xhr.status + ': ' + xhr.statusText);
      // } else {
      //     try {
      //       var coords = JSON.parse(xhr.responseText);
      //       console.log("All right!");
      //       content.innerHTML += coords;
      //     }
      //     catch(e){
      //       alert("Все плохо!");
      //     }
        
      //   }
       
      // }
    })(); 
}
    