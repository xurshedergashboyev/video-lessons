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
    Heart, Link
} from "./style";

import historyLine from '../../assets/icons/history-line.svg';
import mapLine from '../../assets/icons/map-pin-line.svg';
import phoneLine from '../../assets/icons/phone-line.svg';

const contactDetails = [
    {
        name: 'Olmazor tuman, Langar ko\'chasi 76-uy',
        img: mapLine,
    },
    {
        name: '55 500 01 09',
        img: phoneLine,
        href: 'tel: +998555000109'
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
                                <ContactInfo href={contact?.href}>
                                    {contact.name}
                                </ContactInfo>
                            </ContactItem>
                        )}
                    </ContactContainer>
                    <MapContainer>
                        <Map
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d187.2567612967905!2d69.227178266779!3d41.328260909637486!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b8f77b4c033%3A0xbee79721eacbdef9!2zNzYg0JvRj9C90LPQsNGAINC60Z7Rh9Cw0YHQuCwg0KLQvtGI0LrQtdC90YIsIFV6YmVraXN0YW4!5e0!3m2!1sen!2s!4v1629098223855!5m2!1sen!2s"
                            width="600" height="450" style={{border: 0}} allowFullScreen=""/>
                    </MapContainer>
                </Container>
            </Wrapper>
            <Copywriting>
                Made with <Heart
                src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/285/red-heart_2764-fe0f.png"/> by
                <Link href="https://space21.io/">
                    Space21
                </Link>
            </Copywriting>
        </div>
    )
}

export default Footer;