import React from 'react';
import styled from 'styled-components';
import * as Text from './Text';
import Jobs from '../../data/static/Jobs';

const JobDescContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  margin-bottom: 50px;
`;

const JobDescText = styled(Text.Small)`
  margin: 0;
  padding-left: 20px;
  line-height: 2;
`;

export const Designer = () => <Job job={Jobs.designer} />;
export const Planner = () => <Job job={Jobs.planner} />;
export const Mobile = () => <Job job={Jobs.mobile} />;
export const FrontEnd = () => <Job job={Jobs.frontend} />;
export const BackEnd = () => <Job job={Jobs.backend} />;

const ExplainJobTitle = styled(Text.SmallBold)`
  font-size: 22px;
  background-color: 'red';
`;

function Job({ job }) {
  return (
    <div>
      <ExplainJob title="활동">
        {job.descriptions.map((item, index) => (
          <span key={index}>
            {index + 1}. {item}
            <br />
          </span>
        ))}
      </ExplainJob>
      <ExplainJob title="자격 요건">
        {job.requirements.map((item, index) => (
          <span key={index}>
            {index + 1}. {item}
            <br />
          </span>
        ))}
      </ExplainJob>
      <ExplainJob title="이런 분이면 더 좋아요">
        {job.preferences.map((item, index) => (
          <span key={index}>
            {index + 1}. {item}
            <br />
          </span>
        ))}
      </ExplainJob>
    </div>
  );
}

function ExplainJob(props) {
  return (
    <div>
      <ExplainJobTitle>📌 {props.title}</ExplainJobTitle>
      <JobDescContainer>
        <div style={{ width: '0', height: '13px', border: '1px solid #7e7c7c', marginTop: '13px' }} />
        <JobDescText>{props.children}</JobDescText>
      </JobDescContainer>
    </div>
  );
}
