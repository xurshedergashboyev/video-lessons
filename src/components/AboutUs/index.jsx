import {
    Wrapper,
    Image,
    ImageContainer,
    Container,
    RightContainer,
    Header,
    Facilities,
    FacilitiesItem,
    FacilitiesItemDesc,
    FacilitiesItemImg,
    FacilitiesItemName,
    FacilitiesItemImage,
    FacilitiesInfo
} from "./style";

import leftImage from '../../assets/images/web02-min.png'
import time from '../../assets/icons/fast-time.svg';
import technicSupport from '../../assets/icons/customer-support.svg';
import flag from '../../assets/icons/map-pin-line.svg';
import toPro from '../../assets/icons/certificate.svg';
import telegram from '../../assets/icons/Telegram.svg';
import certificate from '../../assets/icons/certificate.svg';

const data = [
    {
        id: 1,
        img: time,
        name: 'Vaqtingiz tejalishi',
        desc: 'lorem ipsum dolor sit amet consectetur adesepin adfad asdf adsf adsfadsf adsaffasdf',
    },
    {
        id: 2,
        img: technicSupport,
        name: 'Texnik yordam',
        desc: 'lorem ipsum dolor sit amet consectetur adesepin adfad asdf adsf adsfadsf adsaffasdf',
        bgColor: '#97d0ee'
    },
    {
        id: 3,
        img: flag,
        name: "Video kurslar o'zbek tilida",
        desc: 'lorem ipsum dolor sit amet consectetur adesepin adfad asdf adsf adsfadsf adsaffasdf'
    },
    {
        id: 4,
        img: toPro,
        name: '0 dan pro darajasigacha',
        desc: 'lorem ipsum dolor sit amet consectetur adesepin adfad asdf adsf adsfadsf adsaffasdf',
        bgColor: '#97d0ee'
    },
    {
        id: 5,
        img: telegram,
        name: 'Telegramda yopiq chat',
        desc: 'lorem ipsum dolor sit amet consectetur adesepin adfad asdf adsf adsfadsf adsaffasdf'
    },
    {
        id: 6,
        img: certificate,
        name: 'Maxsus sertifikat',
        desc: 'lorem ipsum dolor sit amet consectetur adesepin adfad asdf adsf adsfadsf adsaffasdf',
        bgColor: '#97d0ee'
    }
]

const AboutUs = () => {
    return (
        <Wrapper>
            <Container>
                <ImageContainer>
                    <Image src={leftImage}/>
                </ImageContainer>
                <RightContainer>
                    <Header>
                        Biz haqimizda
                    </Header>
                    <Facilities>
                        {data.map(item =>
                            <FacilitiesItem key={item.id}>
                                <FacilitiesItemImage bgColor={item?.bgColor}>
                                    <FacilitiesItemImg src={item.img}/>
                                </FacilitiesItemImage>
                                <FacilitiesInfo>
                                    <FacilitiesItemName>
                                        {item.name}
                                    </FacilitiesItemName>
                                    <FacilitiesItemDesc>
                                        {item.desc}
                                    </FacilitiesItemDesc>
                                </FacilitiesInfo>
                            </FacilitiesItem>
                        )}
                    </Facilities>
                </RightContainer>
            </Container>
        </Wrapper>
    )
}

export default AboutUs;