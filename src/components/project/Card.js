import styled, { css } from 'styled-components';

const Card = styled.div`
  cursor: pointer;
  width: max(10rem, 20vw);
  height: max(12rem, 24vw);
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  box-shadow: 0 0 1.5rem 0 ${props => props.theme.primaryColor};
  background: #ccc;
`;

const ImageField = styled.img`
  height: 20rem;
  background-color: '#ccc';
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  object-fit: cover;
`;

const TagField = styled.div`
  align-items: center;
  display: flex;
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
  padding-right: 7px;
  font-weight: 600;
  text-shadow: #01baae 0 0 10px;
  @media only screen and (max-width: 800px) {
    font-size: 10px;
    text-shadow: none;
  }
`;

export default { Card, ImageField, TagField, Tag };
