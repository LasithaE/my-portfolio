import { Typewriter } from 'react-simple-typewriter';

const TypingEffect = () => {
  return (
    <div className="text-[36px] md:text-[42px] ml-3 mb-2 font-pixelify italic cursor-default">
    
      <span className="font-semibold italic text-[#FF5555]">
        <Typewriter
          words={["hey, I'm Lasitha.", "I'm a Developer.", "I'm a Project Manager."]}
          loop={0} // Infinite loop
          cursor
          cursorStyle="|"
          typeSpeed={80}
          deleteSpeed={50}
          delaySpeed={1000} // Pause before deleting
        />
      </span>
    </div>
  );
};

export default TypingEffect;