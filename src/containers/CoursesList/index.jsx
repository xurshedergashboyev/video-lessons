import {Wrapper, FirstCircle, SecondCircle, ThirdCircle} from "./style";
import OurCourses from "../../components/OurCourses";
import CoursesCategory from "../../components/CoursesCategory";
import {RightLongImage} from "../../components/OurCourses/style";
import rightImage from '../../assets/images/web01.png'
import FormSection from "../../components/FormSection";


const CoursesList = () => {
    return (
        <Wrapper>
            <RightLongImage src={rightImage}/>
            <FirstCircle />
            <SecondCircle />
            <ThirdCircle />
            <OurCourses />
            <CoursesCategory />
            <FormSection />
        </Wrapper>
    )
}

export default CoursesList;