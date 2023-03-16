import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Image from 'next/image';

const CardStyle = styled(motion.div)`
  cursor: pointer;
  width: max(10rem, 20vw);
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  box-shadow: 0 0 1.5rem 0 ${props => props.theme.primaryColor};
  background: #ccc;
`;

const ImageFieldContainer = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 1/1;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  object-fit: cover;
  overflow: hidden;
`;

const TagField = styled.div`
  align-items: center;
  display: flex;
  background: white;
  color: black;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  padding-left: 20px;
  padding: 1vw 0 1vw 20px;
`;

const Tag = styled.span`
  font-family: 'SegoeUISymbol';
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

const ImageField = ({ ...props }) => {
  return (
    <ImageFieldContainer>
      <Image fill {...props} />
    </ImageFieldContainer>
  );
};

const Card = ({ imageSrc, tags, ...props }) => {
  return (
    <CardStyle whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} {...props}>
      <ImageField src={imageSrc} placeholder="blur" alt="프로젝트 이미지" sizes="max(10rem, 20vw)"/>
      <TagField>
        {tags.map((tag, index) => {
          return <Tag key={index}>#{tag}</Tag>;
        })}
      </TagField>
    </CardStyle>
  );
};

export default Card;
