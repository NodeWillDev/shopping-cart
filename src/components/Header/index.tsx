import Logo from "../Logo";
import NavItem from "./NavItem";
import * as S from "./styled";
import Cart from "../Cart";


const Header = () => {
  return <>
  <S.Container>
    <Logo />

    <Cart />

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