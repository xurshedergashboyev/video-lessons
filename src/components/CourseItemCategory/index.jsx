import {useState} from "react";
import {Course, FlexCourse, FlexCourseImage, FlexCourseName, FlexCourses, MoreCourses} from "../CoursesCategory/style";
import showMore from "../../assets/icons/arrow-right-circle-line.svg";
import {Container, Attr} from "./style";
import PopupForm from "../PopupForm";

const CourseItemCategory = (props) => {
    const [seeMore, setSeeMore] = useState(false);
    const [isOpen, setIsOpen] = useState(false)
    const [show, setShow] = useState({isOpen:false,selectedCourse: {}});

    const showMoreClick = () => {
        setSeeMore(!seeMore);
    }

    const handleOpen = (category) => {
        setIsOpen(!isOpen)
        setShow({ isOpen: true, selectedCourse: {value: category, label: category}})
    }

    return (
        <>
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
                        <Attr onClick={() => handleOpen(img.name)}>
                            <FlexCourse key={index}>
                                <FlexCourseImage src={img.img} alt="course-item"/>
                            </FlexCourse>
                            <FlexCourseName>{img.name}</FlexCourseName>
                        </Attr>
                    )}
                </FlexCourses>
            </Container>
            <PopupForm selectedCourse={show.selectedCourse} closePopUp={()=>setShow({isOpen:false,selectedCourse:{}})} isOpen={show.isOpen}/>
        </>


    )
}

export default CourseItemCategory;