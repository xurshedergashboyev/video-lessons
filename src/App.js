import {Wrapper} from "./App.style";
import HeaderCta from "./components/HeaderCta";
import AboutUs from "./components/AboutUs";
import OrderCta from "./components/OrderCta";
import CoursesList from "./containers/CoursesList";
import Footer from "./components/Footer";

const App = () => {
    return (
        <Wrapper>
            <HeaderCta/>
            <AboutUs/>
            <OrderCta/>
            <CoursesList />
            <Footer />
        </Wrapper>
    );
}

export default App;
