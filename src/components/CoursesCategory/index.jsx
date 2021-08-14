import {useState} from "react";
import {
    Course,
    CoursesList,
    CoursesListHeading,
    FlexCourse,
    FlexCourseImage,
    FlexCourses,
    MoreCourses
} from "./style";
// images && icons
import showMore from "../../assets/icons/arrow-right-circle-line.svg";
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
    {
        id: 4,
        img: courseImage
    },
]

const courses = [
    {
        id: 1,
        name: 'Office dasturlari'
    },
    {
        id: 2,
        name: 'Grafik Dizayn'
    },
    {
        id: 3,
        name: 'IT kurslari'
    },
    {
        id: 4,
        name: 'Buxgalteriya'
    },
    {
        id: 5,
        name: '3d kurslari'
    }
]


const CoursesCategory = () => {
    const [seeMore, setSeeMore] = useState(false);

    const showMoreClick = () => {
        setSeeMore(!seeMore);
    }
    return (
        <CoursesList>
            <CoursesListHeading>
                Kurslar ro'yhati
            </CoursesListHeading>
            {courses.map(item =>
                <Course onClick={showMoreClick}>
                    Office dasturlari
                    <MoreCourses rotate={seeMore} src={showMore}/>
                </Course>
            )}
            {seeMore ?
                <FlexCourses>
                    {data.map(course =>
                        <FlexCourse key={course.id}>
                            <FlexCourseImage src={course.img}/>
                        </FlexCourse>
                    )}
                </FlexCourses>
                : null
            }
        </CoursesList>
    )
}

export default CoursesCategory;