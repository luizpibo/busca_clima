import React from "react";
import { useState } from "react";
import { Wrapper, Main } from "./styles";
import Input from "./Input";
import Display from "./Display";

function BuscaClima() {
  const [city, setCity] = useState("");
  const [wheather, setWheather] = useState({});

  function handleChange(e) {
    setCity(e.target.value);
  }

  function handleWheather(e) {
    e.preventDefault();
    if (city.length > 0) {
      setWheather({ cityName: city });
      setCity("");
    }
  }

  return (
    <Wrapper alt="campo de formulário">
      <Input
        value={city}
        onChange={handleChange}
        handleSubmit={handleWheather}
      />
      <Main>
        <Display wheatherProps={wheather} />
      </Main>
    </Wrapper>
  );
}

export default BuscaClima;
