import { MousePointerClick } from "lucide-react";
import { easeIn, easeInOut, motion } from "framer-motion";
import React from "react";

function Hero() {
  const bounceAnimation = {
    y: [0, -20, 0, -20, 0], // Define the y-axis bounce values
    transition: {
      duration: 2, // Total duration for each bounce
      times: [0, 0.2, 0.4, 0.6, 1], // Keyframes for each bounce
      repeat: Infinity, // Infinite repeat
      delay: 2,
    },
  };
  return (
    <motion.section className="relative w-full md:px-[60px] flex flex-col items-center min-h-max md:h-[100vh] overflow-clip">
      <div className="space-y-6 md:space-y-10 md:absolute md:top-[50%] md:-translate-y-[50%] md:left-[60px]  px-8 md:px-0">
        <div className="space-y-2">
          <motion.h1
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: easeInOut }}
            className="text-3xl mt-24 md:mt-0 md:text-5xl md:w-[50%] font-semibold leading-tight"
          >
            Unlock Your Global Education Journey with{" "}
            <span className="text-purple">Havilla Consults</span>
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, ease: easeIn, duration: 0.5 }}
            className="md:w-[40%] text-sm md:text-lg"
          >
            GUIDING YOUR PATH TO INTERNATIONAL EDUCATION AND SUCCESSFUL
            RELOCATION
          </motion.h2>
        </div>

        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-3">
          <motion.button
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { delay: 1, ease: easeIn, duration: 0.5 },
            }}
            whileTap={{ scale: 0.9 }}
            whileHover={{
              scale: 1.1,
              backgroundColor: "white",
              color: "#C3995D",
            }}
            className="text-xs md:text-base btn hover:shadow-lg border-2 border-transparent hover:border-gold text-white bg-gold font-semibold"
          >
            BOOK A CONSULTATION
          </motion.button>
          <a href="mailto:enquire@havillaconsults.com">
            <motion.button
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: { delay: 1.5, ease: easeIn, duration: 0.5 },
              }}
              whileTap={{ scale: 0.9 }}
              whileHover={{
                scale: 1.1,
                backgroundColor: "#522989",
                color: "white",
              }}
              className=" flex relative items-center btn justify-center group overflow-clip hover:shadow-lg transition-all"
            >
              <div className="bg-purple relative z-10 text-white group-hover:bg-white group-hover:text-purple rounded-full p-3 mr-4 ">
                <MousePointerClick className="h-4 w-4 md:h-6 md:w-6" />
              </div>{" "}
              <p className="font-semibold relative z-10 text-xs md:text-base">
                ENQUIRE ABOUT US
              </p>
            </motion.button>
          </a>
        </div>
      </div>

      <a href="mailto:enquire@havillaconsults.com">
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{
            x: 0,
            opacity: 1,
            transition: { delay: 1.5, ease: easeInOut, duration: 0.5 },
          }}
        >
          <motion.button
            animate={bounceAnimation}
            className="flex absolute z-10 space-x-4 p-4 backdrop-blur-lg bg-transparent bottom-0 right-0 md:left-[35%] md:bottom-[8%] border md:w-max border-purple rounded-md"
          >
            <img
              className="h-10 w-10"
              src="./assets/herogitavatar.png"
              alt="male avatar"
            />
            <div className="flex flex-col text-left space-y-1">
              <div className="">
                <h4 className="text-sm md:text-base text-gold font-medium">
                  GET IN TOUCH WITH US
                </h4>
                <p className="text-xs md:text-sm font-light">
                  reach out let's have a conversation
                </p>
              </div>
              <div className="flex space-x-1">
                <div className="selector-sm"></div>
                <div className="selector-sm"></div>
                <div className="selector-sm"></div>
              </div>
            </div>
          </motion.button>
        </motion.div>
      </a>

      <div className="relative w-full h-[28rem] md:static">
        <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ease: easeIn, duration: 0.5, delay: 0.5 }}
          className=" md:h-[90vh] aspect-auto  absolute md:right-6 md:bottom-0"
          src="./assets/heroimgbck.png"
          alt="circles"
        />
        <motion.img
          initial={{ y: 1000, opacity: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ease: easeInOut, duration: 0.7, delay: 1 }}
          className=" md:h-[90vh] aspect-auto absolute md:right-14 md:bottom-0"
          src="./assets/heroimg.png"
          alt="College boy and girl"
        />
      </div>
    </motion.section>
  );
}

export default Hero;
