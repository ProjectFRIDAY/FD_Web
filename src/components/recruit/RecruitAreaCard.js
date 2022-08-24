import React, { useState } from 'react';
import styled from 'styled-components';
import * as Text from './Text';
import * as Job from './JobExplain';
// import designImg from '../../assets/images/job/design.jpg';
// import IosImg from '../../assets/images/job/ios.jpg';
// import AndroidImg from '../../assets/images/job/android.png';
// import FrontEndImg from '../../assets/images/job/fe.jpg';
// import BackEndImg from '../../assets/images/job/be.jpg';
// import PmImg from '../../assets/images/job/pm.jpg';

const RecruitLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10rem;
`;

const SelectContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
  align-items: center;
  margin-top: 20px;
`;

const RoleSelect = styled.div`
  display: flex;
  justify-content: space-between;
  width: 480px;
`;

const DevSelect = styled.div`
  display: flex;
  justify-content: space-between;
  width: 500px;
`;

// const RoleImage = styled.img`
//   width: 500px;
//   height: 300px;
//   margin-top: 30px;
// `;

const ExplainContainer = styled.div`
  margin-top: 3rem;
  padding-left: 5rem;
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
      <Text.Big>모집 분야</Text.Big>
      <SelectContainer>
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
            iOS
          </DevSelBtn>
          <DevSelBtn states={states} index={1}>
            Android
          </DevSelBtn>
          <DevSelBtn states={states} index={2}>
            Front-End
          </DevSelBtn>
          <DevSelBtn states={states} index={3}>
            Back-End
          </DevSelBtn>
        </DevSelect>
        {/* <RoleImage
            src={
              (jobSel === 0 && designImg) ||
              (jobSel === 2 && PmImg) ||
              (devSel === 0 && IosImg) ||
              (devSel === 1 && AndroidImg) ||
              (devSel === 2 && FrontEndImg) ||
              (devSel === 3 && BackEndImg)
            }
          /> */}
      </SelectContainer>
      <ExplainContainer>
        {(jobSel === 0 && <Job.Designer />) ||
          (jobSel === 2 && <Job.Planner />) ||
          (devSel === 0 && <Job.IOS />) ||
          (devSel === 1 && <Job.Android />) ||
          (devSel === 2 && <Job.FrontEnd />) ||
          (devSel === 3 && <Job.BackEnd />)}
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
