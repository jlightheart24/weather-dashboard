// var currentCWApi = "api.openweathermap.org/data/2.5/weather?q=atlanta&appid=dbdd2dd7844d8fdd9f0b10240f665777";

// console.log(currentCWApi);

let cityName = ""

$('#searchCity').submit(function(e) {
    // e.preventDefault();
    let cityName = $('#searchCity').val();
});

$('.cityName').append(cityName);