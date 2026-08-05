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
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <svg
            viewBox="0 0 120 10"
            preserveAspectRatio="none"
            className="w-full h-full"
          >
            <path
              d="M0,5 C20,10 40,0 60,5 C80,10 100,0 120,5"
              fill="transparent"
              stroke={"#FF5555"}
              strokeWidth="5"
            />
          </svg>
        </motion.div>
      )}
    </div>
  );
};

export default WavyUnderline;
