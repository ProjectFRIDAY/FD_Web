import React from 'react';
import styled from 'styled-components';
import * as Text from './Text';

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
  font-size: 13px;
  line-height: 35px;
`;
function ProcessCard() {
  return (
    <div
      style={{
        backgroundImage: 'linear-gradient(148deg, #053a36 0%, #000 60%)',
        paddingTop: '100px',
        display: 'flex',
        flexDirection: 'row',
        alignItmes: 'flex-start',
        justifyContent: 'flex-around',
        paddingLeft: '20vw',
        flexWrap: 'wrap',
      }}
    >
      <ProcessBigText>PROCESS</ProcessBigText>
      <ProcessMidTextContainer>
        <ProcessMidText>모집기간</ProcessMidText>
        <ProcessTinyText>매년 3월, 9월</ProcessTinyText>
        <ProcessMidText>지원자격</ProcessMidText>
        <ProcessTinyText>
          1. Friday와 동일한 목표를 가지신 분
          <br />
          2. Friday에 많은 시간을 투자할 수 있는 분
          <br />
          3. 지원 분야에 대한 간단한 지식이 있는 분
        </ProcessTinyText>
        <ProcessMidText>접수방법</ProcessMidText>
        <ProcessTinyText>상단의 지원하기 버튼을 통해 지원서를 작성해주세요.</ProcessTinyText>
        <ProcessMidText>전형절차</ProcessMidText>
        <ProcessTinyText> 지원자님은 간단한 지원서를 작성하신 후, 짧은 비대면 면접을 거치게 됩니다.</ProcessTinyText>
        <Text.SmallBold>서류전형</Text.SmallBold>
        <ProcessTinyText>제출하신 지원서를 바탕으로 지원 분야와의 연관성을 종합적으로 검토합니다.</ProcessTinyText>
        <Text.SmallBold>1차 면접</Text.SmallBold>
        <ProcessTinyText>
          실무에 대한 내용을 중심으로 면접이 진행됩니다.
          <br />
          면접 시간은 약 30분 ~ 1시간 이내로 소요됩니다.
        </ProcessTinyText>
      </ProcessMidTextContainer>
    </div>
  );
}
export default ProcessCard;
