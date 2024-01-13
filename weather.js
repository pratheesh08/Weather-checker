
const apikey = "28a9d4b8bf2307243709cfe6af44d58e";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchbox = document.querySelector(".city1");
const searchbtn = document.querySelector(".searchbox button");
const weathericon = document.querySelector('.image');

async function checkWeather(city){
    const response = await fetch(apiurl + city +`&appid=${apikey}`);

    if(response.status==404){
        document.querySelector('.err').style.display ="block";
        document.querySelector('.weather').style.display ="none"
    }
    var data =await response.json();

    console.log(data);
    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector('.humidity').innerHTML = data.main.humidity+ "%";
    document.querySelector('.speed').innerHTML = data.wind.speed +"km/h";
   
    if(data.weather[0].main=="Clouds"){
        weathericon.src = "assets/clouds.png";
    }
    else if(data.weather[0].main=="Clear"){
        weathericon.src = "assets/clear.png";
    }
    else if(data.weather[0].main=="Rain"){
        weathericon.src = "assets/clear.png";
    }
    else if(data.weather[0].main=="clear"){
        weathericon.src = "assets/clear.png";
    }
    else if(data.weather[0].main=="Drizzle"){
        weathericon.src = "assets/drizzle.png";
    }
    else if(data.weather[0].main=="Mist"){
        weathericon.src = "assets/mist.png";
    }

    document.querySelector('.weather').style.display = "block";
}
searchbtn.addEventListener('click',()=>{
    checkWeather(searchbox.value);
})