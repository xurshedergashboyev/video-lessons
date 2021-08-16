import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: #4b5a81;
  padding: 50px;
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  @media screen and (max-width: 800px) {
    flex-direction: column-reverse;
  }
`;

export const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

export const ContactItem = styled.div`
  display: flex;
  height: 75px;
  width: 100%;
  align-items: center;
`;

export const ContactIcon = styled.img`
  height: 75%;
  width: auto;
  margin-right: 10px;
  @media screen and (max-width: 800px) {
    height: 50%;
    width: auto;
  }
`;

export const ContactInfo = styled.a`
  font-size: 25px;
  color: #fff;
  width: 100%;
  text-decoration: none;
  @media screen and (max-width: 750px) {
    font-size: 20px;
  }
`;

export const MapContainer = styled.div `
  display: flex;
  align-items: center;
  justify-content: center;
  width: 650px;
  height: 400px;
  border-radius: 12px;
  @media screen and (max-width: 750px) {
    width: 100%;
    height: 300px;
    margin-bottom: 50px;
  }
`;

export const Map = styled.iframe`
  width: 100%;
  height: 100%;
  border-radius: 12px;
`;

export const Copywriting = styled.div `
  width: 100%;
  height: 50px;
  font-size: 20px;
  text-align: center;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  @media screen and (max-width: 750px) {
    font-size: 15px;
  }
`;

export const Link = styled.a `
  color: #fff;
  text-decoration: none;
  margin-right: 5px;
  margin-left: 5px;
`;

export const Heart = styled.img `
  width: 25px;
  height: 25px;
  margin: 0 5px;
`;