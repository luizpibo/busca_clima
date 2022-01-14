import Styled from "styled-components";

export const InputContainer = Styled.div`
    align-items: center;
    color: #FDFDFD;
    display: flex;
    height: 3rem;
    margin-bottom: 1rem;
    width: 100%;
`;

export const InputFild = Styled.input`
    border: none;
    border-radius: 0.5rem 0 0 0.5rem;
    flex: 1;
    height: inherit;
    padding: 0 0.5rem;
`;

export const Button = Styled.button`
    background: #F3F3F3;
    border: none;
    border-radius: 0 0.5rem 0.5rem 0;
    height: inherit;
    padding: 0.5rem 1rem;
    transition: 0.3s;
    :active{
        background: #FDFDFD;
    }
`;
