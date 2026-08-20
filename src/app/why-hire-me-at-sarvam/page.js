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
      </div>
    </section>
  );
}
