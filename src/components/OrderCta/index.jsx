import {
    Wrapper,
    Container,
    LeftContainer,
    LeftContainerHeading,
    RightContainer,
    RightContainerImage,
    CtaButtonContainer,
    LeftCtaButton,
    TopLittleCircle,
} from "./style";

import orderImage from '../../assets/images/web03-min.png'

const OrderCta = () => {
    return (
        <Wrapper>
            <Container>
                <LeftContainer>
                    <LeftContainerHeading>
                        Video kurslarimizni uyingizgacha bepul yetkazib beramiz!
                    </LeftContainerHeading>
                    <CtaButtonContainer>
                        <TopLittleCircle/>
                        <LeftCtaButton>
                            buyurtma berish
                        </LeftCtaButton>
                    </CtaButtonContainer>
                </LeftContainer>
                <RightContainer>
                    <RightContainerImage src={orderImage}/>
                </RightContainer>
            </Container>
        </Wrapper>
    )
}

export default OrderCta;