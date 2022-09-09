import styled, { css } from "styled-components";

interface IStyled {
  hover_show?: boolean
}

export const Children = styled.div`
  transform: scale(1);
  transition: .2s;    
`

export const ChildrenHover = styled.div`
  transform: scale(0);
  transition: .2s;  
  position: absolute;
`

export const Container = styled.button<IStyled>`  
  background: none;
  border: none;  
  color: #3b3b3b;
  font-size: 1.2em;  
  cursor: pointer;
  letter-spacing: 1px;
  padding: 15px;    
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  ${props => props.hover_show &&
    css`
    :hover ${ChildrenHover}{
    transform: scale(1);
  }
  :hover ${Children} {
  transform: scale(0);
}`}

`