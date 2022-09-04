import Logo from "../Logo";
import NavItem from "./NavItem";
import * as S from "./styled";

const Header = () => {
  return <>
  <S.Container>
    <Logo />
    <S.Nav>
      <NavItem 
      title="Produtos" />
      <NavItem 
      title="About" />
    </S.Nav>
  </S.Container>
  </>
}

export default Header;