import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

function Info() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView]);
  return (
    <motion.section
      className="px-8 md:px-[60px] flex items-center justify-center"
      ref={sectionRef}
    >
      <div className="md:w-[70%] space-y-4 md:space-y-10">
        <motion.h4
          initial={"hidden"}
          animate={controls}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { duration: 0.5 } },
          }}
          className=" md:text-xl text-purple font-semibold font-altDisplay"
        >
          <span className="text-2xl md:text-4xl font-bold">H</span>avilla
          Consults focus is to empower individuals for success in a globalized
          educational landscape, providing comprehensive guidance for academic,
          personal, and cultural enrichment, aiming to be a catalyst for
          positive change.
        </motion.h4>
        <motion.p
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { duration: 0.5, delay: 0.5 } },
          }}
          className="text-sm md:text-base"
        >
          Havilla Consults is committed to enriching global education
          experiences and facilitating seamless transitions. Our dedicated team
          navigates international education and relocation challenges, striving
          for excellence in shaping your academic journey.
          <br />
          <br />
          With a passion for success, we provide expert guidance to ensure a
          smooth transition into international academic environments, unlocking
          diverse opportunities for your educational achievements.
        </motion.p>
      </div>
    </motion.section>
  );
}

export default Info;
