var x = document.getElementById("coordenadas");

window.onload=function () {
    getLocation();
};
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showPosition(position) {
    x.innerHTML = "Latitud: " + position.coords.latitude +"<br>Longitud: " + position.coords.longitude;
}