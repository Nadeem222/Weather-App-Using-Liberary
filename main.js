// let dateOutPut =document.querySelector(".date");
// let timeOutPut =document.querySelector(".time");
// let conditionOutPut =document.querySelector(".condition")
// let windOutPut = document.querySelector(".wind")
// let iconOutPut = document.querySelector(".icon")
// let cloudOutPut = document.querySelector(".cloudy")

let temp = Math.round(".temp")

console.log(temp)



let getWeather = () => {

  let cityName = document.querySelector(".search").value

  axios.get(`https://api.openweathermap.org/data/2.5/weather?units=metric&appid=d1f19bdfe0425dd932f13b7692fc00d3&q=${cityName}`)

    .then(function (response) {
      // handle success
      console.log("response is success");
      console.log(response.data);

      
      
      document.querySelector(".name").innerHTML =
        `${response.data.name}`



      document.querySelector(".temp").innerHTML =
        `${Math.round(response.data.main.temp)}°C`

      document.querySelector(".humidity").innerHTML =
        `${response.data.main.humidity}%`

      document.querySelector(".feels_like").innerHTML =
        `${Math.round(response.data.main.feels_like)}°C`

      document.querySelector(".min_temp").innerHTML =
        `${Math.round(response.data.main.temp_min)}°C`

      document.querySelector(".max_temp").innerHTML =
        `${Math.round(response.data.main.temp_max)}°C`

      document.querySelector(".condition").innerHTML =
         `${response.data.weather[0].description}`

      document.querySelector("#cloudy").innerHTML =
        `${response.data.weather[0].main}`

      document.querySelector(".time").innerHTML =
        `${moment(response.data.dt * 1000).format("h:mm:ss a")}`

      document.querySelector(".date").innerHTML =
        `${moment(response.data.dt * 1000).format("dddd, MMMM Do YYYY")}`



      if (response.data.weather[0].main === "Thunderstorm") {

        console.log(" i am scatered");

        document.querySelector("#aaa").style.backgroundImage = `url('img/night/thunderstrom.jpg')`

        document.querySelector(".weather").innerHTML =
          `<img src="http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png"/>`

        document.querySelector("#aaa").style.color = "#fff"

      } else if (response.data.weather[0].main === "Drizzle") {

        document.querySelector("#aaa").style.backgroundImage = `url('img/night/drizzle.jpg')`

        document.querySelector(".weather").innerHTML =
          `<img src="http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png"/>`

        document.querySelector("#aaa").style.color = "#fff"

      } else if (response.data.weather[0].main === "Rain") {
        document.querySelector("#aaa").style.backgroundImage = `url('img/day/rain.jpg')`

        document.querySelector(".weather").innerHTML =
          `<img src="http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png"/>`

        document.querySelector("#aaa").style.color = "#fff"
      }else if (response.data.weather[0].main === "Snow") {
        document.querySelector("#aaa").style.backgroundImage = `url('img/day/snowy.jpg')`

        document.querySelector(".weather").innerHTML =
          `<img src="http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png"/>`

        document.querySelector("#aaa").style.color = "#fff"
      }else if (response.data.weather[0].main === "Clear") {
        document.querySelector("#aaa").style.backgroundImage = `url('img/day/clear.jpg')`

        document.querySelector(".weather").innerHTML =
          `<img src="http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png"/>`

        document.querySelector("#aaa").style.color = "#black"
      }else if (response.data.weather[0].main === "Clouds") {
        document.querySelector("#aaa").style.backgroundImage = `url('img/day/Cloudyday.jpeg.avif')`

        document.querySelector(".weather").innerHTML =
          `<img src="http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png"/>`

        document.querySelector("#aaa").style.color = "#fff"
      }else if (response.data.weather[0].main === "Mist") {
        document.querySelector("#aaa").style.backgroundImage = `url('img/day/mist.jpg')`

        document.querySelector(".weather").innerHTML =
          `<img src="http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png"/>`

        document.querySelector("#aaa").style.color = "#fff"
      }else if (response.data.weather[0].main === "Smoke") {
        document.querySelector("#aaa").style.backgroundImage = `url('img/day/smoke.jpg')`

        document.querySelector(".weather").innerHTML =
          `<img src="http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png"/>`

        document.querySelector("#aaa").style.color = "#fff"
      }else if (response.data.weather[0].main === "Haze") {
        document.querySelector("#aaa").style.backgroundImage = `url('img/day/haze.jpg')`

        document.querySelector(".weather").innerHTML =
          `<img src="http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png"/>`

        document.querySelector("#aaa").style.color = "#fff"
      }else if (response.data.weather[0].main === "Dust") {
        document.querySelector("#aaa").style.backgroundImage = `url('img/day/dust-storm.jpg')`

        document.querySelector(".weather").innerHTML =
          `<img src="http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png"/>`

        document.querySelector("#aaa").style.color = "#fff"
      }else if (response.data.weather[0].main === "Fog") {
        document.querySelector("#aaa").style.backgroundImage = `url('img/day/snowy.jpg')`

        document.querySelector(".weather").innerHTML =
          `<img src="http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png"/>`

        document.querySelector("#aaa").style.color = "#fff"
      }else if (response.data.weather[0].main === "Sand") {
        document.querySelector("#aaa").style.backgroundImage = `url('img/day/sand.jpg')`

        document.querySelector(".weather").innerHTML =
          `<img src="http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png"/>`

        document.querySelector("#aaa").style.color = "#fff"
      }else if (response.data.weather[0].main === "Ash") {
        document.querySelector("#aaa").style.backgroundImage = `url('img/day/ash.jpg')`

        document.querySelector(".weather").innerHTML =
          `<img src="http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png"/>`

        document.querySelector("#aaa").style.color = "#fff"
      }else if (response.data.weather[0].main === "Squall") {
        document.querySelector("#aaa").style.backgroundImage = `url('img/day/snowy.jpg')`

        document.querySelector(".weather").innerHTML =
          `<img src="http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png"/>`

        document.querySelector("#aaa").style.color = "#fff"
      }else if (response.data.weather[0].main === "Tornado") {
        document.querySelector("#aaa").style.backgroundImage = `url('img/day/tornado.jpg')`

        document.querySelector(".weather").innerHTML =
          `<img src="http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png"/>`

        document.querySelector("#aaa").style.color = "#fff"
      }


    })
    .catch(function (error) {
      // handle errorf
      console.log(error);
    })

}



let getWeather = () => {
  let cityName = document.querySelector(".search").value;

  axios.get(`https://api.openweathermap.org/data/2.5/weather?units=metric&appid=d1f19bdfe0425dd932f13b7692fc00d3&q=${cityName}`)
      .then(function (response) {
          // Clear previous data
          document.querySelector(".name").innerHTML = "";
          document.querySelector(".temp").innerHTML = "";
          // Clear other elements similarly
          
          // Update HTML elements with new data
          document.querySelector(".name").innerHTML = response.data.name;
          document.querySelector(".temp").innerHTML = `${Math.round(response.data.main.temp)}°C`;
          document.querySelector(".humidity").innerHTML = `${response.data.main.humidity}%`;
          // Update other elements similarly
          
          // Update weather condition and icon
          document.querySelector(".condition").innerHTML = response.data.weather[0].description;
          document.querySelector(".icon").setAttribute("src", `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`);
          
          // Update cloudy element
          document.querySelector("#cloudy").innerHTML = response.data.weather[0].main;

          // Add class to change background based on weather condition
          let aaa = document.querySelector("#aaa");
          aaa.classList.remove("weather-clear", "weather-cloudy" /* Add other class names here */);

          let weatherCondition = response.data.weather[0].main.toLowerCase();
          if (weatherCondition === "clear") {
              aaa.classList.add("weather-clear");
          } else if (weatherCondition === "clouds") {
              aaa.classList.add("weather-cloudy");
          }
          // Add more conditions for other weather types
          
      })
      .catch(function (error) {
          console.log(error);
      });
}

// Attach the function to the form's submit event
document.querySelector("#location").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form submission
  getWeather(); // Call the function to get and display weather data
});


