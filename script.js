// Define a function to get weather data
let getWeather = () => {
    let cityName = document.querySelector(".search").value;

    // Use Axios to make the API request
    axios.get(`https://api.openweathermap.org/data/2.5/weather?units=metric&appid=d1f19bdfe0425dd932f13b7692fc00d3&q=${cityName}`)
        .then(function (response) {
            // Clear previous data
            document.querySelector(".name").innerHTML = "";
            document.querySelector(".temp").innerHTML = "";
            document.querySelector(".humidity").innerHTML =
                `${response.data.main.humidity}%`

            document.querySelector(".feels_like").innerHTML = "";

            document.querySelector(".min_temp").innerHTML = "";
            document.querySelector(".max_temp").innerHTML = "";
            document.querySelector(".condition").innerHTML = "";
            document.querySelector("#cloudy").innerHTML = "";
            document.querySelector(".time").innerHTML = "";
            document.querySelector(".date").innerHTML = "";
            // Clear other elements similarly

            // Update HTML elements with new data
            document.querySelector(".name").innerHTML = response.data.name;
            document.querySelector(".temp").innerHTML = `${Math.round(response.data.main.temp)}°C`;
            document.querySelector(".humidity").innerHTML = `${response.data.main.humidity}%`;
            document.querySelector(".feels_like").innerHTML = `${Math.round(response.data.main.feels_like)}°C`
            document.querySelector(".min_temp").innerHTML = `${Math.round(response.data.main.temp_min)}°C`

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

            // Update weather condition and icon
            document.querySelector(".condition").innerHTML = response.data.weather[0].description;
            document.querySelector(".icon").setAttribute("src", `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`);

            // Update cloudy element
            document.querySelector("#cloudy").innerHTML = response.data.weather[0].main;

            // Set background and text color based on weather conditions
            // Update other conditions similarly

            // Use classList.add to add classes
            let aaa = document.querySelector("#aaa");
            aaa.style.backgroundImage = `url('img/day/${response.data.weather[0].main.toLowerCase()}.jpg')`;
            aaa.style.color = "#fff"; // or "#000" or any color you want

        })
        .catch(function (error) {
            console.log(error);
        });
}

// Attach the function to the form's submit event
document.querySelector("#location").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission
    getWeather(); // Call the function to get and display weather data
});
