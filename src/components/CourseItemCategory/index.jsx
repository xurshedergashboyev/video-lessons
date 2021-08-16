import {useState} from "react";
import {Course, FlexCourse, FlexCourseImage, FlexCourses, MoreCourses} from "../CoursesCategory/style";
import showMore from "../../assets/icons/arrow-right-circle-line.svg";
import {Container} from "./style";

const CourseItemCategory = (props) => {
    const [seeMore, setSeeMore] = useState(false);

    const showMoreClick = () => {
        setSeeMore(!seeMore);
    }

    return (
        <Container>
            <Course onClick={() => {
                showMoreClick();
                props.setOpen(props.index)
            }}>
                {props.name}
                <MoreCourses rotate={props.open === props.index && seeMore} src={showMore}/>
            </Course>
            <FlexCourses width={props.img.length} opacity={props.open === props.index && seeMore}>
                {props.img.map(img =>
                    <FlexCourse>
                        <FlexCourseImage src={img} alt="course-item"/>
                    </FlexCourse>
                )}
                {/*)}*/}
            </FlexCourses>
        </Container>

    )
}

export default CourseItemCategory;