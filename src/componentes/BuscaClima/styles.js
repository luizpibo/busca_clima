import Styled from "styled-components";

export const Wrapper = Styled.div`
    background-color:  #FB8B1655;
    backdrop-filter: blur(5px);
    border-radius: 1rem;
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.4);
    height: fit-content;
    padding: 1rem;
    margin: 1rem auto;
    width: 80%;
    @media (max-width: 400px) {
        width: 90%;
        margin: 1rem auto;
    };
`;

export const Main = Styled.main`
    background:  #FDFDFD77;
    border-radius: 0.5rem;
    box-shadow:  inset 0 0 0.2rem rgba(0, 0, 0, 0.4);
    color: #FDFDFD;
    display: grid; 
    grid-template: 1fr;
    min-height: 22.4rem;
    padding: 1rem;
    width: 100%;
    text-align: center;
`;
