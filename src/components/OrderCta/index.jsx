import {
    Wrapper,
    Container,
    LeftContainer,
    LeftContainerHeading,
    LeftContainerButton,
    RightContainer,
    RightContainerImage
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
                    <LeftContainerButton>
                        buyurtma berish
                    </LeftContainerButton>
                </LeftContainer>
                <RightContainer>
                    <RightContainerImage src={orderImage}/>
                </RightContainer>
            </Container>
        </Wrapper>
    )
}

export default OrderCta;