import React, { useEffect, useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { useRouter } from 'next/router';
import { getNotionPost } from '../src/data/source/NotionApi';
import AnimatedPage from '../src/components/template/AnimatedPage';
import ScrollToTopButton from '../src/components/ScrollToTopButton';
import { menuAtom } from '../src/recoil/atom';
import { NotionRenderer } from 'react-notion';
import styled from 'styled-components';

import 'react-notion/src/styles.css';
import 'prismjs/themes/prism-tomorrow.css';

const Container = styled.div`
  width: 100%;
  background-color: #fffcfa;
  min-height: 100vh;
  padding: 3rem 0;
`;

const Post = () => {
  const setMenu = useSetRecoilState(menuAtom);

  const router = useRouter();
  const { id } = router.query;

  const [notionData, setNotionData] = useState({});

  useEffect(() => {
    if (id) {
      getNotionPost(id)
        .then(data => {
          setNotionData(data);
        })
        .catch(err => {
          alert('포스트를 불러오는데 실패했습니다.');
          router.push('/blog');
        });
    }
  }, [id]);

  return (
    <AnimatedPage blackHeader={true}>
      <Container>
        {setMenu(1)}
        {Object.keys(notionData).length && <NotionRenderer blockMap={notionData} fullPage={true} />}
        <ScrollToTopButton />
      </Container>
      <style>{'body { background-color: #fffcfa; }'}</style>
      <style>{'.notion-page-header { display: none; }'}</style>
    </AnimatedPage>
  );
};

export default Post;
