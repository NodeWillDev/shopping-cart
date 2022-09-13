import useCart from "../../context/hook/useCart";
import * as S from "./styled";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsTrash } from "react-icons/bs";

const Cart = () => {

  const { date, dispatch } = useCart();

  const total = date.reduce((value, b) => { return b.price + value }, 0);

  return <>
    <S.Container>
      <S.Description>
        {date.map((course, index) => (
          <S.ItemsContainer key={index}>
            <p>{course.title}</p>
            <p>{course.price.toLocaleString('pt-br', {
              style: 'currency',
              currency: 'BRL'
            })}</p>
            <button onClick={() => {
              dispatch({
                type: 'removeItemCart',
                payload: {
                  id: course.id,
                  title: course.title,
                  price: course.price,
                }
              })
            }} >
              <BsTrash />
            </button>
          </S.ItemsContainer>
        ))}
        <S.Total>
          Total:
          <p>
            {total.toLocaleString('pt-br', {
              style: 'currency',
              currency: 'BRL'
            })}
          </p>
        </S.Total>
      </S.Description>
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