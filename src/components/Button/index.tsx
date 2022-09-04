import { ReactNode } from "react";
import * as S from "./styled";

interface IButton {  
  children: ReactNode
}

const Button = ({ children }: IButton) => {
  return <>
    <S.Container>
      {children}
    </S.Container>
  </>
}

export default Button;