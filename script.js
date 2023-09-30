function getWeather() {
    var city = document.getElementById("city").value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=964f1adddebb1539f1707cfb697575e5&lang=en`;
    console.log(city);
  
    fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        document.getElementById("weather-info").innerHTML = `
        <h1>city name: ${data.name}</h1>
        <h2>main temp: ${data.main.temp}°C</h2>
        <h2>feels like: ${data.main.feels_like}°C</h2>
        <h3>clouds: ${data.weather[0].main}</h3>
        `;

      });
  }