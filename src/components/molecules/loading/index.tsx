import { FC } from "react";
import { motion } from "framer-motion";

const Loading: FC = () => {
  return (
    <div className="flex h-screen justify-center items-center">
      <div className="bg-base-300 w-96 h-2">
        <motion.div
          className="w-32 bg-accent h-2"
          animate={{ x: "16rem" }}
          transition={{
            duration: 2,
            times: [0, 0.2, 1],
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      </div>
    </div>
  );
};

export default Loading;
