import React from 'react';
import styled from 'styled-components';
import * as Text from './Text';

export const Designer = () => {
  return (
    <div>
      <ExplainJob title="활동">
        프로젝트에서 전반적인 디자인을 담당합니다.
        <br />
        기획을 바탕으로 UI / UX을 디자인 합니다.
      </ExplainJob>
      <ExplainJob title="기술">
        1. UI / UX에 대해 공부를 해보신 분
        <br />
        2. 디자인에 관심이 많으신 분
        <br />
        3. 열린 자세로 다른 직군과 소통할 수 있는 분
      </ExplainJob>
      <ExplainJob title="이런 분이면 더 좋아요">
        1. Figma, Adobe Xd 등 하나 이상의 디자인 툴을 다뤄보신 분
        <br />
        2. 디자인 관련 학과에 재학중이신 분
      </ExplainJob>
    </div>
  );
};
export const Planner = () => {
  return (
    <div>
      <ExplainJob title="활동">
        목표를 향해 프로젝트의 방향을 이끕니다.
        <br />
        1. 서비스의 기획부터 아이디어 구체화
        <br />
        2. 프로젝트의 원활한 진행을 위한 관리
        <br />
        3. 서비스의 출시 후의 마케팅
      </ExplainJob>
      <ExplainJob title="기술">
        1. 나무보다 숲을 보는 능력을 가지신 분
        <br />
        2. 책임감있는 리더의 면모가 있으신 분
        <br />
        3. 적극적이고 주도적이신 분
        <br />
      </ExplainJob>
      <ExplainJob title="이런 분이면 더 좋아요">
        1. IT 서비스와 관련한 기획 및 아이디어 구체화 활동 경험
        <br />
        2. IT 에 관한 간단한 지식
      </ExplainJob>
    </div>
  );
};
export const Android = () => {
  return (
    <div>
      <ExplainJob title="활동">
        프로젝트에서 안드로이드 클라이언트 개발을 담당합니다.
        <br />
        백엔드 개발자, PM, 디자이너와 함께 프로젝트를 진행합니다.
      </ExplainJob>
      <ExplainJob title="기술">
        1. 안드로이드 개발을 해보신 분
        <br />
        2. 새로운 내용의 습득을 즐기시는 분
        <br />
        3. 프로젝트를 책임지고 끝까지 마무리하실 분
      </ExplainJob>
      <ExplainJob title="이런 분이면 더 좋아요">
        1. 디자이너, 백엔드 개발자와의 협업 경험
        <br />
        2. git을 이용한 프로젝트 관리 경험
      </ExplainJob>
    </div>
  );
};
export const IOS = () => {
  return (
    <div>
      <ExplainJob title="활동">
        프로젝트에서 iOS 클라이언트 개발을 담당합니다.
        <br />
        백엔드 개발자, PM, 디자이너와 함께 프로젝트를 진행합니다.
      </ExplainJob>
      <ExplainJob title="기술">
        1. ios 개발을 해보신 분
        <br />
        2. 새로운 내용의 습득을 즐기시는 분
        <br />
        3. 프로젝트를 책임지고 끝까지 마무리하실 분
      </ExplainJob>
      <ExplainJob title="이런 분이면 더 좋아요">
        1. 디자이너, 백엔드 개발자와의 협업 경험
        <br />
        2. git을 이용한 프로젝트 관리 경험
        <br />
      </ExplainJob>
    </div>
  );
};
export const FrontEnd = () => {
  return (
    <div>
      <ExplainJob title="활동">
        프로젝트에서 웹 프론트엔드 개발을 담당합니다.
        <br />
        백엔드 개발자, PM, 디자이너와 함께 프로젝트를 진행합니다.
      </ExplainJob>
      <ExplainJob title="기술">
        1. HTML과 CSS 기본을 이해하고,
        <br />
        2. 자바스크립트의 기초 문법을 알고 계시는 분
        <br />
        3. 프로젝트를 책임지고 끝까지 마무리하실 분
        <br />
        4. 프로젝트를 끝까지 마무리하실 수 있는 분
      </ExplainJob>
      <ExplainJob title="이런 분이면 더 좋아요">
        1. React, Vue.js, Angular 중 하나 이상 다뤄 본 경험
        <br />
        2. git을 이용한 프로젝트 관리 경험
        <br />
        3. 디자이너, 백엔드 개발자와 협업해본 경험
        <br />
      </ExplainJob>
    </div>
  );
};
export const BackEnd = () => {
  return (
    <div>
      <ExplainJob title="활동">
        프로젝트에서 백엔드 개발을 담당합니다.
        <br />
        클라이언트 개발자, PM, 디자이너와 함께 프로젝트를 진행합니다.
      </ExplainJob>
      <ExplainJob title="기술">
        1. 데이터베이스를 이해하고 계신 분
        <br />
        2. RESTful의 개념을 이해하고 계신 분
      </ExplainJob>
      <ExplainJob title="이런 분이면 더 좋아요">
        1. RESTful API를 설계해보신 분
        <br />
        2. git을 이용한 프로젝트 관리 경험
        <br />
        3. 디자이너, 프론트엔드 개발자와 협업해본 경험
        <br />
      </ExplainJob>
    </div>
  );
};

const ExplainJobTitle = styled(Text.SmallBold)`
  font-size: 22px;
`;
function ExplainJob(props) {
  return (
    <div>
      <ExplainJobTitle>{props.title}</ExplainJobTitle>
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', marginBottom: '50px' }}>
        <div style={{ width: '0', height: '13px', border: '1px solid #7e7c7c', marginTop: '13px' }} />
        <Text.Small style={{ margin: '0', paddingLeft: '20px', lineHeight: '2.6rem' }}>{props.children}</Text.Small>
      </div>
    </div>
  );
}
