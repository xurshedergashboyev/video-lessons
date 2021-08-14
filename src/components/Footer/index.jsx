import {Wrapper, Container, ContactContainer, ContactIcon, ContactItem, ContactInfo, Map} from "./style";

import historyLine from '../../assets/icons/history-line.svg';
import mapLine from '../../assets/icons/map-pin-line.svg';
import phoneLine from '../../assets/icons/phone-line.svg';

const Footer = () => {
    return (
        <Wrapper>
            <Container>
                <ContactContainer>
                    <ContactItem>
                        <ContactIcon src={historyLine}/>
                        <ContactInfo>
                            Toshkent shahar Chilonzor tumani 45-uy
                        </ContactInfo>
                    </ContactItem>
                    <ContactItem>
                        <ContactIcon src={mapLine}/>
                        <ContactInfo>
                            55 500 01 09
                        </ContactInfo>
                    </ContactItem>
                    <ContactItem>
                        <ContactIcon src={phoneLine}/>
                        <ContactInfo>
                            9:00 - 18:00 gacha
                        </ContactInfo>
                    </ContactItem>
                </ContactContainer>
                <Map>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d384844.62600144383!2d70.05020415!3d41.09961525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2s!4v1628945645405!5m2!1sru!2s"
                        width="600" height="450" style={{border: 0}} allowFullScreen="" loading="lazy" />
                </Map>
            </Container>
        </Wrapper>
    )
}

export default Footer;