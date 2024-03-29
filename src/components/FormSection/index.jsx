import {useState} from "react";
import axios from "axios";

// chat_id
import {mainChatId, secondaryChatId} from "../../contants/chatId";

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
    SocialIconContainer,
    SocialLink, SelectOption,
} from "./style";
import {Loading, NumberInput} from "../PopupForm/style";

// icons
import telegram from '../../assets/icons/telegram2.svg';
import instagram from '../../assets/icons/instagram.svg';
import facebook from '../../assets/icons/facebook.svg';
import tiktok from '../../assets/icons/tik-tok.svg'


const socialItems = [
    {
        id: 1,
        img: telegram,
        link: 'https://t.me/videolessonuz'
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

    const options = [
        { value: 'Office Word', label: 'Office Word'},
        { value: 'Office Excel', label: 'Office Excel'},
        { value: 'Office PowerPoint', label: 'Office PowerPoint'},
        { value: '1c', label: '1c'},
        { value: 'HTML & CSS', label: 'HTML & CSS'},
        { value: 'PHP', label: 'PHP'},
        { value: 'Telegram Bot', label: 'Telegram Bot'},
        { value: 'Telegram Business', label: 'Telegram Business'},
        { value: 'CorelDraw', label: 'CorelDraw'},
        { value: 'Adobe Photoshop', label: 'Adobe Photoshop'},
        { value: '3d Max', label: '3d Max'},
        { value: 'BEM Method', label: 'BEM Method'}
    ]

    const handleSubmit = (e) => {
        e.preventDefault();

        setSubmit({loading: true, error: false, success: false})
        const name = e.target.name.value;
        const phone = e.target.phone.value;
        const course = e.target.select.value;

        const form = [
            {chat_id: secondaryChatId, text: `${name} \n ${phone} \n ${course} `},
            {chat_id: mainChatId, text: `${name} \n ${phone} \n ${course} `}
        ]

        form.forEach(value => axios.post(`https://api.telegram.org/bot1986012381:AAErkrUmukqr5hytNa0x6TI1ix7-vl6Hnho/sendMessage`, value)
            .then(() => {
                setSubmit({loading: false, error: false, success: true})
                e.target.reset();
                setNumber('')
            })
            .catch((err) => {
                setSubmit({loading: false, error: true, success: false})
                console.log(err)
            })
            .finally(() => {
                setTimeout(() => setSubmit({loading: false, error: false, success: false}), 4000);
            }))
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
                        placeholder="Telefon raqamingiz"
                    />
                    <SelectOption
                        name={"select"}
                        options={options}
                        maxMenuHeight={150}
                        placeholder="Kursni tanlang..."
                        theme={(theme) => ({
                            ...theme,
                            borderRadius: 8,
                            height: "50px",
                            colors: {
                                ...theme.colors,
                                text: "#000",
                                primary25: "#b3daef",
                                primary50: "#92c9e5",
                                primary: "#92c9e5",
                            },
                        })}
                        />
                    <SubmitButton disabled={submit.loading || submit.success || submit.error}>
                        {submit.loading ?
                            <Loading/> : submit.success ? "Jo'natildi" : submit.error ? 'Xatolik!' : "Ro'yxatdan o'tish"}
                    </SubmitButton>
                </Form>
            </FormContainer>
            <SocialContainer>
                <SocialHeading>
                    Bizni ijtimoiy tarmoqlarda doimiy kuzatib boring
                </SocialHeading>
                <SocialIconContainer>
                    {socialItems.map((item, index) =>
                        <SocialLink key={index} target="_blank" href={item.link}>
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