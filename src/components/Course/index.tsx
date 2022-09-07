import Image from "next/image";
import ICourse from "../../context/interfaces/ICourses";
import Button from "../Button";

import * as S from "./styled";

interface ICourseComponent extends Omit<ICourse, "id"> {
  description?: string[],

}

const Course = ({ price, title, discount, description, image }: ICourseComponent) => {
  return <>
    <S.Container>
      <S.Title>{title}</S.Title>
      <S.CourseImage>
        <Image src={image} width={150} height={150} />
      </S.CourseImage>
      <S.Date>
        <S.Description>
          <ul>
            {description?.map((data, index) => (
              <li style={{
                backgroundColor: (index % 2) == 0 ? 'rgba(255, 255, 255, .3)' : 'rgba(0, 0, 0, .3)'
              }} key={index}>{data}</li>
            ))}
          </ul>
        </S.Description>
        <S.Features>
          <Button>
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