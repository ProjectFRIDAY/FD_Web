import React from 'react';
import { useSetRecoilState } from 'recoil';
import { visibleState } from '../../recoil/atom';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

const ModalStyle = styled.div`
  @media only screen and (max-width: 1000px) {
    width: 60%;
    height: 40%;
    top: 40vh;
    left: 23vw;
  }
  background-color: white;
  display: ${props => (props.visible ? 'block' : 'none')};
  width: 60vw;
  height: 80vh;
  position: fixed;
  border-radius: 3rem;
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.5);
  top: 15vh;
  left: 20vw;
  padding: 40px;
  color: black;
`;

const Img = styled.img`
  @media only screen and (max-width: 1000px) {
    width: 130px;
    height: 130px;
  }
  border: 1px solid gray;
  border-radius: 10px;
  width: 200px;
  height: 200px;
  margin-right: 50px;
`;

const Wrapper = styled.div`
  display: flex;
`;

const Title = styled.div`
  @media only screen and (max-width: 1000px) {
    font-size: 25px;
  }
  font-size: 40px;
  font-weight: 800;
`;

const Text = styled.div`
  @media only screen and (max-width: 1000px) {
    font-size: 15px;
    margin-top: 5px;
  }
  margin-top: 20px;
  font-size: 25px;
  font-weight: 800px;
  a:visited {
    color: blue;
  }
`;

const Link = styled.a`
  @media only screen and (max-width: 1000px) {
    margin-top: 10px;
  }
  font-size: 25px;
  font-weight: 800px;
  text-decoration: none;
  margin-top: 20px;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
    color: blue;
  }
`;

const Desc = styled.div`
  @media only screen and (max-width: 1000px) {
    font-size: 20px;
    margin-top: 15px;
    line-height: 30px;
  }
  font-size: 25px;
  margin-top: 20px;
  line-height: 40px;
`;

function Modal({ ...rest }) {
  const setVisible = useSetRecoilState(visibleState);

  const closeModal = () => {
    setVisible(false);
  };

  return (
    <ModalStyle {...rest}>
      <FontAwesomeIcon onClick={closeModal} icon={faXmark} className="icon" />
      <Wrapper>
        <Img src={rest.content.img} />
        <div style={{ display: 'flex', flexDirection: 'column', alignSelf: 'center' }}>
          <Title>프로젝트명: {rest.content.title}</Title>
          <Link href={rest.content.git} target="_blank">
            <Text style={{ display: 'inline' }}>Github 바로가기</Text>
          </Link>
          {rest.content.site ? (
            <Link style={{ marginTop: 0 }} href={rest.content.site} target="_blank">
              <Text style={{ display: 'inline-block' }}>플랜 다이얼 사이트 바로가기</Text>
            </Link>
          ) : (
            ''
          )}
          <Text>팀원: {rest.content.team}</Text>
          <Text>{rest.content.tag}</Text>
        </div>
      </Wrapper>
      <Desc>프로젝트 설명: {rest.content.desc}</Desc>
      {rest.content.aos ? (
        <Link href={rest.content.aos} target="_blank">
          <img style={{ width: 200, marginTop: 20 }} src={require('../../assets/images/aos.png')}></img>
        </Link>
      ) : (
        ''
      )}
      {rest.content.ios ? (
        <Link href={rest.content.ios} target="_blank">
          <img style={{ width: 200, marginLeft: 10 }} src={require('../../assets/images/ios.png')}></img>
        </Link>
      ) : (
        ''
      )}
    </ModalStyle>
  );
}

export default Modal;
