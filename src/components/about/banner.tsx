import React from "react";
import { motion } from "framer-motion";

function Banner() {
  return (
    <motion.section
      initial={{ opacity: 0, y: -1000 }}
      animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
      className="w-full h-[30vh] relative flex justify-center items-center mt-[4rem]"
    >
      <img
        className="w-full h-full object-cover absolute top-0 right-0"
        src="./assets/abtbanner.png"
      />
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 1 } }}
        className="relative z-10 text-white text-4xl font-semibold"
      >
        About us
      </motion.h1>
    </motion.section>
  );
}

export default Banner;
