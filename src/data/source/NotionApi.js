import axios from 'axios';
import BlogPostSummary from '../model/BlogPostSummary';

const notionKey = process.env.NEXT_PUBLIC_NOTION_KEY;
const notionDatabaseKey = process.env.NEXT_PUBLIC_NOTION_DATABASE_KEY;

const commonHeaders = {
  headers: {
    Authorization: `Bearer ${notionKey}`,
    'Notion-Version': '2022-06-28',
  },
};

export async function getBlogItems() {
  try {
    const result = await axios.post(
      `https://api.notion.com/v1/databases/${notionDatabaseKey}/query`,
      {
        page_size: 100,
        sorts: [
          {
            property: '작성 일시',
            direction: 'descending',
          },
        ],
      },
      commonHeaders
    );

    return result.data.results.map(item => BlogPostSummary.fromRawData(item));
  } catch (error) {
    throw new Error(error);
  }
}

export async function getNotionPost(id) {
  try {
    const result = await axios.get(`https://notion-api.splitbee.io/v1/page/${id}`);
    return result.data;
  } catch (error) {
    throw new Error(error);
  }
}
