import styled from "styled-components";

export const Description = styled.div`
  position: absolute;
  background-color: #706e6e;
  color: white;
  top: 100%;
  width: auto;
  height: 0px;
  overflow: hidden;
  padding: 0px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  opacity: 0;
  transition: .3s ease-in-out;

  ::before {
    top: -7.5px;
    z-index: -1;
    rotate: 45deg;
    position: absolute;
    content: "";
    width: 15px;
    height: 15px;
    background-color: #706e6e;
  }
`;

export const ItemsContainer = styled.div`
  font-size: .70em;  
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin-top: 2.5px;
  padding: 5px;
  width: 20em;
  background-color: rgba(0, 0, 0, .3);

  > button {
    position: absolute;
    right: 6px;
    border: none;
    background: none;
    color: #d11111;
    cursor: pointer;
  }
`

export const Total = styled.h2`
  margin-top: 15px;
  color: #11bd3f;
  font-size: .95em;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  > p {
    letter-spacing: 1.5px;
    color: white;
    font-size: .75em;
  }
`

export const Container = styled.div`
  padding: 10px;
  position: relative;
  color: #999999;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    transform: scale(1.2);
    font-weight: normal;
    ${Description} {
      opacity: 1;
      height: auto;
      padding: 5px;
      overflow: visible;
    }
  }  
`;

export const ItemLenght = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  font-weight: bold;
`;