import { TextCursorInput } from "lucide-react";
import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

function HowWeHelp() {
  const hwhSectionRef = useRef(null);
  const isInView = useInView(hwhSectionRef, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("show");
    }
  }, [isInView]);
  return (
    <section className="space-y-10 px-8 md:px-[60px]">
      <h4 className="font-semibold flex">
        <span className="mr-2">
          <TextCursorInput className="text-gold" />
        </span>
        How We Help
      </h4>

      <motion.div
        ref={hwhSectionRef}
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
        className="flex flex-wrap space-y-8 md:space-y-0 justify-between"
      >
        <motion.div
          variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }}
          className="space-y-4 w-[23rem]"
        >
          <img src="./assets/hwh1.png" className="w-full aspect-video" alt="" />
          <div className="space-y-2">
            <h5 className="text-lg font-semibold text-gold">
              Expert Guidance:
            </h5>
            <p className="text-sm md:text-base">
              Harness the unparalleled expertise of our distinguished
              consultants, boasting an exemplary track record of success across
              diverse domains. Rely on their wealth of experience to navigate
              intricate challenges and achieve your educational and relocation
              goals with precision.
            </p>
          </div>
        </motion.div>
        <motion.div
          variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }}
          className="space-y-4 w-[23rem]"
        >
          <img src="./assets/hwh2.png" className="w-full aspect-video" alt="" />
          <div className="space-y-2">
            <h5 className="text-lg font-semibold text-gold">
              Tailored Solutions:
            </h5>
            <p className="text-sm md:text-base">
              Indulge in a bespoke experience as you receive advice and
              solutions meticulously tailored to cater to your distinct
              educational and relocation needs. Our commitment is to understand
              your unique requirements and provide solutions that resonate with
              your aspirations.
            </p>
          </div>
        </motion.div>
        <motion.div
          variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }}
          className="space-y-4 w-[23rem]"
        >
          <img src="./assets/hwh3.png" className="w-full aspect-video" alt="" />
          <div className="space-y-2">
            <h5 className="text-lg font-semibold text-gold">Global Network:</h5>
            <p className="text-sm md:text-base">
              Immerse yourself in a world of endless possibilities through our
              expansive network. Gain privileged access to top-tier educational
              institutions and relocation services globally, ensuring you have
              the broadest spectrum of choices and opportunities at your
              fingertips.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default HowWeHelp;
