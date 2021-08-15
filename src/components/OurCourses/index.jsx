import {
    Container, FlexCircle,
    FlexCourse,
    FlexCourseImage,
    FlexCourses,
    Heading,
} from "./style";
// images && icons
import courseImage from '../../assets/images/Layer 10 copy 2.png'


const data = [
    {
        id: 1,
        img: courseImage
    },
    {
        id: 2,
        img: courseImage
    },
    {
        id: 3,
        img: courseImage
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