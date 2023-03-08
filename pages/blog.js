import React from 'react';
import { useSetRecoilState } from 'recoil';
import { menuAtom } from '../src/recoil/atom';
import AnimatedPage from '../src/components/template/AnimatedPage';
import { getBlogItems } from '../src/data/source/NotionApi';
import BlogList from '../src/components/blog/BlogList';
import styled from 'styled-components';
import ScrollToTopButton from '../src/components/ScrollToTopButton';

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100px;
  margin: 10vw 0;
`;

const StyledH1 = styled.div`
  font-size: 10vw;
  text-align: center;
  line-height: 1;
`;

const BackgroundText = styled.div`
  opacity: 0.4;
  filter: blur(10px);
  font-family: SegoeUISymbol;
  font-size: 10vw;
  text-align: center;
  color: #f1efef;
  @media only screen and (max-width: 800px) {
    filter: blur(4px);
  }
`;

const Text = styled.div`
  background-color: rgba(0, 122, 114, 0.86);
  padding: 1.3rem 1rem;
  font-size: 40px;
  margin-bottom: 3rem;
  text-align: center;
`;

const Blog = () => {
  const setMenu = useSetRecoilState(menuAtom);
  const [blogItems, setBlogItems] = React.useState([]);

  React.useEffect(() => {
    getBlogItems().then(data => {
      setBlogItems(data);
    });
  }, []);

  return (
    <AnimatedPage>
      {setMenu(1)}
      <TitleContainer>
        <StyledH1 className="title">Friday</StyledH1>
        <BackgroundText>VALUABLE</BackgroundText>
      </TitleContainer>
      <Text className="title">Friday Blog</Text>
      <BlogList blogItems={blogItems} />
      <ScrollToTopButton />
    </AnimatedPage>
  );
};

export default Blog;
