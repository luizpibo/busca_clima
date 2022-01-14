import React, { useState, useEffect } from "react";
import axios from "axios";

import Container from "./componentes/Container";
import Wrapper from "./componentes/Wrapper";
import Input from "./componentes/Input";
import Main from "./componentes/Main";
import Display from "./componentes/Display/index";

function App() {
  const [location, setLocation] = useState(false);
  const [city, setCity] = useState("");
  const [wheather, setWheather] = useState({});
  const [localwheather, setLocalwheather] = useState({});

  const wheatherEmoji = {
    "céu limpo": "☀️",
    "algumas nuvens": "🌤",
    "nuvens dispersas": "⛅️",
    "nublado": "☁️",
    "chuva moderada": "🌧",
    "chuva": "🌧",
    "trovoada": "⛈",
    "neve": "❄️",
    "nevoa": "🌫",
  };

  async function getWeatherByCityLocation({ lat, lon, dispatch }) {
    var parseData = {};
    const response = await axios.get(
      "https://api.openweathermap.org/data/2.5/weather",
      {
        params: {
          lat: lat,
          lon: lon,
          appid: process.env.REACT_APP_OPEN_WHEATHER_KEY,
          lang: "pt_br",
          units: "metric",
        },
      }
    );

    if (response.status === 404 || response.status === 400) {
      window.alert("Cidade não encontrada");
      dispatch(parseData);
      return;
    }

    if (response.status === 200) {
      const responseJson = await response.data;
      parseData = {
        description: responseJson.weather[0].description,
        humidity: responseJson.main.humidity,
        name: responseJson.name,
        temp: responseJson.main.temp,
      };
      console.log("clima por localizacao: ", parseData);
      dispatch(parseData);
    }
  }

  async function getWeatherByCityName({ city, dispatch }) {
    setCity("");
    var parseData = {};
    const response = await axios.get(
      "https://api.openweathermap.org/data/2.5/weather",
      {
        params: {
          q: city,
          appid: process.env.REACT_APP_OPEN_WHEATHER_KEY,
          lang: "pt_br",
          units: "metric",
        },
      }
    );

    if (response.status === 400 || response.status === 404) {
      window.alert("Erro ao encontrar cidade");
      dispatch(parseData);
      return;
    }

    if (response.status === 200) {
      const responseJson = await response.data;
      parseData = {
        description: responseJson.weather[0].description,
        humidity: responseJson.main.humidity,
        temp: responseJson.main.temp,
        name: responseJson.name,
      };
      dispatch(parseData);
    }
  }

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      getWeatherByCityLocation({
        lat: position.coords.latitude,
        lon: position.coords.longitude,
        dispatch: setLocalwheather,
      });
      setLocation(true);
    });
  }, []);

  function handleChange(e) {
    setCity(e.target.value);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    getWeatherByCityName({ city: city, dispatch: setWheather });
  }

  return (
    <Container alt="tela principal">
      <Wrapper alt="campo de formulário">
        <Input
          value={city}
          onChange={handleChange}
          handleSubmit={handleSubmit}
        />
        <Main>
          <Display
            cityName={wheather.name}
            description={wheather.description}
            humidity={wheather.humidity}
            temp={wheather.temp}
            title="Buscado"
            wheatherEmoji={wheatherEmoji[wheather.description]}
          />
          {location ? (
            <Display
              cityName={localwheather.name}
              description={localwheather.description}
              humidity={localwheather.humidity}
              temp={localwheather.temp}
              title="Local"
              wheatherEmoji={wheatherEmoji[localwheather.description]}
            />
          ) : (
            <h2>Ative a localização do navegador e atualize a pagina</h2>
          )}
        </Main>
      </Wrapper>
    </Container>
  );
}

export default App;
