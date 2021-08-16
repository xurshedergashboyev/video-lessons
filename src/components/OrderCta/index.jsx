import {useState} from "react";
import {
    Wrapper,
    Container,
    LeftContainer,
    LeftContainerHeading,
    RightContainer,
    RightContainerImage,
    CtaButtonContainer,
    LeftCtaButton,
    TopLittleCircle, Relative,
} from "./style";

import orderImage from '../../assets/images/rasm-odam.png'
import PopupForm from "../PopupForm";

const OrderCta = () => {
    const [isOpen, setIsOpen] = useState(false)

    const handleOpen = () => {
        setIsOpen(!isOpen)
    }
    return (
        <Relative>
            <Wrapper>
                <Container>
                    <LeftContainer>
                        <LeftContainerHeading>
                            Video kurslarimizni uyingizgacha bepul yetkazib beramiz!
                        </LeftContainerHeading>
                        <CtaButtonContainer>
                            <TopLittleCircle/>
                            <LeftCtaButton onClick={handleOpen}>
                                buyurtma berish
                            </LeftCtaButton>
                        </CtaButtonContainer>
                    </LeftContainer>
                    <RightContainer>
                        <RightContainerImage src={orderImage}/>
                    </RightContainer>
                </Container>
            </Wrapper>
            <PopupForm callback={handleOpen} isOpen={isOpen}/>
        </Relative>
    )
}

export default OrderCta;