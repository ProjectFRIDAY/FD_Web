import React, { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import { useRouter } from 'next/router';
import { getNotionPost, getBlogItems } from '../../src/data/source/NotionApi';
import AnimatedPage from '../../src/components/template/AnimatedPage';
import ScrollToTopButton from '../../src/components/ScrollToTopButton';
import { menuAtom } from '../../src/recoil/atom';
import { NotionRenderer } from 'react-notion';
import styled, { css } from 'styled-components';

import 'react-notion/src/styles.css';
import 'prismjs/themes/prism-tomorrow.css';
import HitsBadge from '../../src/components/blog/HitsBadge';
import { DiscussionEmbed } from 'disqus-react';

const Container = styled.div`
  width: 100%;
  padding: 3rem 0;
`;

const ContentContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Placeholder = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Comment = styled(DiscussionEmbed)`
  margin-top: 5rem;
  width: 80vw;
`;

const cssOverrides = css`
  body {
    background-color: #051614;
  }
  .notion-page-header {
    display: none;
  }
  .notion {
    color: #eee;
    caret-color: #eee;
    width: 100%;
  }
`;

export const getStaticPaths = async () => {
  const paths = [];

  try {
    const blogItems = await getBlogItems();

    for (const item of blogItems) {
      paths.push({
        params: {
          id: item.id,
        },
      });
    }
  } catch (err) {
    console.log(err);
  }

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps = async ({ params }) => {
  const id = params.id;
  let notionData = {};
  let isError = false;

  try {
    notionData = await getNotionPost(id);
  } catch (err) {
    isError = true;
  }

  return {
    props: {
      id,
      notionData,
      isError,
    },
    revalidate: 10,
  };
};

const Post = ({ id, notionData, isError }) => {
  const setMenu = useSetRecoilState(menuAtom);
  const router = useRouter();

  useEffect(() => {
    if (isError) {
      alert('포스트를 불러오는데 실패했습니다.');
      router.push('/blog');
    }
  }, []);

  return (
    <AnimatedPage>
      <style>{cssOverrides}</style>
      <Container>
        {setMenu(1)}
        {router.isFallback || isError ? (
          <Placeholder>Loading...</Placeholder>
        ) : (
          <ContentContainer>
            <NotionRenderer blockMap={notionData ?? {}} fullPage={true} />
            <HitsBadge url={`https://fridayproject.co.kr/post/${id}`} />
            <Comment
              shortname="friday-3"
              config={{
                url: `https://fridayproject.co.kr/post/${id}`,
                identifier: id,
                language: 'ko',
              }}
            />
          </ContentContainer>
        )}
        <ScrollToTopButton />
      </Container>
    </AnimatedPage>
  );
};

export default Post;
