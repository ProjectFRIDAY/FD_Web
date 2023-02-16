import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

const FaqContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0px 30px 60px 30px;
  border-bottom: 1px solid #888787;
`;

const FaqLogo = styled.span`
  width: 46px;
  height: 46px;
  border-radius: 10px;
  background-image: linear-gradient(134deg, #01baae 9%, #044a27 90%);
  font-size: 23px;
  font-weight: bold;
  text-align: center;
  padding-top: 7px;
`;

const FaqTitleContainer = styled.div`
  padding: 0 10px;
  display: flex;
  flex-direction: row;
  cursor: pointer;
  align-items: center;
  gap: 10px;
`;

const QuestionTitle = styled.p`
  font-weight: bold;
  font-size: 22px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  text-align: left;
  gap: 10px;

  @media only screen and (max-width: 800px) {
    font-size: 17px;
  }
`;

const FaqModal = styled(motion.p)`
  font-size: 16px;
  margin: 0px;
  margin-left: 2.3rem;
  color: #ccc;
`;

const FaqContent = styled.p`
  margin: 10px 0;
`;

const Toggle = styled(motion.div)`
  border: solid white;
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 3px;
  transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
  cursor: pointer;
`;

function FAQ(props) {
  const [expanded, setExpand] = useState(false);
  const onToggle = e => {
    if (expanded === false) {
      setExpand(true);
    } else {
      setExpand(false);
    }
  };

  // 애니메이션 설정
  const modalAnimationParams = {
    initial: { opacity: 0, height: 0 },
    animate: { opacity: 1, height: 'auto' },
    exit: { opacity: 0, height: 0 },
    transition: { duration: 0.2, ease: 'easeOut' },
  };
  const toggleAnimationParams = {
    animate: expanded ? { rotate: 225 } : { rotate: 45 },
  };
  // end 애니메이션 설정

  return (
    <FaqContainer onClick={onToggle}>
      <FaqTitleContainer>
        <FaqLogo>Q</FaqLogo>
        <QuestionTitle>
          {props.title}
          <Toggle {...toggleAnimationParams} />
        </QuestionTitle>
      </FaqTitleContainer>
      <AnimatePresence>
        {expanded && (
          <FaqModal {...modalAnimationParams}>
            <FaqContent>{props.children}</FaqContent>
          </FaqModal>
        )}
      </AnimatePresence>
    </FaqContainer>
  );
}

export default FAQ;
