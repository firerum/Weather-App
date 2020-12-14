const btn = document.getElementById("btn");
const inputValue = document.getElementById("city");

function getWeather() {
   const city = document.getElementById("city").value; // User Input
   const proxy = "https://cors-anywhere.herokuapp.com/";
   const key = "8048ebe6c1307d1c34470a84c3c5be44";
   const api = `${proxy}api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`; // end-point/resource/api
    
   // Get the DOM elements
   const description = document.querySelector(".description");
   const cityName = document.querySelector(".city");
   const country = document.querySelector(".country");
   const temp = document.querySelector(".temp");
   const humidity = document.querySelector(".humidity");
   const pressure = document.querySelector(".pressure");
   const feelsLike = document.querySelector(".feels-like");
   const wind = document.querySelector(".wind");

   // Fetch data from the OpenWeather API
   fetch(api)
      .then(response => response.json())
      .then(data => {
          //Extract each data and put them in the DOM
          temp.textContent = Math.round(data["main"]["temp"] - 273);
          pressure.innerHTML = `Pressure: <span>${Math.round(data["main"]["pressure"])}hpa</span> `;
          feelsLike.innerHTML = `Feels Like: <span>${Math.round(data["main"]["feels_like"] - 273)}&#176;C</span>`;
          wind.innerHTML = `Wind: <span>${Math.round(data["wind"]["speed"])}km/hr</span>`;
          humidity.innerHTML = `Humidity: <span>${data["main"]["humidity"]}%</span>`;
          country.textContent = data["sys"]["country"];
          cityName.textContent = `${data["name"]},`;
          description.textContent = data["weather"][0]["description"];
          //const {id} = data["weather"][0];

         // Display icon if it matches the weather id
         /*  if(id >= 200 && id < 290) {
              icon.src = "http://openweathermap.org/img/wn/11d@2x.png";
          } else if(id >= 300 && id < 350) {
              icon.src = "http://openweathermap.org/img/wn/09d@2x.png";
          } else if(id >= 500 && id < 505) {
              icon.src = "http://openweathermap.org/img/wn/10d@2x.png";
          } else if(id >= 506 && id < 532) {
              icon.src = "http://openweathermap.org/img/wn/09d@2x.png";
          } else if(id >= 600 && id < 650) {
              icon.src = "http://openweathermap.org/img/wn/13d@2x.png";
          } else if(id >= 700 && id < 750) {
              icon.src = "http://openweathermap.org/img/wn/50d@2x.png";
          } else if(id == 800) {
              icon.src = "http://openweathermap.org/img/wn/01n@2x.png";
          } else if(id == 801) {
              icon.src = "http://openweathermap.org/img/wn/02d@2x.png";
          } else if(id == 802) {
              icon.src = "http://openweathermap.org/img/wn/3d@2x.png";
          } else if(id == 803 || id == 804) {
              icon.src = "http://openweathermap.org/img/wn/4d@2x.png";
          } */
          //console.log(id);
          //console.log(data);
      });
}

// Add event listener to the button
btn.addEventListener("click", getWeather);
inputValue.addEventListener("keypress", e => {
        if(e.keyCode == 13) 
           getWeather(); 
});


// Show user's full date
function userDate() {
    const userCurrentDate = document.querySelector(".current-date");
    // Make a new date object
    const myDate = new Date();

    // Put the date into the DOM
    userCurrentDate.innerHTML = `<span>${myDate}</span>`;
}

userDate();

