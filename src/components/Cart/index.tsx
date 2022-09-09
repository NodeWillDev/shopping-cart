import useCart from "../../context/hook/useCart";
import * as S from "./styled";
import { AiOutlineShoppingCart } from "react-icons/ai";

const Cart = () => {

  const { date, dispatch } = useCart();

  return <>
    <S.Container>      
        <AiOutlineShoppingCart
          size={30}          
        />
        <S.ItemLenght>
          <span>{date.length || 0}</span>
        </S.ItemLenght>
    </S.Container>

  </>
}

export default Cart;