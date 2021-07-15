import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import remark from 'remark';
import html from 'remark-html';
import externalLinks from 'remark-external-links';

const faqDirectory = path.join(process.cwd(), 'faq');

export interface FAQItem {
  id: string;
  content: string;
  title: string;
}

export const getFaqList = async (list: string[]): Promise<FAQItem[]> => {
  return Promise.all(
    list.map(async (id) => {
      const fullPath = path.join(faqDirectory, `${id}.md`);

      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const matterResult = matter(fileContents);

      const processedContent = await remark()
        .use(externalLinks, { target: '_blank', rel: ['nofollow', 'noopener'] })
        .use(html)
        .process(matterResult.content);

      const content = processedContent.toString();
      const title = String(matterResult.data.title || id);

      return {
        id,
        content,
        title,
      };
    }),
  );
};
