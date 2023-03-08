import React from 'react';
import { useRouter } from 'next/router';
import 'react-notion/src/styles.css';
import 'prismjs/themes/prism-tomorrow.css';
import { getNotionPost } from '../src/data/source/notion';
import AnimatedPage from '../src/components/template/AnimatedPage';
import ScrollToTopButton from '../src/components/ScrollToTopButton';

const Post = () => {
  const router = useRouter();
  const { id } = router.query;

  const [notionData, setNotionData] = useState({});

  useEffect(() => {
    if (id) {
      getNotionPost(id).then(data => {
        setNotionData(data);
      });
    }
  }, [id]);

  return (
    <AnimatedPage>
      {setMenu(1)}
      Object.keys(notionData).length &&
      <NotionRenderer blockMap={notionData} fullPage={true} />
      <ScrollToTopButton />
    </AnimatedPage>
  );
};

export default Post;
