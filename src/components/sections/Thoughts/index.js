import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { getSubstackPosts } from "@/lib/getSubstackPosts";

export default async function Thoughts() {
  const posts = await getSubstackPosts();

  if (posts.length === 0) {
    return <section id="thoughts" className="scroll-mt-24 md:scroll-mt-28" />;
  }

  return (
    <section
      id="thoughts"
      className="scroll-mt-24 md:scroll-mt-28 w-full px-6 sm:px-4 mt-12"
    >
      <div className="w-full max-w-[92vw] md:max-w-screen-md mx-auto">
        <div className="text-[16px] mt-4 md:text-[22px] font-semibold text-gray-800 text-center md:text-left mb-6">
          Thoughts
        </div>
        <ul className="flex flex-col gap-3">
          {posts.map((post) => (
            <li key={post.link}>
              <a
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between gap-3 border bg-white border-gray-300 shadow-md rounded-md px-4 py-3 hover:scale-[1.01] transition-transform"
              >
                <span className="text-[15px] md:text-[16px]">
                  {post.title}
                </span>
                <ArrowUpRight
                  size={18}
                  className="shrink-0 -rotate-0 group-hover:rotate-45 transition-transform"
                />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
