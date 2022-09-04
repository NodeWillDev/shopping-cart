import Image from "next/image";
import Button from "../Button";
import * as S from "./styled";

interface ICoourse {
  title: string,
  price: number,
  duration: number,
  description: string,
  image_dir: string,
  discount?: number,

}

const Course = ({ price, title, discount, description, duration, image_dir }: ICoourse) => {
  return <>
    <S.Container>
      <S.Title>{title}</S.Title>
      <S.CourseImage>
        <Image src={image_dir} width={125} height={150} />
      </S.CourseImage>
      <S.Date>
        <S.Description>
          {description}
        </S.Description>
        <S.Features>
          <Button>{price.toLocaleString('pt-br', {
            style: 'currency',
            currency: 'BRL'
          })}</Button>
        </S.Features>
      </S.Date>
    </S.Container>
  </>
}

export default Course;