import { TextCursorInput } from "lucide-react";
import React from "react";
import { easeInOut, motion } from "framer-motion";

function Banner2() {
  return (
    <section className="w-full h-[20rem] md:h-[25rem] relative flex items-center">
      <div className="absolute top-0 right-0 w-full h-full">
        <img
          src="./assets/banner2.png"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
      <div className="bg-gradient-to-r absolute  top-0 right-0 h-full w-full z-10 from-gold to-purple/50"></div>
      <div className="relative z-20 px-8 md:px-[60px] space-y-6">
        <div className="space-y-3">
          <h4 className="font-semibold flex text-purple">
            <span className="mr-2">
              <TextCursorInput className="text-purple" />
            </span>
            Breeding success
          </h4>
          <h5 className="text-lg md:text-3xl font-medium md:w-[55%] text-white">
            We're dedicated to fostering an educational landscape that empowers
            everyone for success.
          </h5>
        </div>
        <div>
          <a href="mailto:info@havillaconsults.com">
            <motion.button
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: { delay: 1.5, ease: easeInOut, duration: 0.5 },
              }}
              whileTap={{ scale: 0.9 }}
              whileHover={{
                scale: 1.1,
                border: "2px solid #522989",
                backgroundColor: "transparent",
                color: "#522989",
              }}
              className="btn text-white bg-purple text-sm md:text-base"
            >
              CONTACT US
            </motion.button>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Banner2;
