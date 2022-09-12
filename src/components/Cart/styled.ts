import styled from "styled-components";

export const Container = styled.div`  
  padding: 10px;    
  position: relative;
  color: #7a7979;
  cursor: pointer;
  transition: .3s;

  :hover  {
    transform: scale(1.2);
    color: #232423;
    opacity: .1;
    font-weight: normal;
  }
`

export const ItemLenght = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  font-weight: bold;
`