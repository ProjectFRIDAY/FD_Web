import React from 'react';
import { useSetRecoilState } from 'recoil';
import { menuAtom } from '../recoil/atom';
import AnimatedPage from '../components/template/AnimatedPage';
import { getBlogItems } from '../data/source/NotionApi';

const Blog = () => {
  const setMenu = useSetRecoilState(menuAtom);
  console.log(getBlogItems());

  return (
    <AnimatedPage>
      {setMenu(1)}
    </AnimatedPage>
  );
};

export default Blog;
