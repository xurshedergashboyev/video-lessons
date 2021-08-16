import {Wrapper, FirstCircle, SecondCircle, ThirdCircle} from "./style";
import OurCourses from "../../components/OurCourses";
import CoursesCategory from "../../components/CoursesCategory";
import {RightLongImage} from "../../components/OurCourses/style";
import rightImage from '../../assets/images/rasm.png';
import rightImageRes from '../../assets/images/w-.png';
import FormSection from "../../components/FormSection";


const CoursesList = () => {
    let image;
    if (window.matchMedia("(max-width: 1100px)").matches) {
        image = rightImage;
    } else {
        image = rightImageRes;
    }

    return (
        <Wrapper>
            <RightLongImage src={image}/>
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