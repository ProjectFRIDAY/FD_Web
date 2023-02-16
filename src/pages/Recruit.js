import React from 'react';
import TitleBackgroundCard from '../components/recruit/TitleBackgroundCard';
import ProcessCard from '../components/recruit/ProcessCard';
import RecruitAreaCard from '../components/recruit/RecruitAreaCard';
import FAQCard from '../components/recruit/FAQCard';
import { menuAtom } from '../recoil/atom';
import { useSetRecoilState } from 'recoil';
import JoinFriday from '../components/JoinFriday';

function Recruit() {
  const setMenu = useSetRecoilState(menuAtom);
  return (
    <>
      {setMenu(1)}
      <TitleBackgroundCard />
      <ProcessCard />
      <RecruitAreaCard />
      <FAQCard />
      <JoinFriday />
    </>
  );
}

export default Recruit;
