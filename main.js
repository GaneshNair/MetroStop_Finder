var map;
function loadMapScenario() {
  map = new Microsoft.Maps.Map(document.getElementById('bingMap'), {
    center: new Microsoft.Maps.Location(12.976599, 77.586950),
    mapTypeId: Microsoft.Maps.MapTypeId.arieal,
    zoom: 11
  });

  showPosition();
}

var map = document.getElementById('bingMap');
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        map.innerHTML = "Geolocation is not supported by this browser. Enter current location manually.";
    }
}

function showPosition(position) {
    //position.coords.latitude, position.coords.longitud
    map.setView({
        center: new Microsoft.Maps.Location(12.8596843, 77.8002826),
        zoom: 18
    });
}
