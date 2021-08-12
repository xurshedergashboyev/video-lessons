import {Wrapper} from "./App.style";
import HeaderCta from "./components/HeaderCta";
import AboutUs from "./components/AboutUs";
import OrderCta from "./components/OrderCta";

const App = () => {
    return (
        <Wrapper>
            <HeaderCta/>
            <AboutUs/>
            <OrderCta/>
        </Wrapper>
    );
}

export default App;
