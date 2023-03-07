import axios from 'axios';

const notionKey = process.env.REACT_APP_NOTION_KEY;
const notionDatabaseKey = process.env.REACT_APP_NOTION_DATABASE_KEY;

export async function getBlogItems() {
  try {
    const result = await axios.post(
      `/databases/${notionDatabaseKey}/query`,
      {
        page_size: 100,
      },
      {
        headers: {
          Authorization: `Bearer ${notionKey}`,
          'Notion-Version': '2022-06-28',
        },
      }
    );
    return result.data.results;
  } catch (error) {
    throw new Error(error);
  }
}
