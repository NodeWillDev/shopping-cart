import { GetStaticProps } from "next";
import { useEffect } from "react";
import Course from "../components/Course";
import Theme from "../components/Theme";
import ICourse from "../context/interfaces/ICourses";
import * as S from "../styles/Home/styled"

interface IHome {
  courses: ICourse[]
}

export default function Home(props: IHome) {

  useEffect(() => {
    console.log(props.courses)
  }, [])

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
                discount={data.discount}
                image={`/images/${data.image}.png`}
                price={data.price}
                title={data.title}
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

  const response = await fetch(`${process.env.API}/courses/all-courses`);
  const courses = await (await response.json()).courses;

  return {
    props: {
      courses
    },
    revalidate: 2
  }
}