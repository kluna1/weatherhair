$('document').ready(function(){

	


// Use your loction

if ('geolocation' in navigator) {
  $('.js-geolocation').show();
} else {
  $('.js-geolocation').hide();
}

// Finding where you are in the world


$('.js-geolocation').on('click', function() {
  navigator.geolocation.getCurrentPosition(function(position) {
    getWeather (position.coords.longitude, position.coords.latitude); 
  });
});


// test location (where on earth identifier )

// $(document).ready(function() {
//   loadWeather('New York','');
// });


//close modal when i click exit

$('.exit, modal-wrapper').click(function(){
	// fade out modal wrapper
	$ ('.modal-wrapper').fadeOut();

	//remove .no-scroll from body
	$('body').removeClass('no-scroll');


    
});

//Fade in modal wrapper

$('.open').click(function() {
	$('.modal-wrapper').fadeIn();

	//add .no-scroll to body

	$('body').addClass('no-scroll');

});

//when modal gets clicked, dont tell modal wrapper

$('.modal').click(function(event) {
  event.stopPropagation();
});

});

//-------------------------------------------------------------------------------

function getWeather(longitude, latitude) {
	$.getJSON('http://api.openweathermap.org/data/2.5/weather?', 

{
	appid: 'aff355c705b85b8e1006f1675be9eabc',
	lon: longitude,
	lat: latitude,
	units: 'imperial',




}, 

function(data) {
	console.log(data);

	//City Name
	console.log(data.name);
	$('#city').text(data.name);

	//temp
	console.log(data.main.temp);
	$('#temp').text(data.main.temp);

	//humidity
	console.log(data.main.humidity);
	$('#humidity').text(data.main.humidity);

	//weather "main" (ie. 'drizzle')
	console.log(data.weather[0].main);
	$('#main').text(data.weather[0].main);

	//wind spead
	console.log(data.wind.speed);
	$('#windSpeed').text(data.wind.speed);

	//icon

	const icon = 'http://openweathermap.org/img/w/' + data.weather[0].icon + '.png';
	$('#icon').attr('src', icon);

	getWeatherType(data);
});

}


// Use data, determine weather type
function getWeatherType(data) {
	// If statements - see https://openweathermap.org/weather-conditions

}
















