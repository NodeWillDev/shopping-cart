import { ReactNode, useState } from "react";
import * as S from "./styled";

interface IButton {
  children: ReactNode
  onClick: () => void,
  children_hover?: ReactNode
}

const Button = ({ children, children_hover, onClick }: IButton) => {

  const [hover, setHover] = useState<boolean>(false);

  return <>
    <S.Container
      onClick={onClick}
      hover_show={hover}
      onMouseEnter={() => children_hover && setHover(true)}
      onMouseLeave={() => children_hover && setHover(false)}
    >
      <S.Children>
        {children}
      </S.Children>
      <S.ChildrenHover>
        {children_hover}
      </S.ChildrenHover>
    </S.Container>
  </>
}

export default Button;