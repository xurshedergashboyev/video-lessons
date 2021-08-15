import {useState} from "react";
import {
    CoursesList,
    CoursesListHeading,
} from "./style";
// images && icons
import CourseItemCategory from "../CourseItemCategory";


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
    const [opened, setOpened] = useState(null);


    return (
        <CoursesList>
            <CoursesListHeading>
                Kurslar ro'yhati
            </CoursesListHeading>
            {courses.map((item, index) =>
                <CourseItemCategory open={opened} setOpen={setOpened} name={item.name} key={item.id} index={index}/>
            )}
            {/*{seeMore ?*/}
            {/*    <FlexCourses>*/}
            {/*        {data.map(course =>*/}
            {/*            <FlexCourse key={course.id}>*/}
            {/*                <FlexCourseImage src={course.img}/>*/}
            {/*            </FlexCourse>*/}
            {/*        )}*/}
            {/*    </FlexCourses>*/}
            {/*    : null*/}
            {/*}*/}
        </CoursesList>
    )
}

export default CoursesCategory;