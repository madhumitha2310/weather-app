
var key = '6c4d91b3af08c14843cdad9c0bffca85'; //unique API key provided by 'openweathermap.org'

var baseURL ="https://api.openweathermap.org/data/2.5/weather?q=coimbatore,IN&appid=6c4d91b3af08c14843cdad9c0bffca85"; // API URL

// make a request
var reqestCity = async (city) => 
{
	var baseURL ='https://api.openweathermap.org/data/2.5/weather'
	var query = `?q=${city}&appid=${key}`;

// get response
var response = await fetch(baseURL+query);
    var data = await response.json();
    return data;
} 
