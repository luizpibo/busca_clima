import Styled from "styled-components";

const Main = Styled.main`
    background:  #FDFDFD77;
    border-radius: 0.5rem;
    color: #FDFDFD;
    display: grid; 
    gap: 1rem;
    grid-template: 1fr /1fr 1fr;
    padding: 1rem;
    width: 100%;
    text-align: center;
    @media (max-width: 600px) {
        grid-template: 1fr 1fr /1fr ;
    }
`;

export default Main;
