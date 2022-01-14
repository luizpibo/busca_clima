import Styled from "styled-components";

const Container = Styled.div`
    align-items: center;
    display: grid;
    grid-template: 1fr / 1fr 1fr;
    justify-items: center;
    min-height: 100vh;
    width: 100%;

    @media (max-width: 750px) {
        grid-template: 1fr / 1fr;
    }
`;

export default Container;