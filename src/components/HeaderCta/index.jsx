import {
    Wrapper,
    FlexContainer,
    Container,
    LeftContainer,
    RightContainer,
    CtaContainer,
    CtaDesc,
    CtaButton,
    CtaHeader,
    NavbarPhoneButton,
    NavbarPhoneNumber,
    NavbarPhoneIcon,
    BigCircle,
    MediumCircle,
    Rectangle,
    Icon,
    TopLittleCircle,
    CtaButtonContainer,
    BottomLittleCircle
} from "./style";
import Navbar from "../Navbar";
import rightArrow from '../../assets/icons/arrow-right-circle-line.svg'
import phoneIcon from '../../assets/icons/phone.svg'

const HeaderCta = () => {
    return (
        <Wrapper>
            <Container>
                {/*<Navbar />*/}
                <FlexContainer>
                    <LeftContainer>
                        <BigCircle />
                        <MediumCircle />
                        <Rectangle />
                        <Navbar/>
                        <CtaContainer>
                            <CtaHeader>
                                Eng zamonaviy va eng daromadli
                            </CtaHeader>
                            <CtaDesc>
                                kasblarni biz bilan birga o'rganing!
                            </CtaDesc>
                            <CtaButtonContainer>
                                <TopLittleCircle />
                                <BottomLittleCircle />
                                <CtaButton>
                                    kurslar ro'yhati <Icon className="icon" src={rightArrow} />
                                </CtaButton>
                            </CtaButtonContainer>
                        </CtaContainer>
                    </LeftContainer>
                    <RightContainer>
                        <NavbarPhoneButton>
                            <NavbarPhoneIcon src={phoneIcon}/>
                            <NavbarPhoneNumber>
                                71 555 01 20
                            </NavbarPhoneNumber>
                        </NavbarPhoneButton>
                    </RightContainer>
                </FlexContainer>
            </Container>
        </Wrapper>
    )
}

export default HeaderCta;