import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Work from "@/components/sections/Work";
import Thoughts from "@/components/sections/Thoughts";
import SignOff from "@/components/sections/SignOff";

export const revalidate = 3600;

export default function Home() {
  return (
    <>
      <Hero />
      <Work />
      <About />
      <Thoughts />
      <SignOff />
    </>
  );
}
