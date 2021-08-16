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
    SocialIconContainer, SocialLink
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
        img: telegram,
        link: 'http://t.me/videolessonuz'
    },
    {
        id: 2,
        img: instagram,
        link: 'https://instagram.com/videolesson.uz?utm_medium=copy_link',
    },
    {
        id: 3,
        img: facebook,
        link: 'https://www.facebook.com/Videolessonuz-professional-video-kurslar-105550465165296/'
    },
    {
        id: 4,
        img: tiktok,
        link: 'https://vm.tiktok.com/ZSJn6PcCb/'
    }
]

const FormSection = () => {
    const [submit, setSubmit] = useState({loading: false, error: false, success: false})

    const [number, setNumber] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault();

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
                setNumber('')
            })
            .catch((err) => {
                setSubmit({loading: false, error: true, success: false})
            })
            .finally(() => {
                setTimeout(() => setSubmit({loading: false, error: false, success: false}), 4000);

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
                    <NameInput
                        required
                        name={"name"}
                        placeholder="Ismingiz"
                        maxLength="15"
                        minLength={"3"}
                    />
                    <NumberInput
                        value={number}
                        onChange={(e) => setNumber(e.target.value)}
                        format="+998 (##) ###-##-##"
                        mask="_"
                        required
                        name={"phone"}
                        placeholder="Telefon raqmingiz"
                    />
                    <NameInput
                        maxLength="30"
                        minLength={"3"}
                        required
                        name={"course"}
                        placeholder="Kurs nomini kiriting"/>
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
                        <SocialLink target="_blank" href={item.link}>
                            <SocialItem key={item.id}>
                                <SocialImage src={item.img}/>
                            </SocialItem>
                        </SocialLink>
                    )}
                </SocialIconContainer>
            </SocialContainer>
        </Container>
    )
}

export default FormSection;