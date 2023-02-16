import React, { useState } from 'react';
import styled from 'styled-components';
import * as Text from './Text';
import * as Job from './JobExplain';
import designImg from '../../assets/images/job/design.jpg';
import MobileImg from '../../assets/images/job/mobile.jpeg';
import FrontEndImg from '../../assets/images/job/fe.jpg';
import BackEndImg from '../../assets/images/job/be.jpg';
import PmImg from '../../assets/images/job/pm.jpg';

const RecruitLayout = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 10rem;
  gap: 3rem 8rem;
`;

const SelectContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: min(500px, 95vw);
  align-items: center;
  margin-top: 20px;
`;

const RoleSelect = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  gap: 10px;
`;

const DevSelect = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  gap: 10px;
`;

const RoleImage = styled.img`
  width: 100%;
  height: 300px;
  margin-top: 30px;
  object-fit: cover;
`;

const ExplainContainer = styled.div`
  width: min(600px, 90vw);
`;

function RecruitAreaCard() {
  const [jobSel, setJobSel] = useState(0);
  const [devSel, setDevSel] = useState(0);
  const states = [
    [jobSel, setJobSel],
    [devSel, setDevSel],
  ];

  return (
    <RecruitLayout>
      <SelectContainer>
        <Text.Big style={{ marginBottom: '5rem' }}>모집 분야</Text.Big>
        <RoleSelect>
          <JobSelBtn states={states} index={0}>
            디자이너
          </JobSelBtn>
          <JobSelBtn states={states} index={1}>
            개발자
          </JobSelBtn>
          <JobSelBtn states={states} index={2}>
            PM
          </JobSelBtn>
        </RoleSelect>
        <DevSelect>
          <DevSelBtn states={states} index={0}>
            Front-End
          </DevSelBtn>
          <DevSelBtn states={states} index={1}>
            Back-End
          </DevSelBtn>
          <DevSelBtn states={states} index={2}>
            Mobile
          </DevSelBtn>
        </DevSelect>
        <RoleImage
          src={
            (jobSel === 0 && designImg) ||
            (jobSel === 2 && PmImg) ||
            (devSel === 0 && FrontEndImg) ||
            (devSel === 1 && BackEndImg) ||
            (devSel === 2 && MobileImg)
          }
        />
      </SelectContainer>
      <ExplainContainer>
        {(jobSel === 0 && <Job.Designer />) ||
          (jobSel === 2 && <Job.Planner />) ||
          (devSel === 0 && <Job.FrontEnd />) ||
          (devSel === 1 && <Job.BackEnd />) ||
          (devSel === 2 && <Job.Mobile />)}
      </ExplainContainer>
    </RecruitLayout>
  );
}
export default RecruitAreaCard;

function JobSelBtn(props) {
  const defaultStyle = {
    width: '130px',
    height: '40px',
    borderRadius: '10px',
    border: 'none',
    fontSize: '20px',
  };
  const selectedStyle = {
    fontWeight: 'bold',
    color: 'white',
    backgroundImage: 'linear-gradient(180deg, #00857d 0%, #01baae 30%',
  };
  const deselectedStyle = {
    color: 'black',
    background: 'white',
    cursor: 'pointer',
  };
  let style = Object.assign({}, defaultStyle, props.states[0][0] === props.index ? selectedStyle : deselectedStyle);
  return (
    <button
      style={style}
      onClick={() => {
        props.states[0][1](props.index);
      }}
    >
      {props.children}
    </button>
  );
}

function DevSelBtn(props) {
  const isSelected = props.states[1][0] === props.index;
  return props.states[0][0] !== 1 ? (
    <></>
  ) : (
    <span
      style={{
        width: '100px',
        display: 'inline-block',
        fontSize: '20px',
        fontFamily: 'BodoniMT',
        textAlign: 'center',
        paddingBottom: '10px',
        marginTop: '40px',
        borderBottom: `${isSelected ? '2px solid #01baae' : 'none'}`,
        cursor: `${isSelected ? 'default' : 'pointer'}`,
      }}
      onClick={() => {
        props.states[1][1](props.index);
      }}
    >
      {props.children}
    </span>
  );
}
