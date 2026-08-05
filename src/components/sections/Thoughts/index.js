import { getSubstackPosts } from "@/lib/getSubstackPosts";
import ThoughtsSection from "./ThoughtsSection";

export default async function Thoughts() {
  const posts = await getSubstackPosts();

  if (posts.length === 0) {
    return <section id="thoughts" className="scroll-mt-24 md:scroll-mt-28" />;
  }

  return <ThoughtsSection posts={posts} />;
}
