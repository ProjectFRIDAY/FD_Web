import React, { useEffect, useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { useRouter } from 'next/router';
import { getNotionPost } from '../src/data/source/NotionApi';
import AnimatedPage from '../src/components/template/AnimatedPage';
import ScrollToTopButton from '../src/components/ScrollToTopButton';
import { menuAtom } from '../src/recoil/atom';
import { NotionRenderer } from 'react-notion';

import 'react-notion/src/styles.css';
import 'prismjs/themes/prism-tomorrow.css';

const Post = () => {
  const setMenu = useSetRecoilState(menuAtom);

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
      {Object.keys(notionData).length && <NotionRenderer blockMap={notionData} fullPage={true} />}
      <ScrollToTopButton />
    </AnimatedPage>
  );
};

export default Post;
