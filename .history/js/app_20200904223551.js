
// selecting elements
const nameValue = document.querySelector("#name");
const latValue = document.querySelector("#lat");
const lngValue = document.querySelector('#lng');
const humidityValue = document.querySelector('#humidity')
const tempValue = document.querySelector('#temp');
const descValue = document.querySelector('#desc');
const presValue = document.querySelector('#pressure');
const windDgValue = document.querySelector("#wind-degree");
const windSpValue = document.querySelector("#wind-speed");
const inputField = document.querySelector("#input_field");
const form = document.querySelector('#form');
const weatherContent = document.querySelector("#weather-content");


let WeatherArray = JSON.parse(localStorage.getItem("weatherdata")) || [];


const getWeatherContent = (arr) => {
  
  let mappedArr = arr.map(function(data){


    return `<div class="col-12 col-md-6  col-lg-4 py-2">
                <div class="card" >
                    <div class="card-body">
                        <h5 class="card-title" id="name">${data.name}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">Lat: <span id="lat" class="badge badge-info">${data.coord.lat}</span>, Lng: <span id="lng" class="badge badge-info">${data.coord.lon}</span> </h6>
                        <p class="card-text">Humidity: <span id="humidity" style="color:cornflowerblue">${data.main.humidity}</span>, Temp: <span id="temp"
                                style="color:cornflowerblue">${data.main.temp}</span>, Desc:
                            <span style="color:cornflowerblue" id="desc">Overly cloudy</span> </p>
                        <p class="card-text">Pressure: <span style="color:cornflowerblue" id="pressure">${data.main.pressure}</span>, WDeg: <span
                                style="color:cornflowerblue" id="wind-degree">${data.wind.deg}deg</span>,
                            WSpeed: <span style="color:cornflowerblue" id="wind-speed">${data.wind.speed}</span></p>
                        
                    </div>
                </div>
            </div>`


  })
  mappedArr = mappedArr.join("");
  weatherContent.innerHTML = mappedArr
  
}

window.addEventListener("DOMContentLoaded", function() {
  getWeatherContent(WeatherArray);
  // console.log(WeatherArray)
 
});


// function 1
const GetWeather = (Location) => {
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${Location}&appid=914023c54fa48cb8be92d9179794a8ba`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
    console.log(data);
      
      WeatherArray.push(data)
      // console.log(WeatherArray);
      localStorage.setItem('weatherdata', JSON.stringify(WeatherArray))

    })
    .catch((error) => {
      console.log(error);
    });
};


// function 2
const handleSubmit = (e) => {
    e.preventDefault();
    
  GetWeather(inputField.value);
  getWeatherContent(WeatherArray);

  window.addEventListener("Load", function () {
    getWeatherContent(WeatherArray);
    // console.log(WeatherArray)
  });
  

    console.log(inputField.value ,'I am submited')
  inputField.value = ""
  

}

// event Listener => 'submit'
form.addEventListener('submit', handleSubmit);