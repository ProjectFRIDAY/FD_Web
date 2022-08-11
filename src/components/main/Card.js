import styled, { css } from 'styled-components';

const Card = styled.div`
  @media only screen and (min-width: 665px) {
    ${props => {
      const X_POSITION = props.xPosition;
      return css`
        transform: translate(${X_POSITION}, 0);
      `;
    }}
  }
  width: 20rem;
  height: 30rem;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  box-shadow: 0 3px 40px 0 ${props => props.theme.primaryColor};
  background: #ccc;
  margin: 1rem;
`;

const ImageField = styled.img`
  height: 30rem;
  /* background-color: '#ccc'; */
  background-color: red;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

const TextField = styled.div`
  height: 13rem;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  background: white;
  color: black;
  text-align: center;
`;

export default { Card, TextField, ImageField };
