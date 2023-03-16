import React from 'react';
import styled from 'styled-components';
import FAQ from './FAQ';
import FAQs from '../../data/static/FAQs';

const FaqLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  margin-bottom: 3rem;
  margin-top: 10rem;
  width: 100%;
`;

const FaqTitle = styled.p`
  font-family: Arial;
  font-weight: bold;
  font-size: 70px;
  text-align: center;
  margin-top: 120px;
  margin-bottom: 100px;
`;

function FAQCard() {
  return (
    <FaqLayout>
      <FaqTitle>FAQ</FaqTitle>
      {FAQs.map((faq, index) => (
        <FAQ title={faq.question} key={index} content={faq.answer}/>
      ))}
    </FaqLayout>
  );
}
export default FAQCard;
