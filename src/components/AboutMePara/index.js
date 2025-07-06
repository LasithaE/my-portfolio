

const AboutMePara = () => {
  return (
    <>
      <div className="flex flex-wrap justify-center items-center mb-3 text-[18px] md:text-[20px] text-center">
        <p className="w-full sm:w-auto">
          I’ve worked in <strong className="ml-1">four startups</strong>,
          picking up lessons and debugging nightmares here
        </p>
        <span className="flex items-center mx-2 p-1 border-1 border-gray-800/10 shadow-md text-[18px] md:text-[20px] hover:scale-110 hover:rotate-[5deg] rounded-md bg-white backdrop-blur-md">
          <Image
            src="/setup.png"
            alt="Landing Page Photo"
            width={50}
            height={50}
            className="rounded-md"
          />
        </span>
        <p> along the way.</p>
      </div>
      <div className="flex flex-wrap justify-center text-[18px] md:text-[20px] items-center mb-3 text-center">
        <p className="w-full sm:w-auto ">
          I believe that<strong className="ml-2">filter coffee</strong>
        </p>
        <span className="flex items-center mx-2 p-1 border-1 border-gray-800/10 shadow-md hover:scale-110 hover:rotate-[5deg] rounded-md bg-white backdrop-blur-md">
          <Image
            src="/coffee.png"
            alt="Landing Page Photo"
            width={50}
            height={50}
            className="rounded-md"
          />
        </span>
        <p> can fix literally anything/anyone.</p>
      </div>
      <div className="flex flex-wrap justify-center text-[18px] md:text-[20px] items-center mb-3 text-center">
        <p className="w-full sm:w-auto">
          Born a <strong className="ml-2">Malayali</strong>
        </p>
        <span className="flex w-[52px] mr-2 h-[52px] items-center ml-2 p-1 border-1 border-gray-800/10 shadow-md hover:scale-110 hover:rotate-[5deg] rounded-md bg-white backdrop-blur-md">
          <Image
            src="/sadhya.png"
            alt="Landing Page Photo"
            width={45}
            height={45}
            className="rounded-md"
          />
        </span>
        <p>
          in Mumbai, now in <strong className="ml-2">Bangalore</strong>
        </p>
        <span className="flex items-center mx-2 p-1 border-1 border-gray-800/10 shadow-md hover:scale-110 hover:rotate-[5deg] rounded-md bg-white backdrop-blur-md">
          <Image
            src="/blr.png"
            alt="Landing Page Photo"
            width={50}
            height={50}
            className="rounded-md"
          />
        </span>
        <p>
          —where I build slick interfaces, make home films, and break down what
          makes a product tick.
        </p>
      </div>
      <div className="flex flex-wrap justify-center text-[18px] md:text-[20px] items-center mb-3 text-center">
        <p className="w-full sm:w-auto">
          When I’m not coding, I’m in the{" "}
          <strong className="ml-2">kitchen experimenting</strong>
        </p>
        <span className="flex items-center mx-2 p-1 border-1 border-gray-800/10 shadow-md hover:scale-110 hover:rotate-[5deg] rounded-md bg-white backdrop-blur-md">
          <Image
            src="/homefood.png"
            alt="Landing Page Photo"
            width={50}
            height={50}
            className="rounded-md"
          />
        </span>
        <p>
          or hunting for{" "}
          <strong className="ml-2">Bangalore’s next food gem.</strong>
        </p>
        <span className="flex items-center mx-2 p-1 border-1 border-gray-800/10 shadow-md hover:scale-110 hover:rotate-[5deg] rounded-md bg-white backdrop-blur-md">
          <Image
            src="/waffle.png"
            alt="Landing Page Photo"
            width={50}
            height={50}
            className="rounded-md"
          />
        </span>
      </div>
    </>
  );
};

export default AboutMePara;
