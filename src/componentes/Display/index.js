import React from "react";
import { Container, Icon, Info } from "./styles";

function Display({ cityName, title, wheatherEmoji, temp, humidity, description }) {
  return (
    <Container alt={`Clima ${title}`} >
      <Icon alt={wheatherEmoji}>{wheatherEmoji}</Icon>
      <h2 alt="titulo">{title}</h2>
      <Info alt="lista de informacoes do clima">
        <li>
          Nome da Cidade: <span>{cityName}</span>
        </li>
        <li>
          Temperatura: <span>{temp} °C</span>
        </li>
        <li>
          Umidade: <span>{humidity} %</span>
        </li>
        <li>
          Descrição: <span>{description}</span>
        </li>
      </Info>
    </Container>
  );
}

export default Display;
