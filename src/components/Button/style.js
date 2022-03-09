import styled from 'styled-components'

export const ButtonStyled = styled.button`
    position: relative;
    display: inline-block;
    margin: 15px;
    padding: 5px;
    text-align: center;
    font-size: 16px;
    letter-spacing: 1px;
    text-decoration: none;
    color: #725AC1;
    background: transparent;
    cursor: pointer;
    transition: ease-out 0.5s;
    border-radius: 30px;
    border: 2px solid #725AC1;
    border-radius: 10px;
    box-shadow: inset 0 0 0 0 #725AC1;
    :hover {
    color: white;
    box-shadow: inset 0 -100px 0 0 #725AC1;
    }
    :active {
    transform: scale(0.9);
    }
`