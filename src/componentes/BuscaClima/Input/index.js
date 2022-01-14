import React from "react";
import { InputContainer, InputFild, Button } from "./styles";

function Input({ value, onChange, handleSubmit }) {
  return (
    <InputContainer>
      <InputFild
        value={value}
        type="text"
        placeholder="Digite o nome da cidade"
        onChange={onChange}
        alt="digite o nome da cidade"
      />
      <Button onClick={handleSubmit} alt="buscar clima da cidade">
        Buscar
      </Button>
    </InputContainer>
  );
}

export default Input;
