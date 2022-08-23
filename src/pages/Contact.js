import React from 'react';
import styled from 'styled-components';
import { menuAtom } from '../recoil/atom/menuAtom';
import { useSetRecoilState } from 'recoil';

const GradientBackground = styled.div`
  width: 100%;
  height: 1000px;
  padding-left: 3rem;
  padding-right: 3rem;
  background-image: linear-gradient(148deg, #053a36 0%, #000 28%);
`;

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem;
`;

const ContactLayout = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0rem;
  padding: 0rem;
`;

const ContactBox = styled.div`
  width: 20rem;
  height: 5rem;
  margin: 1rem;
  background-color: #ccc;
  color: black;
  display: flex;
  justify-content: space-around;
  border-radius: 1rem;
`;

function Contact() {
  const setMenu = useSetRecoilState(menuAtom);
  return (
    <div className="page">
      {setMenu(1)}
      <GradientBackground>
        <Layout>
          <h1 style={{ fontSize: '8vw' }}>Contact</h1>
          <ContactLayout>
            <ContactBox>메일</ContactBox>
            <ContactBox>카카오톡</ContactBox>
            <ContactBox>인스타그램</ContactBox>
          </ContactLayout>
        </Layout>
      </GradientBackground>
    </div>
  );
}

export default Contact;
