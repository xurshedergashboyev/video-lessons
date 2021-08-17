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
        img: threedMax,
        name: '3d Max'
    },
    {
        id: 2,
        img: word,
        name: 'Office Word'
    },
    {
        id: 3,
        img: photoshop,
        name: 'Adobe Photoshop'
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