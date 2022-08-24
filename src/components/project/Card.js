import styled, { css } from 'styled-components';

const Card = styled.div`
  @media only screen and (max-width: 1000px) {
    width: 15rem;
    height: 15rem;
    display: flex;
    flex-direction: column;
    margin-bottom: 5rem;
  }
  cursor: pointer;
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
  background-color: '#ccc';
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

const TextField = styled.div`
  height: 5rem;
  background: white;
  color: black;
  text-align: center;
  padding-top: 1rem;
  font-family: SegoeUISymbol;
  font-weight: 800;
  font-size: 25px;
`;

const TagField = styled.div`
  background: white;
  height: 5rem;
  color: black;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  padding-left: 20px;
`;

const Tag = styled.span`
  font-family: SegoeUISymbol;
  font-size: 15px;
  border-radius: 5px;
  padding: 5px;
  margin-right: 5px;
  background-color: #c2e3ea;
`;

export default { Card, TextField, ImageField, TagField, Tag };
