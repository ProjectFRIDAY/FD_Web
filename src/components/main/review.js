import React from 'react';
import styled, { css } from 'styled-components';

const Positioner = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  justify-items: center;
`;

const Modal = styled.div`
  ${props => {
    const COLUMN_START = props.columnStart;
    const COLUMN_END = props.columnEnd;
    const ROW_START = props.rowStart;
    const ROW_END = props.rowEnd;
    return css`
      grid-column: ${COLUMN_START} / ${COLUMN_END};
      grid-row: ${ROW_START} / ${ROW_END};
    `;
  }}
  width: 15rem;
  height: 20rem;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  box-shadow: 0 3px 40px 0 ${props => props.theme.primaryColor};
  background: #ccc;
`;

const TextField = styled.div`
  background: white;
  color: black;
`;

const LeftTopText = styled.div`
  grid-column: 2 / 3;
  grid-row: 1 / 2;
`;

const BackgroundText = styled.h1`
  ${props => {
    const COLOR = props.theme.primaryColor;
    const INDEX = props.index;
    return css`
      text-shadow: -1px 0 ${COLOR}, 0 1px ${COLOR}, 1px 0 ${COLOR}, 0 -1px ${COLOR};
      top: ${INDEX * 15 + 10}rem;
    `;
  }}
  color: black;
  font-size: 10rem;
  z-index: -1;
  position: absolute;
`;

function Review() {
  return (
    <Positioner>
      <BackgroundText index={0}>Designer</BackgroundText>
      <BackgroundText index={1}>Programmer</BackgroundText>
      <BackgroundText index={2}>Management</BackgroundText>
      <LeftTopText>
        <h1>FRIDAY 후기+</h1>
        <p>FRIDAY와 함께하는 이야기</p>
      </LeftTopText>
      <Modal columnStart={3} columnEnd={4} rowStart={1} rowEnd={2}>
        222222222
      </Modal>
      <Modal columnStart={2} columnEnd={3} rowStart={2} rowEnd={3}>
        <TextField>asdaaaaaaaaaaaaaaaaaaaa</TextField>
      </Modal>

      <Modal columnStart={3} columnEnd={4} rowStart={3} rowEnd={4}>
        333333
      </Modal>
      <Modal columnStart={2} columnEnd={3} rowStart={4} rowEnd={5}>
        4444444
      </Modal>
    </Positioner>
  );
}

export default Review;
