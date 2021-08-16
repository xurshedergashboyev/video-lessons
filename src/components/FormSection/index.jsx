import {useState} from "react";
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
import axios from "axios";
import {Loading, NumberInput} from "../PopupForm/style";

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
    const [submit, setSubmit] = useState({loading: false, error: false, success: false})
    const handleSubmit = (e) => {
        e.preventDefault();
        // const form = {
        setSubmit({loading: true, error: false, success: false})
        const name = e.target.name.value;
        const phone = e.target.phone.value;
        const course = e.target.course.value;

        const form = {
            chat_id: '513214213',
            text: `${name} \n ${phone} \n ${course} `
        }

        axios.post("https://api.telegram.org/bot1986012381:AAErkrUmukqr5hytNa0x6TI1ix7-vl6Hnho/sendMessage", form)
            .then((res) => {
                setSubmit({loading: false, error: false, success: true})
                e.target.reset();
            })
            .catch((err) => {
                setSubmit({loading: false, error: true, success: false})
            })
            .finally(()=> {
                setTimeout(() => setSubmit({loading: false, error: false, success: false}), 4000)
            })
    }

    return (
        <Container id="form">
            <FormContainer>
                <Circle/>
                <Form onSubmit={handleSubmit}>
                    <FormHeading>
                        Buyurtma berish uchun quyidagi formani to'ldiring!
                    </FormHeading>
                    <NameInput required name={"name"} placeholder="Ismingiz" maxLength="15" minLength={"3"}/>
                    <NumberInput format="+998 (##) ###-##-##"
                                 mask="_" required name={"phone"} placeholder="Telefon raqmingiz"/>
                    <NameInput maxLength="30" minLength={"3"} required name={"course"} placeholder="Kurs nomini kiriting"/>
                    <SubmitButton disabled={submit.loading || submit.success || submit.error}>
                        {submit.loading ?
                            <Loading/> : submit.success ? "Jo'natildi" : submit.error ? 'Xatolik!' : "Ro'yhatdan o'tish"}
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