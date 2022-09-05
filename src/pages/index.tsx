import Course from "../components/Course";
import Theme from "../components/Theme"; 1
import * as S from "../styles/Home/styled"

export default function Home() {

  return (
    <Theme>
      <S.Container>        
        <S.Courses>
        <S.Title>
          <h2>Courses for You</h2>          
        </S.Title>          
          <Course
            title="CSS3"
            image_dir="/images/css.png"
            price={20}
            description={[
              "Description 1",
              "Description 2",
              "Description 3",
              "Description 4",
              "Description 5",
            ]}
          />
          <Course
            title="TypeScript"
            image_dir="/images/ts.png"
            price={50.2}
            description={[
              "Description 1",
              "Description 2",
              "Description 3",
              "Description 4",
              "Description 5",
            ]}
          />
          <Course
            title="JavaScript"
            image_dir="/images/js.png"
            price={7.15}
            discount={10.5}
            description={[
              "Description 1",
              "Description 2",
              "Description 3",
              "Description 4",
              "Description 5",
            ]}
          />
          <Course
            title="React JS"
            image_dir="/images/react.png"
            price={43.20}
            description={[
              "Description 1",
              "Description 2",
              "Description 3",
              "Description 4",
              "Description 5",
            ]}
          />
          <Course
            title="MySQL"
            image_dir="/images/mysql.png"
            price={20}
            description={[
              "Description 1",
              "Description 2",
              "Description 3",
              "Description 4",
              "Description 5",
            ]}
          />
        </S.Courses>
      </S.Container>
    </Theme>
  )

}
