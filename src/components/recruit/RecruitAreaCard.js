import React, { useState } from 'react';
import * as Text from './Text';
import * as Job from './JobExplain';
import designImg from '../../assets/images/job/design.jpg';
import IosImg from '../../assets/images/job/ios.jpg';
import AndroidImg from '../../assets/images/job/android.png';
import FrontEndImg from '../../assets/images/job/fe.jpg';
import BackEndImg from '../../assets/images/job/be.jpg';
import PmImg from '../../assets/images/job/pm.jpg';

function RecruitAreaCard() {
  const [jobSel, setJobSel] = useState(0);
  const [devSel, setDevSel] = useState(0);
  const states = [
    [jobSel, setJobSel],
    [devSel, setDevSel],
  ];

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: '100px',
      }}
    >
      <Text.Big>모집 분야</Text.Big>
      <div style={{ marginTop: '80px' }}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            width: '500px',
            alignItems: 'center',
            margin: 'auto',
            marginBottom: '50px',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '480px' }}>
            <JobSelBtn states={states} index={0}>
              디자이너
            </JobSelBtn>
            <JobSelBtn states={states} index={1}>
              개발자
            </JobSelBtn>
            <JobSelBtn states={states} index={2}>
              기획자
            </JobSelBtn>
          </div>
          <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '500px' }}>
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
          </div>
          <img
            src={
              (jobSel === 0 && designImg) ||
              (jobSel === 2 && PmImg) ||
              (devSel === 0 && IosImg) ||
              (devSel === 1 && AndroidImg) ||
              (devSel === 2 && FrontEndImg) ||
              (devSel === 3 && BackEndImg)
            }
            alt="Job description"
            width="500"
            height="300"
            style={{ marginTop: '30px' }}
          />
        </div>
        {(jobSel === 0 && <Job.Designer />) ||
          (jobSel === 2 && <Job.Planner />) ||
          (devSel === 0 && <Job.IOS />) ||
          (devSel === 1 && <Job.Android />) ||
          (devSel === 2 && <Job.FrontEnd />) ||
          (devSel === 3 && <Job.BackEnd />)}
      </div>
    </div>
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
