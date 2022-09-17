import { GetStaticPaths, GetStaticProps } from "next";
import Prisma from "../../lib/prisma";
import Course from "../components/Course";
import Theme from "../components/Theme";
import ICourse from "../context/interfaces/ICourse";
import * as S from "../styles/Home/styled";

interface IHome {
  courses: ICourse[]
}

const Home = ({ courses }: IHome) => {

  return (
    <Theme>
      <S.Container>
        <S.Courses>
          <S.Title>
            <h2>Courses for You</h2>
          </S.Title>

          {
            courses.map(data => (
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
  
  const courses = await Prisma.course.findMany();

  return {
    props: {
      courses
    },
    revalidate: 60
  }
}

export default Home;