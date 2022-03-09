import styled from "styled-components";

export const Container = styled.button`
  background-color: ${(props) => props.background};
  border: 0;
  border-radius: 5px;
  width: 35px;
  height: ${props => props.heigth};
  transition: 0.5s;
  cursor: pointer;
  svg {
    transition: 0.5s;
    color: ${props => props.color}
  }
`;