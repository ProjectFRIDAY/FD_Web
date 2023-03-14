import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const CardStyle = styled(motion.div)`
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
  background-color: '#ccc';
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  object-fit: cover;
`;

const TagField = styled.div`
  align-items: center;
  display: flex;
  background: white;
  height: 100%;
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

const Card = ({ ...props }) => {
  return <CardStyle whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} {...props}></CardStyle>;
};

export default { Card, ImageField, TagField, Tag };
