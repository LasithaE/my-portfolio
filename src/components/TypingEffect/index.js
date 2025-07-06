import { Typewriter } from 'react-simple-typewriter';

const TypingEffect = () => {
  return (
    <div className="text-[28px] md:text-[36px] mb-2 font-instrument cursor-default">
    
      <span className="font-semibold text-black">
        <Typewriter
          words={["Hey, I'm Lasitha.", "I'm a Product Consultant.", "I'm a Developer.", "I'm a Project Manager."]}
          loop={0}
          cursor
          cursorStyle="|"
          typeSpeed={80}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </span>
    </div>
  );
};

export default TypingEffect;