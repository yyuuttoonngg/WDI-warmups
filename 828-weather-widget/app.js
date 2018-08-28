// https://gist.github.com/kasun-maldeni/09561a380028dbbfc74162f0fdbdb683
function toF(){
    document.querySelector('.c-div').classList.remove("show")
    document.querySelector('.c-div').classList.add("hidden")
    document.querySelector('.f-div').classList.remove("hidden")
    document.querySelector('.f-div').classList.add("show")
}
function toC(){
    document.querySelector('.f-div').classList.remove("show")
    document.querySelector('.f-div').classList.add("hidden")
    document.querySelector('.c-div').classList.remove("hidden")
    document.querySelector('.c-div').classList.add("show")
}


function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position){
            var lat = position.coords.latitude;
            var lon = position.coords.longitude;
            getWeather(lat,lon)

        });       
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}
getLocation()
function getWeather(lat,lon){
    const options = {
        url: `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=8da4b0e021bf5fa0f3066317df2d8c79`,
        method:'get',
        dataType:'json'
    };
    const showSearchResults = function(response){   
        var icon= response.weather[0].icon
        var iconUrl = `http://openweathermap.org/img/w/${icon}.png`
        var suburb = document.querySelector('.location-span');
        suburb.textContent = response.name
        var c = response.main.temp -273.15
        var f = c*1.8 + 32
        var cDiv =document.querySelector('.c-div');
        cDiv.innerHTML =`<p> ${c.toFixed(1) + '°C'}</p><button id="tof">Show Fahrenheit </button>`
        var fDiv =document.querySelector('.f-div');
        fDiv.innerHTML =`<p> ${f.toFixed(1) + '°F'}</p><button id="toc">Show Celsius </button>`
        var weather = document.querySelector('.weather-span')
        weather.innerHTML = `<p>${response.weather[0].description}</p><img src=${iconUrl} >`
        document.querySelector('#tof').addEventListener('click',toF)
        document.querySelector('#toc').addEventListener('click',toC)
    }
    $.ajax(options).done(showSearchResults);
}
