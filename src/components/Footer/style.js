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
  align-items: center;
  justify-content: space-between;
`;

export const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

export const ContactItem = styled.div`
  display: flex;
  height: 100px;
  width: 100%;
  align-items: center;
`;

export const ContactIcon = styled.img`
  height: 100%;
  width: auto;
  margin-right: 10px;
`;

export const ContactInfo = styled.p`
  font-size: 25px;
  color: #fff;
  width: 100%;
`;

export const Map = styled.div`
  width: 100%;
  height: 100%;
`;