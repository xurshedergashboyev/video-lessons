import {Wrapper, FirstCircle, SecondCircle, ThirdCircle} from "./style";
import OurCourses from "../../components/OurCourses";
import CoursesCategory from "../../components/CoursesCategory";
import {RightLongImage} from "../../components/OurCourses/style";
import rightImage from '../../assets/images/w.png';
import rightImageRes from '../../assets/images/w-.png';
import FormSection from "../../components/FormSection";
// hook
import useWindowDimensions from "../../hooks";

const CoursesList = () => {
    const {width} = useWindowDimensions()

    return (
        <Wrapper>
            <RightLongImage src={width > 1100 ? rightImage : rightImageRes}/>
            <FirstCircle/>
            <SecondCircle/>
            <ThirdCircle/>
            <OurCourses/>
            <CoursesCategory/>
            <FormSection/>
        </Wrapper>
    )
}

export default CoursesList;