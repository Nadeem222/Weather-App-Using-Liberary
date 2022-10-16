// let dateOutPut =document.querySelector(".date");
// let timeOutPut =document.querySelector(".time");
// let conditionOutPut =document.querySelector(".condition")
// let windOutPut = document.querySelector(".wind")
// let iconOutPut = document.querySelector(".icon")
// let cloudOutPut = document.querySelector(".cloudy")

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
          `${response.data.main.temp}°C`
          document.querySelector(".humidity").innerHTML=
          `${response.data.main.humidity}%`
          document.querySelector(".feels_like").innerHTML=
          `${response.data.main.feels_like}°C`
          document.querySelector(".min_temp").innerHTML=
          `${response.data.main.temp_min}°C`
          document.querySelector(".cloudy").innerHTML=
          `${response.data.weather1.description}`
})
 .catch(function (error) {
  // handle errorf
  console.log(error);
})

}   


