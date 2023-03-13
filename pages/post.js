import React, { useEffect, useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { useRouter } from 'next/router';
import { getNotionPost } from '../src/data/source/NotionApi';
import AnimatedPage from '../src/components/template/AnimatedPage';
import ScrollToTopButton from '../src/components/ScrollToTopButton';
import { menuAtom } from '../src/recoil/atom';
import { NotionRenderer } from 'react-notion';
import styled, { css } from 'styled-components';

import 'react-notion/src/styles.css';
import 'prismjs/themes/prism-tomorrow.css';
import HitsBadge from '../src/components/blog/HitsBadge';
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

const Post = () => {
  const setMenu = useSetRecoilState(menuAtom);

  const router = useRouter();
  const { id, title } = router.query;

  const [notionData, setNotionData] = useState({});

  useEffect(() => {
    if (id) {
      getNotionPost(id)
        .then(data => {
          setNotionData(data);
        })
        .catch(err => {
          setNotionData({
            'e64e1706-3fde-4390-b317-c5c6ae654a3b': {
              role: 'reader',
              value: {
                id: 'e64e1706-3fde-4390-b317-c5c6ae654a3b',
                version: 737,
                type: 'page',
                properties: { 'pC`m': [['개발 문화']], title: [['Friday Blog를 오픈했어요 💚']] },
                content: [
                  'd7518d38-facd-4dba-bc98-dbda8787e1a8',
                  '34ff4d66-cd0c-4f72-9ab9-fb8196bbe06d',
                  '4fd2cbed-6661-49a0-8d43-0fadc864dffb',
                  '8bcda62b-c102-439d-82cb-f5300d661da5',
                  'd41ec88e-da8a-44a3-bb4b-3e8e7736418b',
                  '7d91c0c2-2526-4a58-b304-1b142c4fa49c',
                  '4ea8abe3-47c5-43af-afb3-e356a4861d48',
                  '6d36c96b-2aa1-44e3-9e90-2e27678420ce',
                  'c4af3639-7966-4ef4-b108-3b4c1bd96f22',
                  '2a42b304-be91-47b5-a63e-277410c72d4f',
                  '9bbe94d8-af6e-4bdb-a885-7c4048ad0bdb',
                  '502776ab-8a9f-49f5-a1c8-f6242fdb73e3',
                  '64c10786-dd66-4a0a-8f8d-ffe27ecc6d2d',
                  'b1ab605d-401e-4182-95e6-d954641d1b2f',
                  '6f4807c9-8a44-4db0-bc53-082239fad45c',
                ],
                format: { page_icon: '🤗', page_full_width: false },
                created_time: 1678210879996,
                last_edited_time: 1678693920477,
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
                    태그: [['개발 문화']],
                    제목: [['Friday Blog를 오픈했어요 💚']],
                  },
                ],
              },
            },
            'd7518d38-facd-4dba-bc98-dbda8787e1a8': {
              role: 'reader',
              value: {
                id: 'd7518d38-facd-4dba-bc98-dbda8787e1a8',
                version: 1236,
                type: 'callout',
                properties: {
                  title: [
                    ['Friday 구성원의 '],
                    ['역량 향상', [['b'], ['_']]],
                    ['과 '],
                    ['소통', [['b'], ['_']]],
                    ['을 위해 블로그를 오픈했어요.\n구성원의 '],
                    ['자발적인 참여', [['b'], ['_']]],
                    ['를 통해 다양한 글들이 게시될 예정이에요.'],
                  ],
                },
                format: { page_icon: '💡', block_color: 'gray_background' },
                created_time: 1678249091043,
                last_edited_time: 1678372108183,
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
                version: 408,
                type: 'header',
                properties: { title: [['📌 Friday 블로그는 왜 탄생했을까요?']] },
                created_time: 1678249184725,
                last_edited_time: 1678375060053,
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
            '8bcda62b-c102-439d-82cb-f5300d661da5': {
              role: 'reader',
              value: {
                id: '8bcda62b-c102-439d-82cb-f5300d661da5',
                version: 1133,
                type: 'text',
                properties: {
                  title: [
                    ['지금까지 Friday 활동은 '],
                    ['프로젝트별로 자율 진행', [['b'], ['_']]],
                    [
                      '되었어요.\n어떤 프로젝트에서는 그룹 스터디 등의 다양한 활동을 진행한 반면, 어떤 프로젝트에서는 기획과 개발에만 집중하기도 했어요.',
                    ],
                  ],
                },
                created_time: 1678371795560,
                last_edited_time: 1678372210932,
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
            'd41ec88e-da8a-44a3-bb4b-3e8e7736418b': {
              role: 'reader',
              value: {
                id: 'd41ec88e-da8a-44a3-bb4b-3e8e7736418b',
                version: 327,
                type: 'text',
                properties: {
                  title: [
                    ['이뿐만 아니라 프로젝트 간의 교류가 적어 '],
                    ['서로 이야기를 나눌 기회가 부족', [['b'], ['_']]],
                    ['했어요.\nFriday 블로그는 이러한 문제를 해결하기 위해 탄생했답니다 😁'],
                  ],
                },
                created_time: 1678372210930,
                last_edited_time: 1678372678064,
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
            '7d91c0c2-2526-4a58-b304-1b142c4fa49c': {
              role: 'reader',
              value: {
                id: '7d91c0c2-2526-4a58-b304-1b142c4fa49c',
                version: 11,
                type: 'text',
                created_time: 1678372277712,
                last_edited_time: 1678372281891,
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
            '4ea8abe3-47c5-43af-afb3-e356a4861d48': {
              role: 'reader',
              value: {
                id: '4ea8abe3-47c5-43af-afb3-e356a4861d48',
                version: 95,
                type: 'text',
                properties: { title: [['Friday 블로그를 통해', [['b'], ['_']]]] },
                created_time: 1678372277712,
                last_edited_time: 1678372604508,
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
            '6d36c96b-2aa1-44e3-9e90-2e27678420ce': {
              role: 'reader',
              value: {
                id: '6d36c96b-2aa1-44e3-9e90-2e27678420ce',
                version: 377,
                type: 'numbered_list',
                properties: {
                  title: [
                    ['새로 배웠거나 알고 있는 내용을 정리하며 개인의 역량을 기를 수 있어요.', [['b'], ['h', 'yellow']]],
                  ],
                },
                created_time: 1678372293111,
                last_edited_time: 1678372647363,
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
            'c4af3639-7966-4ef4-b108-3b4c1bd96f22': {
              role: 'reader',
              value: {
                id: 'c4af3639-7966-4ef4-b108-3b4c1bd96f22',
                version: 220,
                type: 'numbered_list',
                properties: {
                  title: [['서로의 글을 보며 다양한 지식과 경험을 얻을 수 있어요.', [['b'], ['h', 'yellow']]]],
                },
                created_time: 1678372354285,
                last_edited_time: 1678372643917,
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
            '2a42b304-be91-47b5-a63e-277410c72d4f': {
              role: 'reader',
              value: {
                id: '2a42b304-be91-47b5-a63e-277410c72d4f',
                version: 290,
                type: 'numbered_list',
                properties: {
                  title: [['추후 글을 되돌아보며 회고하거나 취업 준비에 활용할 수 있어요.', [['b'], ['h', 'yellow']]]],
                },
                created_time: 1678372550645,
                last_edited_time: 1678372650380,
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
            '9bbe94d8-af6e-4bdb-a885-7c4048ad0bdb': {
              role: 'reader',
              value: {
                id: '9bbe94d8-af6e-4bdb-a885-7c4048ad0bdb',
                version: 10,
                type: 'text',
                created_time: 1678371795560,
                last_edited_time: 1678372814541,
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
            '502776ab-8a9f-49f5-a1c8-f6242fdb73e3': {
              role: 'reader',
              value: {
                id: '502776ab-8a9f-49f5-a1c8-f6242fdb73e3',
                version: 156,
                type: 'header',
                properties: { title: [['📌 어떻게 글을 쓸 수 있나요?']] },
                created_time: 1678371872460,
                last_edited_time: 1678375065446,
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
            '64c10786-dd66-4a0a-8f8d-ffe27ecc6d2d': {
              role: 'reader',
              value: {
                id: '64c10786-dd66-4a0a-8f8d-ffe27ecc6d2d',
                version: 195,
                type: 'text',
                properties: {
                  title: [
                    ['노션을 통해 쉽고 빠르게 작성할 수 있어요!\n시범 운영 기간 동안 블로그 글 작성 시 '],
                    ['활동 점수 10점', [['b'], ['_']]],
                    ['을 제공하오니 많이 이용해주시고, 피드백 남겨주시면 감사하겠습니다!'],
                  ],
                },
                created_time: 1678371795560,
                last_edited_time: 1678693931044,
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
            'b1ab605d-401e-4182-95e6-d954641d1b2f': {
              role: 'reader',
              value: {
                id: 'b1ab605d-401e-4182-95e6-d954641d1b2f',
                version: 10,
                type: 'embed',
                properties: { source: [['https://demo.arcade.software/fMQWzuiNzbKj1sAKkVn3?embed']] },
                format: {
                  block_width: 2048,
                  block_height: 1365,
                  display_source: 'https://demo.arcade.software/fMQWzuiNzbKj1sAKkVn3?embed',
                  block_full_width: false,
                  block_page_width: true,
                  block_preserve_scale: false,
                },
                created_time: 1678693922498,
                last_edited_time: 1678693923091,
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
            '6f4807c9-8a44-4db0-bc53-082239fad45c': {
              role: 'reader',
              value: {
                id: '6f4807c9-8a44-4db0-bc53-082239fad45c',
                version: 6,
                type: 'text',
                created_time: 1678373594203,
                last_edited_time: 1678693756204,
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
          alert('포스트를 불러오는데 실패했습니다.');
          // router.push('/blog');
        });
    }
  }, [id]);

  return (
    <AnimatedPage>
      <style>{cssOverrides}</style>
      <Container>
        {setMenu(1)}
        {Object.keys(notionData).length > 0 ? (
          <ContentContainer>
            <NotionRenderer blockMap={notionData} fullPage={true} />
            <HitsBadge url={`https://fridayproject.co.kr/post?id=${id}`} />
            <Comment
              shortname="friday-3"
              config={{
                url: `https://fridayproject.co.kr/post?id=${id}`,
                title: title,
                identifier: id,
                language: 'ko',
              }}
            />
          </ContentContainer>
        ) : (
          <Placeholder>Loading...</Placeholder>
        )}
        <ScrollToTopButton />
      </Container>
    </AnimatedPage>
  );
};

export default Post;
