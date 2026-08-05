import { motion } from "framer-motion";

const WavyUnderline = ({ text, selected, textClassName, weightClassName, className }) => {
  return (
    <div className={`relative inline-block ${className}`}>
      <span
        className={`${weightClassName ?? "font-semibold"} cursor-normal ${
          textClassName ?? "text-[18px]"
        }`}
      >
        {text}
      </span>
      {selected === text && (
        <motion.div
          className="absolute left-0 bottom-0 w-full h-1"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <svg
            viewBox="0 0 100 10"
            preserveAspectRatio="none"
            className="w-full h-full"
          >
            <motion.path
              d="M0,5 C20,10 40,0 60,5 C80,10 100,0 120,5"
              fill="transparent"
              stroke={"#FF5555"}
              strokeWidth="5"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            />
          </svg>
        </motion.div>
      )}
    </div>
  );
};

export default WavyUnderline;
