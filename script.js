let weather = {
  apiKey: "217ec308a17f2610b0490426d4d9e7b8",
  fetchWeather: function (city) {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${this.apiKey}`
    )
      .then((response) => response.json())
      .then((data) => {
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        console.log(name, icon, description, temp, humidity, speed);
        document.querySelector(".city").innerText = name;
        document.querySelector(".icon").src =
          "https://openweathermap.org/img/wn/" + icon + ".png";
        console.log(icon);
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText = temp + "°C";
        document.querySelector(".humidity").innerText =
          "Humidity: " + humidity + "%";
        document.querySelector(".wind").innerText =
          "Wind Speed: " + speed + "km";
      });
  },
  //   displayWeather: (data) => {
  //     const { name } = data;
  //     const { icon, description } = data.weather[0];
  //     const { temp, humidity } = data.main;
  //     const { speed } = data.wind;
  //     console.log(name, icon, description, temp, humidity, speed);
  //     document.querySelector(".city").innerText = name;
  //   },
  //   search: () => {
  //     this.fetchWeather(document.querySelector(".searchBar").value);
  //   },
};

const search = () => {
  weather.fetchWeather(document.querySelector(".searchBar").value);
  document.querySelector(".searchBar").value = "";
};

document.querySelector(".searchBtn").addEventListener("click", search);
document.querySelector(".searchBar").addEventListener("keyup", (e) => {
  if (e.key == "Enter") {
    search();
  }
});

weather.fetchWeather("Noida");
