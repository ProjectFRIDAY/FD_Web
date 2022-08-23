import React from 'react';
import styled from 'styled-components';
import * as Text from './Text'

const ProcessBigText = styled(Text.Big)`
  width: 30vw;
`
const ProcessMidTextContainer = styled.div`
  left: 50vw;
  display: flex;
  flex-direction: column;
`
const ProcessMidText = styled(Text.Mid)`
  margin-bottom: 20px;
`
const ProcessTinyText = styled(Text.Tiny)`
  margin-bottom: 50px;
`
function ProcessCard() {
  return (
    <div style={{
      backgroundImage: 'linear-gradient(148deg, #053a36 0%, #000 60%)',
      paddingTop: '100px',
      display: 'flex',
      flexDirection: 'row',
      alignItmes: 'flex-start',
      justifyContent: 'flex-around',
      paddingLeft: '20vw',
      flexWrap: 'wrap'
    }}>
      <ProcessBigText>PROCESS</ProcessBigText>
      <ProcessMidTextContainer>
        <ProcessMidText>모집기간</ProcessMidText>
        <ProcessTinyText>상시 모집</ProcessTinyText>
        <ProcessMidText>지원자격</ProcessMidText>
        <ProcessTinyText>
          6개월 동안 활동하는데 문제가 없고, 력을 키우기 위해 배우려는<br/>
          의지가 있는 사람<br/>
          (대학생이 아닌 졸업생, 일반인도 가능)
        </ProcessTinyText>
        <ProcessMidText>접수방법</ProcessMidText>
        <ProcessTinyText>
          6개월 동안 활동하는데 문제가 없고, 력을 키우기 위해 배우려는<br/>
          의지가 있는 사람<br/>
        </ProcessTinyText>
        <ProcessMidText>전형절차</ProcessMidText>
        <Text.SmallBold>서류전형</Text.SmallBold>
        <Text.Tiny>
          제출하신 지원서를 바탕으로 모집<br/>
          직군과의 연관성을 종합적으로 검토합니다.
        </Text.Tiny>
        <Text.SmallBold>1차 면접</Text.SmallBold>
        <Text.Tiny>
          실무에 대한 내용을 중심으로 면접이 진행됩니다.<br/>
          면접 시간은 약 30분 ~ 1시간 이내로 소요됩니다.
        </Text.Tiny>
      </ProcessMidTextContainer>
    </div>
  )
}
export default ProcessCard;