import {
    Circle,
    Container,
    Form,
    FormContainer,
    FormHeading,
    NameInput,
    SubmitButton,
    SocialHeading,
    SocialContainer,
    SocialImage,
    SocialItem,
    SocialIconContainer
} from "./style";

import telegram from '../../assets/icons/telegram2.svg';
import instagram from '../../assets/icons/instagram.svg';
import facebook from '../../assets/icons/facebook.svg';
import tiktok from '../../assets/icons/tik-tok.svg'

const socialItems = [
    {
        id: 1,
        img: telegram
    },
    {
        id: 2,
        img: instagram
    },
    {
        id: 3,
        img: facebook
    },
    {
        id: 4,
        img: tiktok
    }
]

const FormSection = () => {
    return (
        <Container id="form">
            <FormContainer>
                <Circle/>
                <Form>
                    <FormHeading>
                        Buyurtma berish uchun quyidagi formani to'ldiring!
                    </FormHeading>
                    <NameInput placeholder="Ismingiz"/>
                    <NameInput placeholder="Telefon raqmingiz"/>
                    <NameInput placeholder="Kurs nomini kiriting"/>
                    <SubmitButton>
                        Ro'yhatdan o'tish
                    </SubmitButton>
                </Form>
            </FormContainer>
            <SocialContainer>
                <SocialHeading>
                    Bizni ijtimoiy tarmoqlarda doimiy kuzatib boring
                </SocialHeading>
                <SocialIconContainer>
                    {socialItems.map(item =>
                        <SocialItem key={item.id}>
                            <SocialImage src={item.img}/>
                        </SocialItem>
                    )}
                </SocialIconContainer>
            </SocialContainer>
        </Container>
    )
}

export default FormSection;