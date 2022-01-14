import React, { useState, useEffect } from "react";
import { DisplayContainer, Info } from "./styles";
import { getWeather } from "../../../services/api";

function Display({ wheatherProps }) {
  const [wheather, setWheather] = useState({});
  useEffect(() => {
    wheatherProps.cityName
      ? getWeather({
          type: "city",
          setWeather: setWheather,
          cityName: wheatherProps.cityName,
        })
      : navigator.geolocation.getCurrentPosition((location) => {
          getWeather({
            type: "latlon",
            setWeather: setWheather,
            lat: location.coords.latitude,
            lon: location.coords.longitude,
          });
        });
  }, [wheatherProps]);

  return (
    <DisplayContainer alt={"Informações principais"}>
      {wheather.name ? (
        <>
          <figure>{wheather.wheatherEmoji}</figure>
          <span className="temp">{wheather.temp}&deg;C</span>

          <h2 alt="Nome da cidade">{wheather.name}</h2>

          <Info alt="lista de informacoes do clima">
            <li>
              <figure>💧</figure>
              <div>
                <span className="infos">{wheather.humidity}&#37;</span>
                <span className="infos">Umidade</span>
              </div>
            </li>
            <li>
              <span className="infos">{wheather.description}</span>
            </li>
          </Info>
        </>
      ) : null}
    </DisplayContainer>
  );
}

export default Display;
