import {Course, FlexCourse, FlexCourseImage, FlexCourses, MoreCourses} from "../CoursesCategory/style";
import showMore from "../../assets/icons/arrow-right-circle-line.svg";
import {useState} from "react";
import courseImage from "../../assets/images/Layer 10 copy 2.png";

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


const CourseItemCategory = (props) => {
    const [seeMore, setSeeMore] = useState(false);

    const showMoreClick = () => {
        setSeeMore(!seeMore);
    }

    return (
        <div>
            <Course onClick={() => {
                showMoreClick();
                props.setOpen(props.index)
            }}>
                {props.name}
                <MoreCourses rotate={props.open === props.index} src={showMore}/>
            </Course>
            {/*{*/}
            {/*    seeMore ?*/}
            <FlexCourses opacity={props.open === props.index}>
                {data.map(course =>
                    <FlexCourse key={course.id}>
                        <FlexCourseImage src={course.img}/>
                    </FlexCourse>
                )}
            </FlexCourses>
            {/*        : null*/}
            {/*}*/}
        </div>

    )
}

export default CourseItemCategory;