import { TextCursorInput } from "lucide-react";
import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

function WhatWeDo() {
  const wwdSectionRef = useRef(null);
  const isInView = useInView(wwdSectionRef, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("show");
    }
  }, [isInView]);
  return (
    <section className="px-8 md:px-[60px] space-y-10">
      <div className="w-full flex items-center justify-end">
        <h4 className="font-semibold flex flex-row-reverse">
          <span className="ml-2">
            <TextCursorInput className="text-gold" />
          </span>
          What we do
        </h4>
      </div>

      <motion.div
        ref={wwdSectionRef}
        variants={{
          hidden: { opacity: 0 },
          show: {
            opacity: 1,
            transition: {
              staggerChildren: 0.25,
            },
          },
        }}
        initial="hidden"
        animate={controls}
        className="flex flex-col md:flex-row justify-between w-full space-y-8 md:space-y-[21rem] md:space-x-24"
      >
        <div className="space-y-8 md:space-y-24 md:w-[50%]">
          <motion.div
            variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }}
            className="space-y-4 w-full"
          >
            <div className="w-full aspect-video">
              <img
                src="./assets/wwd1.png"
                className="h-full w-full object-cover"
                alt=""
              />
            </div>
            <div className="space-y-2">
              <h5 className="text-lg font-semibold text-purple">
                Funding Opportunities:
              </h5>
              <p className="text-sm md:text-base">
                Discover avenues for financial support on your educational
                journey. Our team is committed to helping you explore and secure
                funding opportunities to make your dreams achievable
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0 },
              show: { opacity: 1 },
            }}
            className="space-y-4 w-full"
          >
            <div className="w-full aspect-video">
              <img
                src="./assets/wwd2.png"
                className="h-full w-full object-cover"
                alt=""
              />
            </div>
            <div className="space-y-2">
              <h5 className="text-lg font-semibold text-purple">
                International Relocation:
              </h5>
              <p className="text-sm md:text-base">
                Embark on a stress-free international relocation journey with
                our comprehensive services. From visa assistance to settling
                into a new country, we've got you covered
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="space-y-4 w-full md:w-[50%]"
          variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }}
        >
          <div className="w-full aspect-video">
            <img
              src="./assets/wwd3.png"
              className="h-full w-full object-cover"
              alt=""
            />
          </div>
          <div className="space-y-2">
            <h5 className="text-lg font-semibold text-purple">
              Graduate and Undergraduate Education:
            </h5>
            <p className="text-sm md:text-base">
              Explore a myriad of international educational opportunities with
              our tailored consulting services. Whether you're eyeing graduate
              or undergraduate programs, we're here to turn your academic
              aspirations into reality.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default WhatWeDo;
