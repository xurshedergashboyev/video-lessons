import {Wrapper, Form, FormContainer, FormHeading, NameInput, SubmitButton, CloseIcon} from "./style";
import axios from "axios";
// import {Wrapper} from "./style";
const closeIcon = 'https://firebasestorage.googleapis.com/v0/b/space-21-72f2b.appspot.com/o/images%2Fclose.svg?alt=media&token=971022d0-16a5-44d1-9d73-597fed64a654'

const PopupForm = ({isOpen, callback}) => {

    const handleSubmit = (e) => {
        e.preventDefault();
        // const form = {
        const name = e.target.name.value;
        const phone = e.target.phone.value;
        const course = e.target.course.value;

        const form = {
            chat_id: '286602133',
            text: `${name} \n ${phone} \n ${course} `
        }

        axios.post("https://api.telegram.org/bot1986012381:AAErkrUmukqr5hytNa0x6TI1ix7-vl6Hnho/sendMessage", form)
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
                    <NameInput name={"name"} placeholder="Ismingiz"/>
                    <NameInput name={"phone"} placeholder="Telefon raqmingiz"/>
                    <NameInput name={"course"} placeholder="Kurs nomini kiriting"/>
                    <SubmitButton>
                        Ro'yhatdan o'tish
                    </SubmitButton>
                </Form>
            </FormContainer>
        </Wrapper>
    )
}

export default PopupForm;