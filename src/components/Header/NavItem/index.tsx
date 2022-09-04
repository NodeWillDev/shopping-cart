import { ReactNode } from "react";
import * as S from "./styled";

interface INavItem {
  title: string,
  icon?: ReactNode,
}

const NavItem = ({ title, icon }: INavItem) => {
  return <>
    <S.Container>
      <span>{icon}</span>
      <p>{title}</p>

    </S.Container>
  </>
}

export default NavItem;