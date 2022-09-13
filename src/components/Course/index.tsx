import Image from "next/image";
import useCart from "../../context/hook/useCart";
import ICourse from "../../context/interfaces/ICourse";
import Button from "../Button";
import CartHoverAdd from "../Button/hover/carthoveradd";
import CartHoverRemove from "../Button/hover/carthoverremove";
import * as S from "./styled";

const Course = ({ price, title, discount, description, image, id }: ICourse) => {

  const { date, dispatch } = useCart();

  const course = {
    id,
    price,
    title,
    description,
  };

  const isExists = date.some(data => data.id === id)

  const handleClick = () => {
    if (!isExists) {
      dispatch({
        type: 'addItemCart',
        payload: course
      });
    } else {
      dispatch({
        type: 'removeItemCart',
        payload: course
      });
    }
    console.log(date)
  }

  console.log(description?.split(' ').length)

  return <>
    <S.Container exists={isExists} >
      <S.Title>{title}</S.Title>
      <S.CourseImage>
        <Image src={image} width={150} height={150} />
      </S.CourseImage>
      <S.Date>
        <S.Description lenght={description?.split(' ').length}  >
          <h3>SEE DESCRIPTION</h3>
          <S.DescriptionContents>
            <p>{description}</p>
          </S.DescriptionContents>
        </S.Description>
        <S.Features>
          <Button
            onClick={handleClick}
            children_hover={
              isExists ?
                (< CartHoverRemove />) : (<CartHoverAdd />)
            }
          >
            {price.toLocaleString('pt-br', {
              style: 'currency',
              currency: 'BRL'
            })}
            <br />
            <S.Discount>
              {discount?.toLocaleString('pt-br', {
                style: 'currency',
                currency: 'BRL'
              })}
            </S.Discount>

          </Button>
        </S.Features>
      </S.Date>
    </S.Container>
  </>
}

export default Course;