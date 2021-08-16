import {
    Container, FlexCircle,
    FlexCourse,
    FlexCourseImage,
    FlexCourses,
    Heading,
} from "./style";
// images && icons
import threedMax from '../../assets/images/layers/3d max.png';
import word from '../../assets/images/layers/Word.png';
import photoshop from '../../assets/images/layers/Photoshop.png'


const data = [
    {
        id: 1,
        img: threedMax
    },
    {
        id: 2,
        img: word
    },
    {
        id: 3,
        img: photoshop
    },
]

const OurCourses = () => {
    return (
        <Container id="courses">
            <Heading>
                Bizning kurslar
            </Heading>
            <FlexCourses>
                {data.map(course =>
                    <FlexCourse key={course.id}>
                        <FlexCourseImage src={course.img}/>
                        <FlexCircle />
                    </FlexCourse>
                )}
            </FlexCourses>
        </Container>
    )
}

export default OurCourses;