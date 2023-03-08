import axios from 'axios';
import BlogPostSummary from '../model/BlogPostSummary';

const notionKey = process.env.NEXT_PUBLIC_NOTION_KEY;
const notionDatabaseKey = process.env.NEXT_PUBLIC_NOTION_DATABASE_KEY;

export async function getBlogItems() {
  try {
    const result = await axios.post(
      `/databases/${notionDatabaseKey}/query`,
      {
        page_size: 100,
        sorts: [
          {
            property: '작성 일시',
            direction: 'descending',
          },
        ],
      },
      {
        headers: {
          Authorization: `Bearer ${notionKey}`,
          'Notion-Version': '2022-06-28',
        },
      }
    );

    return result.data.results.map(item => BlogPostSummary.fromRawData(item));
  } catch (error) {
    throw new Error(error);
  }
}
