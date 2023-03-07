import React from 'react';
import { useSetRecoilState } from 'recoil';
import { menuAtom } from '../src/recoil/atom';
import AnimatedPage from '../src/components/template/AnimatedPage';
import { getBlogItems } from '../src/data/source/NotionApi';

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
