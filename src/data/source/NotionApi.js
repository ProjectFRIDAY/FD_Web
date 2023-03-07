import { Client } from "@notionhq/client/build/src";

const notionKey = process.env.REACT_APP_NOTION_KEY;
const notionDatabaseKey = process.env.REACT_APP_NOTION_DATABASE_KEY;

export async function getBlogItems() {
    const notion = new Client({ auth: notionKey });
    const response = await notion.databases.query({ database_id: notionDatabaseKey });
    return response.results;
}