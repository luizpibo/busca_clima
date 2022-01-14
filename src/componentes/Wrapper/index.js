import Styled from "styled-components";

const Wrapper = Styled.div`
    background-color:  #FB8B16;
    border-radius: 1rem;
    padding: 1rem;
    height: fit-content;
    width: 80%;

    @media (max-width: 768px) {
        width: 90%;
        margin: 2rem 0;
    };
`;

export default Wrapper;