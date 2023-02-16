import React from 'react';
import styled from 'styled-components';
import * as Text from './Text';

const ProcessContainer = styled.div`
  background-image: linear-gradient(148deg, #053a36 0%, #000 60%);
  padding-top: 100px;
  display: flex;
  flex-direction: row;
  alignitmes: flex-start;
  justifycontent: flex-around;
  padding: 10vw;
  flex-wrap: wrap;
  width: 100%;
`;

const ProcessBigText = styled(Text.Big)`
  width: 30vw;
`;

const ProcessMidTextContainer = styled.div`
  left: 50vw;
  display: flex;
  flex-direction: column;
`;

const ProcessMidText = styled(Text.Mid)`
  margin-bottom: 20px;
`;

const ProcessTinyText = styled(Text.Tiny)`
  margin-bottom: 50px;
  font-size: 18px;
  line-height: 35px;
  margin-top: 0;
`;

function ProcessCard() {
  return (
    <ProcessContainer>
      <ProcessBigText>PROCESS</ProcessBigText>
      <ProcessMidTextContainer>
        <ProcessMidText>모집 기간(4.5기)</ProcessMidText>
        <ProcessTinyText>2023년 1월 25일 ~ 1월 31일 23:59 </ProcessTinyText>
        <ProcessMidText>지원 자격</ProcessMidText>
        <ProcessTinyText>
          1. Friday와 동일한 목표를 가지신 분
          <br />
          2. Friday에 많은 시간을 투자할 수 있는 분
          <br />
          3. 지원 분야에 대한 열정과 지식이 있는 분
        </ProcessTinyText>
        <ProcessMidText>접수 방법</ProcessMidText>
        <ProcessTinyText>상단의 &#39;지원하기&#39; 버튼을 통해 지원서를 작성해주세요.</ProcessTinyText>
        <ProcessMidText>전형 절차</ProcessMidText>
        <ProcessTinyText>지원자님은 간단한 지원서를 작성하신 후, 30분 내외의 비대면 면접을 거치게 됩니다.</ProcessTinyText>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            marginLeft: '20px',
          }}
        >
          <Text.SmallBold>서류 전형</Text.SmallBold>
          <ProcessTinyText>제출하신 지원서를 바탕으로 지원 분야와 관련된 경험을 종합적으로 검토합니다.</ProcessTinyText>
          <Text.SmallBold>비대면 면접</Text.SmallBold>
          <ProcessTinyText>
            지원 동기, 경험 및 지식에 대한 내용을 중심으로 면접이 진행됩니다.
            <br />
            면접 시간은 30분 내외로 소요됩니다.
          </ProcessTinyText>
        </div>
      </ProcessMidTextContainer>
    </ProcessContainer>
  );
}
export default ProcessCard;
