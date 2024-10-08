"use server";

import { Client } from "@notionhq/client";

const notion = new Client({
  auth: process.env.NOTION_API_TOKEN,
});

interface Contact {
  email: string;
  message: string;
  name: string;
  subject: string;
}

export async function SendEmail({ name, email, subject, message }: Contact) {
  if (!process.env.NOTION_DATABASE_ID) {
    throw Error("env NOTION_DATABASE_ID does not exist");
  }

  await notion.pages.create({
    parent: {
      database_id: process.env.NOTION_DATABASE_ID,
    },
    properties: {
      Name: {
        title: [
          {
            text: {
              content: name,
            },
          },
        ],
      },
      Email: {
        email,
      },
      Subject: {
        rich_text: [
          {
            text: {
              content: subject,
            },
          },
        ],
      },
      Message: {
        rich_text: [
          {
            text: {
              content: message,
            },
          },
        ],
      },
    },
  });
}
