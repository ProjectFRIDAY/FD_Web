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
          setNotionData({
            'e64e1706-3fde-4390-b317-c5c6ae654a3b': {
              role: 'reader',
              value: {
                id: 'e64e1706-3fde-4390-b317-c5c6ae654a3b',
                version: 550,
                type: 'page',
                properties: {
                  'pC`m': [['모바일 앱 개발']],
                  title: [['MVC, MVP, MVVM, … 앱 개발 아키텍처 정복하기 😎']],
                },
                content: [
                  'd7518d38-facd-4dba-bc98-dbda8787e1a8',
                  '34ff4d66-cd0c-4f72-9ab9-fb8196bbe06d',
                  '4fd2cbed-6661-49a0-8d43-0fadc864dffb',
                  '78f00360-260f-4632-a0fd-733a0a9da646',
                  'd43473ba-43a7-47a8-83ff-ca0345e22ce3',
                ],
                format: { page_icon: '🏗️', page_full_width: true },
                created_time: 1678210879996,
                last_edited_time: 1678357322293,
                parent_id: 'c02680e0-50fa-4ccd-b46e-0041307973b7',
                parent_table: 'collection',
                alive: true,
                created_by_table: 'notion_user',
                created_by_id: 'e84dd019-ea1a-4bfa-abbc-3a42236ab82c',
                last_edited_by_table: 'notion_user',
                last_edited_by_id: 'e84dd019-ea1a-4bfa-abbc-3a42236ab82c',
                space_id: 'af0d9af8-0375-4f37-9a88-32ac67bfe7b8',
              },
            },
            '0976d6a1-0f26-4e56-bc8a-8e39423a0005': {
              role: 'reader',
              value: {
                id: '0976d6a1-0f26-4e56-bc8a-8e39423a0005',
                version: 96,
                type: 'collection_view',
                view_ids: ['bb9bbf0b-0ab6-4aac-bd7c-a17f44da70cf'],
                collection_id: 'c02680e0-50fa-4ccd-b46e-0041307973b7',
                format: {
                  block_locked: true,
                  block_locked_by: 'e84dd019-ea1a-4bfa-abbc-3a42236ab82c',
                  collection_pointer: {
                    id: 'c02680e0-50fa-4ccd-b46e-0041307973b7',
                    table: 'collection',
                    spaceId: 'af0d9af8-0375-4f37-9a88-32ac67bfe7b8',
                  },
                },
                permissions: [
                  {
                    role: { read_comment: true, read_content: true },
                    type: 'bot_permission',
                    bot_id: 'c14604af-35fa-46db-acba-278de62346f5',
                    parent_id: 'af0d9af8-0375-4f37-9a88-32ac67bfe7b8',
                    parent_table: 'space',
                  },
                  { role: 'reader', type: 'public_permission', added_timestamp: 1678246117521, allow_duplicate: false },
                ],
                created_time: 1678209922890,
                last_edited_time: 1678248036894,
                parent_id: '00b6f28d-1257-4e06-8a5c-1112f5f5bb74',
                parent_table: 'block',
                alive: true,
                created_by_table: 'notion_user',
                created_by_id: 'e84dd019-ea1a-4bfa-abbc-3a42236ab82c',
                last_edited_by_table: 'notion_user',
                last_edited_by_id: 'e84dd019-ea1a-4bfa-abbc-3a42236ab82c',
                space_id: 'af0d9af8-0375-4f37-9a88-32ac67bfe7b8',
              },
              collection: {
                title: [['Friday Blogs']],
                schema: {
                  '\\dE?': { name: '편집 일시', type: 'last_edited_time' },
                  'jQ{Y': { name: '작성자', type: 'created_by' },
                  'nJV:': { name: '작성 일시', type: 'created_time' },
                  'pC`m': {
                    name: '태그',
                    type: 'multi_select',
                    options: [
                      { id: 'c5e1ec2e-5cba-47fe-8451-ba61a7c1575f', color: 'gray', value: '프로젝트 매니징' },
                      { id: 'd2038c90-4385-4f4a-afca-c82fc1a8e869', color: 'red', value: 'UI/UX 디자인' },
                      { id: '972ffe06-0e50-46a0-9783-172ed3c593c4', color: 'brown', value: '프론트엔드 개발' },
                      { id: '7f3a5856-9975-4ac0-b9e4-1ad75526dd7f', color: 'orange', value: '백엔드 개발' },
                      { id: '2ad7ced4-dc6a-49d7-bb92-b443d21107fd', color: 'yellow', value: '모바일 앱 개발' },
                      { id: '44cac078-0180-4f91-bd40-5527a71e5912', color: 'default', value: '인공지능 개발' },
                      { id: 'bbe0ab41-ef29-4d18-bb9b-f2bd1ba6fb1e', color: 'blue', value: '시사/정보' },
                      { id: 'e235675d-4368-426c-9776-d332357e969f', color: 'pink', value: 'DevOps/MLOps' },
                      { id: '>|F~', color: 'green', value: '개발 문화' },
                      { id: '|AYX', color: 'purple', value: '취업/창업' },
                    ],
                  },
                  title: { name: '제목', type: 'title' },
                },
                types: [
                  {
                    id: 'bb9bbf0b-0ab6-4aac-bd7c-a17f44da70cf',
                    version: 25,
                    type: 'table',
                    format: {
                      table_wrap: true,
                      list_properties: [{ visible: true, property: 'KYR[' }],
                      table_properties: [
                        { width: 200, visible: false, property: '\\dE?' },
                        { width: 276, visible: true, property: 'title' },
                        { width: 200, visible: true, property: 'pC`m' },
                        { width: 200, visible: true, property: 'nJV:' },
                        { width: 200, visible: true, property: 'jQ{Y' },
                      ],
                      collection_pointer: {
                        id: 'c02680e0-50fa-4ccd-b46e-0041307973b7',
                        table: 'collection',
                        spaceId: 'af0d9af8-0375-4f37-9a88-32ac67bfe7b8',
                      },
                      collection_peek_mode: 'full_page',
                      hide_table_vertical_lines: false,
                      hide_linked_collection_name: true,
                    },
                    parent_id: '0976d6a1-0f26-4e56-bc8a-8e39423a0005',
                    parent_table: 'block',
                    alive: true,
                    page_sort: [
                      'c4df2de6-8abb-4160-8ebf-0f46f1435c97',
                      '380020b7-8476-48c9-a071-34c36d580c88',
                      'e9a38a88-5dc4-4544-9870-895fad1be012',
                      'cd221ce3-4ec3-4cee-953b-6f3bffbcd668',
                      '14c5bbdf-d6e9-445b-b05c-544e611562d2',
                      '66f1cdf0-fde7-4c7b-b040-21adaf0b4339',
                      '38128c98-1f02-4bd8-89fb-1443a773ef96',
                    ],
                    query2: {
                      sort: [{ property: 'nJV:', direction: 'ascending' }],
                      timeline_by: 'QBpH',
                      aggregations: [{ property: 'title', aggregator: 'count' }],
                    },
                    space_id: 'af0d9af8-0375-4f37-9a88-32ac67bfe7b8',
                  },
                ],
                data: [
                  {
                    id: 'e64e1706-3fde-4390-b317-c5c6ae654a3b',
                    태그: [['모바일 앱 개발']],
                    제목: [['MVC, MVP, MVVM, … 앱 개발 아키텍처 정복하기 😎']],
                  },
                ],
              },
            },
            'd7518d38-facd-4dba-bc98-dbda8787e1a8': {
              role: 'reader',
              value: {
                id: 'd7518d38-facd-4dba-bc98-dbda8787e1a8',
                version: 527,
                type: 'callout',
                properties: {
                  title: [
                    ['모바일 앱을 공부하다보면 꼭 등장하는 '],
                    ['아키텍처 패턴들', [['b']]],
                    [', 혹시 대충 공부하고 넘어가셨나요?\n이번 기회에 모두 정리해드릴게요 😎'],
                  ],
                },
                format: { page_icon: '💡', block_color: 'gray_background' },
                created_time: 1678249091043,
                last_edited_time: 1678357038615,
                parent_id: 'e64e1706-3fde-4390-b317-c5c6ae654a3b',
                parent_table: 'block',
                alive: true,
                created_by_table: 'notion_user',
                created_by_id: 'e84dd019-ea1a-4bfa-abbc-3a42236ab82c',
                last_edited_by_table: 'notion_user',
                last_edited_by_id: 'e84dd019-ea1a-4bfa-abbc-3a42236ab82c',
                space_id: 'af0d9af8-0375-4f37-9a88-32ac67bfe7b8',
              },
            },
            '34ff4d66-cd0c-4f72-9ab9-fb8196bbe06d': {
              role: 'reader',
              value: {
                id: '34ff4d66-cd0c-4f72-9ab9-fb8196bbe06d',
                version: 5,
                type: 'text',
                created_time: 1678357040686,
                last_edited_time: 1678357040690,
                parent_id: 'e64e1706-3fde-4390-b317-c5c6ae654a3b',
                parent_table: 'block',
                alive: true,
                created_by_table: 'notion_user',
                created_by_id: 'e84dd019-ea1a-4bfa-abbc-3a42236ab82c',
                last_edited_by_table: 'notion_user',
                last_edited_by_id: 'e84dd019-ea1a-4bfa-abbc-3a42236ab82c',
                space_id: 'af0d9af8-0375-4f37-9a88-32ac67bfe7b8',
              },
            },
            '4fd2cbed-6661-49a0-8d43-0fadc864dffb': {
              role: 'reader',
              value: {
                id: '4fd2cbed-6661-49a0-8d43-0fadc864dffb',
                version: 268,
                type: 'header',
                properties: { title: [['1. 아키텍처는 무엇이고, 왜 알아야 할까?']] },
                created_time: 1678249184725,
                last_edited_time: 1678249227494,
                parent_id: 'e64e1706-3fde-4390-b317-c5c6ae654a3b',
                parent_table: 'block',
                alive: true,
                created_by_table: 'notion_user',
                created_by_id: 'e84dd019-ea1a-4bfa-abbc-3a42236ab82c',
                last_edited_by_table: 'notion_user',
                last_edited_by_id: 'e84dd019-ea1a-4bfa-abbc-3a42236ab82c',
                space_id: 'af0d9af8-0375-4f37-9a88-32ac67bfe7b8',
              },
            },
            '78f00360-260f-4632-a0fd-733a0a9da646': {
              role: 'reader',
              value: {
                id: '78f00360-260f-4632-a0fd-733a0a9da646',
                version: 33,
                type: 'code',
                properties: { title: [['var a = "1";']], language: [['JavaScript']] },
                created_time: 1678357322296,
                last_edited_time: 1678357327987,
                parent_id: 'e64e1706-3fde-4390-b317-c5c6ae654a3b',
                parent_table: 'block',
                alive: true,
                created_by_table: 'notion_user',
                created_by_id: 'e84dd019-ea1a-4bfa-abbc-3a42236ab82c',
                last_edited_by_table: 'notion_user',
                last_edited_by_id: 'e84dd019-ea1a-4bfa-abbc-3a42236ab82c',
                space_id: 'af0d9af8-0375-4f37-9a88-32ac67bfe7b8',
              },
            },
            'd43473ba-43a7-47a8-83ff-ca0345e22ce3': {
              role: 'reader',
              value: {
                id: 'd43473ba-43a7-47a8-83ff-ca0345e22ce3',
                version: 4,
                type: 'text',
                created_time: 1678357332142,
                last_edited_time: 1678357332143,
                parent_id: 'e64e1706-3fde-4390-b317-c5c6ae654a3b',
                parent_table: 'block',
                alive: true,
                created_by_table: 'notion_user',
                created_by_id: 'e84dd019-ea1a-4bfa-abbc-3a42236ab82c',
                last_edited_by_table: 'notion_user',
                last_edited_by_id: 'e84dd019-ea1a-4bfa-abbc-3a42236ab82c',
                space_id: 'af0d9af8-0375-4f37-9a88-32ac67bfe7b8',
              },
            },
          });
          // router.push('/blog');
        });
    }
  }, [id]);

  return (
    <AnimatedPage>
      <style>{cssOverrides}</style>
      <Container>
        {setMenu(1)}
        {Object.keys(notionData).length && <NotionRenderer blockMap={notionData} fullPage={true} />}
        <ScrollToTopButton />
        <HitsBadge url={`https://fridayproject.co.kr/post?id=${id}`} />
      </Container>
    </AnimatedPage>
  );
};

export default Post;
