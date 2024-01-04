
const apiKey= "6539b14ed68de3c8f75731b64096e181"
const apiUrl= "https://api.openweathermap.org/data/2.5/weather?&units=metric"
const Bar = document.querySelector(".search input")
const Btn = document.querySelector(".search button")
const icon = document.querySelector(".icon")

async function CheckWeather(city){
    const response = await fetch(apiUrl + `&q=${city}` +`&appid=${apiKey}`);
    if (response.status == 404){
        document.querySelector(".error").style.display = "block"
        document.querySelector(".weather").style.display = "none"
    }
    else{
        var data = await response.json()
        document.querySelector(".city").innerHTML = data.name
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c"
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%"
        document.querySelector(".wind").innerHTML = data.wind.speed + "km/h"
        if (data.weather[0].main === "Clouds"){
            icon.src="images/clouds.png"
        }
        else if (data.weather[0].main === "Rain"){
            icon.src="images/rain.png"
        }
        else if (data.weather[0].main === "Drizzle"){
            icon.src="images/drizzle.png"
        }
        else if (data.weather[0].main === "Mist"){
            icon.src="images/mist.png"
        }
        else if (data.weather[0].main === "Clear"){
            icon.src="images/mist.png"
        }
        document.querySelector(".weather").style.display="block"
        document.querySelector(".error").style.display="none"
    }
}

Btn.addEventListener("click" , ()=>{
    CheckWeather(Bar.value)
})

