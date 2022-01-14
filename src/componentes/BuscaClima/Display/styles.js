import Styled from "styled-components";

export const DisplayContainer = Styled.section`
    display: grid;
    grid-template: 1fr;
    min-height: 10rem;
    text-align: center;
    text-shadow: 1px 1px 1px  rgba(0, 0, 0, 0.5);

    span {
      font-size: 2rem;
      font-weight: 900;
      vertical-align: baseline;
      text-transform: uppercase;
    }

    figure {
      font-size: 4rem;
    }
    
    .temp{
      font-size: 4rem;
    }
`;

export const Info = Styled.ul`
  background-color: #FB8B1633;
  border-radius: 0.5rem;
  display: grid;
  grid-template: 1fr / 1fr 1fr;
  list-style: none;
  padding: 0 0.5rem;

  li{
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    padding: 0.5rem 0;

    div{
      display: grid;
    }
  }

  .infos{
    font-size: 1.5rem;
  }

  @media (max-width: 1000px) {
    grid-template: 2fr 1fr/ 1fr;
  };
`;
