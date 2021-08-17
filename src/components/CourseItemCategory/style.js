import styled from 'styled-components'

export const Container = styled.div `
  @media screen and (max-width: 800px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;


export const Attr = styled.a `
  text-decoration: none;
  cursor: pointer;
  @media screen and (max-width: 600px) {
    width: 35%;
  }
`;