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
import axios from "axios";
import {useState} from "react";
// import {Wrapper} from "./style";
const closeIcon = 'https://firebasestorage.googleapis.com/v0/b/space-21-72f2b.appspot.com/o/images%2Fclose.svg?alt=media&token=971022d0-16a5-44d1-9d73-597fed64a654'

const PopupForm = ({isOpen, callback}) => {
    const [submit, setSubmit] = useState({loading: false, error: false, success: false});
    const [number, setNumber] = useState('')

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
                setNumber('')
            })
            .catch((err) => {
                setSubmit({loading: false, error: true, success: false})
            })
            .finally(()=> {
                setTimeout(() => setSubmit({loading: false, error: false, success: false}), 4000)
            })
    }

    return (
        <Wrapper isOpen={isOpen}>
            <FormContainer>
                <CloseIcon>
                    <img alt={"close-icon"} src={closeIcon} onClick={callback} className="close-icon"/>
                </CloseIcon>
                <Form onSubmit={handleSubmit}>
                    <FormHeading>
                        Buyurtma berish uchun quyidagi formani to'ldiring!
                    </FormHeading>
                    <NameInput required name={"name"} placeholder="Ismingiz" maxLength="15" minLength={"3"}/>
                    <NumberInput value={number} onChange={(e) => setNumber(e.target.value)} format="+998 (##) ###-##-##"
                                 mask="_" required name={"phone"} placeholder="Telefon raqmingiz"/>
                    <NameInput maxLength="30" minLength={"3"} required name={"course"} placeholder="Kurs nomini kiriting"/>
                    <SubmitButton disabled={submit.loading || submit.success || submit.error}>
                        {submit.loading ?
                            <Loading/> : submit.success ? "Jo'natildi" : submit.error ? 'Xatolik!' : "Ro'yhatdan o'tish"}
                    </SubmitButton>
                </Form>
            </FormContainer>
        </Wrapper>
    )
}

export default PopupForm;