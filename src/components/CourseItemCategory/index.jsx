import {useState} from "react";
import {Course, FlexCourse, FlexCourseImage, FlexCourseName, FlexCourses, MoreCourses} from "../CoursesCategory/style";
import showMore from "../../assets/icons/arrow-right-circle-line.svg";
import {Container, Attr} from "./style";

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
                    <Attr href="#form">
                        <FlexCourse key={index}>
                            <FlexCourseImage src={img.img} alt="course-item"/>
                            {/*<FlexCourseName>{}</FlexCourseName>*/}
                        </FlexCourse>
                        <FlexCourseName>{img.name}</FlexCourseName>
                    </Attr>
                ) }
                {/*)}*/}
            </FlexCourses>
        </Container>

    )
}

export default CourseItemCategory;