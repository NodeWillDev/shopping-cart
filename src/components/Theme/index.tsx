import { ReactNode } from "react";
import Header from "../Header";
import * as S from "./styled";

interface ITheme {
  children: ReactNode
}

const Theme = ({ children }: ITheme) => {
  return <>
    <S.Container>
      <S.Header>
        <Header />
      </S.Header>
      <S.Page>
        {children}
      </S.Page>

    </S.Container>
  </>
}

export default Theme;