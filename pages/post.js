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
import HitsBadge from '../src/components/blog/HitsBadge';

const Container = styled.div`
  width: 100%;
  padding: 3rem 0;
`;

const Placeholder = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const cssOverrides = `
  body {
    background-color: #051614;
  }
  .notion-page-header {
    display: none;
  }
  .notion {
    color: #eee;
    caret-color: #eee;
  }
  .notion-emoji {
    font-family: 'TossFace', 'Apple Color Emoji', 'SegoeUISymbol', sans-serif;
  }
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
    <AnimatedPage>
      <style>{cssOverrides}</style>
      <Container>
        {setMenu(1)}
        {Object.keys(notionData).length > 0 ? (
          <NotionRenderer blockMap={notionData} fullPage={true} />
        ) : (
          <Placeholder >Loading...</Placeholder>
        )}
        <ScrollToTopButton />
        <HitsBadge url={`https://fridayproject.co.kr/post?id=${id}`} />
      </Container>
    </AnimatedPage>
  );
};

export default Post;
