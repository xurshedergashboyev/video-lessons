import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 100px;
  margin-left: 150px;
  @media screen and (max-width: 800px) {
    margin: 100px 0;
    display: flex;
    align-items: center;
    flex-direction: column;
  }
`;

export const FormContainer = styled.div `
  width: 450px;
  height: fit-content;
  //z-index: 5;
  position: relative;
  margin-bottom: 100px;
  @media screen and (max-width: 550px) {
    width: 75%;
  }
`;

export const Form = styled.form`
  width: 100%;
  height: fit-content;
  background-color: #2a2850;
  padding: 25px 50px 50px 50px;
  border-radius: 30px;
  box-shadow: 0 31px 41px 0 rgba(0, 0, 0, 0.3);
  @media screen and (max-width: 550px) {
    padding: 25px;
    border-radius: 15px;
  }
`;

export const Circle = styled.div `
  width: 150px;  
  height: 150px;
  border-radius: 50%;
  background-color: #92c9e5;
  position: absolute;
  top: -10%;
  right: -15%;
  z-index: -1;
`;

export const FormHeading = styled.h2`
  font-size: 30px;
  line-height: 1;
  color: #fff;
  margin-bottom: 50px;
  @media screen and (max-width: 550px) {
    font-size: 25px;
    text-align: center;
  }
`;

export const NameInput = styled.input`
  width: 100%;
  height: 50px;
  border-radius: 8px;
  background-color: #fff;
  border: none;
  outline: none;
  margin-bottom: 25px;
  padding: 10px;
  font-size: 20px;

  &::placeholder {
    font-size: 20px;
    color: #a6a6a6;
  }
`;

export const SubmitButton = styled.button `
  width: 100%;
  height: 50px;
  border-radius: 8px;
  background-color: #733dfd;
  color: #fff;
  text-align: center;
  border: none;
  outline: none;
  margin-bottom: 25px;
  padding: 10px;
  font-size: 25px;
  box-shadow: 0 31px 41px 0 rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 550px) {
    font-size: 25px;
    text-align: center;
  }
`;

export const SocialContainer = styled.div `
  width: 100%;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 800px) {
    align-items: center;
  }
`;

export const SocialHeading = styled.h3 `
  width: 40%;
  font-size: 50px;
  line-height: 1;
  color: #2c2a51;
  margin-bottom: 50px;
  @media screen and (max-width: 800px) {
    font-size: 7vw;
    width: 75%;
  }
  @media screen and (max-width: 550px) {
    font-size: 8vw;
    text-align: center;
  }
`;

export const SocialIconContainer = styled.div `
  width: 70%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 50px;
  @media screen and (max-width: 1000px) {
    flex-wrap: wrap;
    width: 40%;
  }
  @media screen and (max-width: 800px) {
    flex-wrap: wrap;
    width: 60%;
    margin-bottom: 0;
  }
  @media screen and (max-width: 575px) {
    flex-wrap: wrap;
    width: 80%;
  }
`;

export const SocialLink = styled.a `
  z-index: 5;
`;

export const SocialItem = styled.div `
  width: 150px;
  height: 150px;
  border-radius: 12px;
  background-color: #8dc3de;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 5;
  @media screen and (max-width: 1000px) {
    margin-bottom: 50px;
  }
  @media screen and (max-width: 450px) {
    width: 125px;
    height: 125px;
  }
`;

export const SocialImage = styled.img `
  width: 70%;
  height: 70%;
`;