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

import leftImage from '../../assets/images/Group 5 copy.png';

import time from '../../assets/icons/fast-time.svg';
import technicSupport from '../../assets/icons/customer-support.svg';
import flag from '../../assets/icons/uzbekistan.svg';
import toPro from '../../assets/icons/agile-team.svg';
import telegram from '../../assets/icons/message.svg';
import certificate from '../../assets/icons/certificate.svg';

const data = [
    {
        id: 1,
        img: time,
        name: 'Vaqtingiz tejalishi',
        desc: 'Video kurslarimizni uyingizdan chiqmasdan xohlagan payt va joyda o‘rganishingiz mumkin.',
    },
    {
        id: 2,
        img: technicSupport,
        name: 'Texnik yordam',
        desc: 'Video kursdan foydalanish jarayonida savollaringizga javob olishingiz mumkin!',
        bgColor: '#97d0ee'
    },
    {
        id: 3,
        img: flag,
        name: "Video kurslar o'zbek tilida",
        desc: 'Video kurslarimiz sof o‘zbek tilida va shuning uchun ham tez va osonlik bilan o‘rganasiz.'
    },
    {
        id: 4,
        img: toPro,
        name: '0 dan pro darajasigacha',
        desc: 'Video kurslarimiz sizni 0’dan professional darajagacha olib chiqadi.',
        bgColor: '#97d0ee'
    },
    {
        id: 5,
        img: telegram,
        name: 'Telegramda yopiq chat',
        desc: 'Telegram guruhimizda o‘qituvchi va o‘quvchilar bilan doimiy fikr almashingiz mumkin.'
    },
    {
        id: 6,
        img: certificate,
        name: 'Maxsus sertifikat',
        desc: 'Video kursimizni to‘liq o‘z tugatganingizdan so‘ng maxsus sertifikat beriladi.',
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