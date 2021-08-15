import {
    Wrapper,
    Container,
    ContactContainer,
    ContactIcon,
    ContactItem,
    ContactInfo,
    Map,
    MapContainer,
    Copywriting,
    Heart
} from "./style";

import historyLine from '../../assets/icons/history-line.svg';
import mapLine from '../../assets/icons/map-pin-line.svg';
import phoneLine from '../../assets/icons/phone-line.svg';

const contactDetails = [
    {
        name: 'Toshkent shahar Chilonzor tumani 45-uy',
        img: mapLine
    },
    {
        name: '55 500 01 09',
        img: phoneLine
    },
    {
        name: '9:00 - 18:00 gacha',
        img: historyLine
    }
]

const Footer = () => {
    return (
        <div>
            <Wrapper id="contact">
                <Container>
                    <ContactContainer>
                        {contactDetails.map((contact, i) =>
                            <ContactItem key={i}>
                                <ContactIcon src={contact.img}/>
                                <ContactInfo>
                                    {contact.name}
                                </ContactInfo>
                            </ContactItem>
                        )}
                    </ContactContainer>
                    <MapContainer>
                        <Map
                            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d384844.62600144383!2d70.05020415!3d41.09961525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2s!4v1628945645405!5m2!1sru!2s"
                            style={{border: 0}}/>
                    </MapContainer>
                </Container>
            </Wrapper>
            <Copywriting>
                Made with <Heart
                src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/285/red-heart_2764-fe0f.png"/> by
                Space21
            </Copywriting>
        </div>
    )
}

export default Footer;