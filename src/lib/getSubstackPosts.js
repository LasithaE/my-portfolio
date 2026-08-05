import Parser from "rss-parser";

const SUBSTACK_FEED_URL = "https://lasithae.substack.com/feed";
const MAX_POSTS = 8;

const parser = new Parser();

export async function getSubstackPosts() {
  try {
    const feed = await parser.parseURL(SUBSTACK_FEED_URL);
    const items = feed?.items ?? [];
    return items
      .filter((item) => item.title && item.link)
      .slice(0, MAX_POSTS)
      .map((item) => ({ title: item.title, link: item.link }));
  } catch {
    return [];
  }
}
