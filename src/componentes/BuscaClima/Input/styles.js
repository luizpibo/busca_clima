import Styled from "styled-components";

export const InputContainer = Styled.div`
    align-items: center;
    border-radius: 0.5rem;
    color: #FDFDFD;
    display: grid;
    grid-template: 1fr / 10fr 4fr;
    margin-bottom: 1rem;
    min-height: 4fr;
    @media (max-width: 370px) {
        grid-template: 1fr 1fr / 1fr;
        gap: 0.5rem;
    };
`;

export const InputFild = Styled.input`
    border: none;
    border-radius: 0.5rem 0 0 0.5rem;
    flex: 1;
    height: 3rem;
    padding: 0 0.5rem;
    @media (max-width: 370px) {
        border-radius: inherit;
    };
    `;

export const Button = Styled.button`
    background: #F1F1F1;
    border: none;
    border-radius: 0 0.5rem 0.5rem 0;
    height: 3rem;
    padding: 0.5rem 1rem;
    transition: 0.3s;
    :active{
        background: #FDFDFD;
    }
    @media (max-width: 370px) {
        border-radius: inherit;
    };

`;
