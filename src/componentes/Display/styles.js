import Styled from "styled-components";

export const Container = Styled.div`
    display: grid;
    grid-template: 2fr 1fr 2fr/ 1fr;
    h2 {
      margin: auto;
      text-align: center;
      text-transform: uppercase;
    }
`;

export const Icon = Styled.span`
    font-size: 5rem;
    text-align: center;
    margin: auto;
`;

export const Info = Styled.ul`
  background-color: #fDfDfD33;
  border-radius: 0.5rem;
  display: grid;
  grid-template: 1fr 1fr 1fr/ 1fr;
  list-style: none;
  padding: 0 0.5rem;
  li{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.5rem 0;
  }
  span {
    font-size: 1.5rem;
    font-weight: bold;
  }
`;
