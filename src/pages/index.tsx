import { GetStaticProps } from "next";
import Course from "../components/Course";
import Theme from "../components/Theme";
import ICourse from "../context/interfaces/ICourse";
import * as S from "../styles/Home/styled"

interface IHome {
  courses: ICourse[]
}

export default function Home(props: IHome) {

  return (
    <Theme>
      <S.Container>
        <S.Courses>
          <S.Title>
            <h2>Courses for You</h2>
          </S.Title>

          {
            props.courses.map(data => (
              <Course
                id={data.id}
                discount={data.discount}
                image={`${data.image}`}
                price={data.price}
                title={data.title}
                description={data.description}
                key={data.id}
              />
            ))
          }
        </S.Courses>
      </S.Container>
    </Theme>
  )
}


export const getStaticProps: GetStaticProps = async () => {

  const response = await fetch(`http://localhost:3000/api/courses/all-courses`);
  const courses = await (await response.json()).courses;

  return {
    props: {
      courses
    },
    revalidate: 2
  }
}