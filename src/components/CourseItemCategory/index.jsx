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
                 {/*eslint-disable-next-line no-use-before-define*/}
                <MoreCourses rotate={props.open === props.index && seeMore} src={showMore}/>
            </Course>
            {/*eslint-disable-next-line no-use-before-define*/}
            <FlexCourses width={props.img.length} opacity={props.open === props.index && seeMore}>
                {props.img.map((img, index) =>
                    <FlexCourse key={index}>
                        <FlexCourseImage src={img} alt="course-item"/>
                    </FlexCourse>
                )}
                {/*)}*/}
            </FlexCourses>
        </Container>

    )
}

export default CourseItemCategory;