import React from 'react';
import TitleBackgroundCard from '../src/components/recruit/TitleBackgroundCard';
import ProcessCard from '../src/components/recruit/ProcessCard';
import RecruitAreaCard from '../src/components/recruit/RecruitAreaCard';
import FAQCard from '../src/components/recruit/FAQCard';
import { menuAtom } from '../src/recoil/atom';
import { useSetRecoilState } from 'recoil';
import AnimatedPage from '../src/components/template/AnimatedPage';

function Recruit() {
  const setMenu = useSetRecoilState(menuAtom);
  return (
    <AnimatedPage>
      {setMenu(1)}
      <TitleBackgroundCard />
      <ProcessCard />
      <RecruitAreaCard />
      <FAQCard />
    </AnimatedPage>
  );
}

export default Recruit;
