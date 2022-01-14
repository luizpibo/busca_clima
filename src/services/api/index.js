import axios from "axios";

const baseUrl = "https://api.openweathermap.org/data/2.5/weather";

function getWheatherEmoji(id) {
  switch (true) {
    case id >= 200 && id <= 232:
      return "🌩";
    case id >= 300 && id <= 321:
      return "🌦";
    case id >= 500 && id <= 531:
      return "🌧";
    case id >= 600 && id <= 622:
      return "🌨";
    case id >= 701 && id <= 781:
      return "🌫";
    case id === 800:
      return "☀️";
    case id > 800:
      return "☁️";
    default:
      return "‍";
  }
}

export async function getWeather({ cityName, lat, lon, setWeather, type }) {
  var parseData = {};
  switch (type) {
    case "city":
      var response = await axios.get(baseUrl, {
        params: {
          q: cityName,
          appid: process.env.REACT_APP_OPEN_WHEATHER_KEY,
          lang: "pt_br",
          units: "metric",
        },
      });
      break;
    case "latlon":
      var response = await axios.get(baseUrl, {
        params: {
          lat: lat,
          lon: lon,
          appid: process.env.REACT_APP_OPEN_WHEATHER_KEY,
          lang: "pt_br",
          units: "metric",
        },
      });
      break;
    default:
      return;
  }
  if (response.status === 400 || response.status === 404) {
    window.alert("Erro ao encontrar cidade");
    setWeather(parseData);
    return;
  }

  if (response.status === 200) {
    const responseJson = await response.data;
    parseData = {
      description: responseJson.weather[0].description,
      humidity: responseJson.main.humidity,
      temp: parseInt(responseJson.main.feels_like),
      name: `${responseJson.name}, ${responseJson.sys.country}`,
      wheatherEmoji: getWheatherEmoji(responseJson.weather[0].id),
    };
    setWeather(parseData);
  }
}
