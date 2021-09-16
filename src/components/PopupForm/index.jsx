import axios from "axios";
import {useState} from "react";

// chat_id
import {mainChatId, secondaryChatId} from "../../contants/chatId";

import {SelectOption} from "../FormSection/style";
import {
    Wrapper,
    Form,
    FormContainer,
    FormHeading,
    NameInput,
    SubmitButton,
    CloseIcon,
    Loading,
    NumberInput
} from "./style";

const closeIcon = 'https://firebasestorage.googleapis.com/v0/b/space-21-72f2b.appspot.com/o/images%2Fclose.svg?alt=media&token=971022d0-16a5-44d1-9d73-597fed64a654'

const PopupForm = ({isOpen, callback,closePopUp, selectedCourse}) => {

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

    const [submit, setSubmit] = useState({loading: false, error: false, success: false});
    const [number, setNumber] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        // const form = {
        setSubmit({loading: true, error: false, success: false})
        const name = e.target.name?.value;
        const phone = e.target.phone?.value;
        const course = e.target.select?.value;

        const form = [
            {chat_id: secondaryChatId, text: `${name} \n ${phone} \n ${course} `},
            {chat_id: mainChatId, text: `${name} \n ${phone} \n ${course} `}
        ]

        form.forEach(value => axios.post("https://api.telegram.org/bot1986012381:AAErkrUmukqr5hytNa0x6TI1ix7-vl6Hnho/sendMessage", value)
            .then((res) => {
                setSubmit({loading: false, error: false, success: true})
                e.target.reset();
                setNumber('')
            })
            .catch((err) => {
                setSubmit({loading: false, error: true, success: false})
                console.log(err)
            })
            .finally(()=> {
                setTimeout(() => setSubmit({loading: false, error: false, success: false}), 4000)
            }))
    }

    return (
        <Wrapper isOpen={isOpen}>
            <FormContainer>
                <CloseIcon>
                    <img alt={"close-icon"} src={closeIcon} onClick={callback || closePopUp} className="close-icon"/>
                </CloseIcon>
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
                        value={selectedCourse}
                        maxMenuHeight={150}
                        // className="select-option"
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
        </Wrapper>
    )
}

export default PopupForm;