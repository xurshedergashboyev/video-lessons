import styled from 'styled-components'
import NumberFormat from "react-number-format";

import {keyframes} from "styled-components";

const Animation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Wrapper = styled.div`
  display: ${props => props.isOpen ? 'flex' : 'none'};
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);
  justify-content: center;
  align-items: center;
  z-index: 10;
  position: fixed;
  top: 0;
  backdrop-filter: blur(5px);
`;


export const FormContainer = styled.div`
  width: 450px;
  height: fit-content;
  //z-index: 5;
  position: relative;
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

export const Circle = styled.div`
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

export const NumberInput = styled(NumberFormat) `
  width: 100%;
  height: 50px;
  border-radius: 8px;
  background-color: #fff;
  border: none;
  outline: none;
  margin-bottom: 25px;
  padding: 10px;
  font-size: 20px;
  font-family: sans-serif;
  &::placeholder {
    font-size: 20px;
    color: #a6a6a6;
  }
`;

export const SubmitButton = styled.button`
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

export const CloseIcon = styled.div`
  position: absolute;
  top: -20px;
  right: -20px;
  padding: 10px;
  background-color: #fb9591;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  .close-icon {
    width: 75%;
    height: 75%;
  }
`;

export const Loading = styled.div`
  width: 30px;
  height: 30px;
  border: 2px solid #fff;
  border-top-color: transparent;
  animation: ${Animation} 3s infinite linear;
  border-radius: 50%;
`;