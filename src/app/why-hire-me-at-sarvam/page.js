import Link from "next/link";
import { ArrowUpRight, FileArrowDown, House } from "@phosphor-icons/react/dist/ssr";

export const metadata = {
  title: "Why hire me at Sarvam — Lasitha E",
  description: "A short video on why I'd be a strong fit for the Growth PM role at Sarvam.",
};

export default function WhyHireMeAtSarvam() {
  return (
    <section className="w-full px-6 sm:px-4 mt-12">
      <div className="w-full max-w-[92vw] md:max-w-screen-md mx-auto flex flex-col items-center">
        <div className="w-full aspect-video rounded-xl overflow-hidden border border-gray-300 shadow-md">
          <iframe
            className="w-full h-full"
            src="https://www.youtube-nocookie.com/embed/LssYx4-FYlA"
            title="Why hire me at Sarvam"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 mt-6">
          <a
            href="/resume.pdf"
            download="Lasitha_E_PM_Resume.pdf"
            className="flex items-center gap-1.5 rounded-full bg-gray-900 text-white text-[13px] font-semibold px-3.5 py-1.5 hover:bg-gray-800 transition-colors"
          >
            <FileArrowDown size={15} weight="bold" />
            Download resume
          </a>
          <Link
            href="/"
            className="flex items-center gap-1.5 rounded-full border border-gray-300 text-gray-700 text-[13px] font-semibold px-3.5 py-1.5 hover:bg-gray-100 transition-colors"
          >
            <House size={15} weight="bold" />
            See my full website
          </Link>
          <a
            href="https://youtu.be/LssYx4-FYlA"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-1.5 rounded-full border border-gray-300 text-gray-700 text-[13px] font-semibold px-3.5 py-1.5 hover:bg-gray-100 transition-colors"
          >
            Watch on YouTube
            <ArrowUpRight size={14} className="-rotate-0 group-hover:rotate-45 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
