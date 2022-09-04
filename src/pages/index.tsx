import Course from "../components/Course";
import Theme from "../components/Theme";

export default function Home() {
  return (
    <Theme>
      <Course
        title="CSS - Course"
        price={150}
        description="Description"
        duration={20}
        image_dir="/images/css.png"
      />
    </Theme>
  )

}
