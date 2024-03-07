import { animate, useMotionValue } from "framer-motion";
import React, { useEffect, useState } from "react";
import useMeasure from "react-use-measure";
import { motion, useAnimation } from "framer-motion";
import sanityClient from "../sanityClient";

interface Sponsor {
  _id: string;
  name: string;
  // Add other properties if available in your data
}

function Sponsors() {
  const [sponsors, setSponsors] = useState<Sponsor[]>([]);

  let [ref, { width }] = useMeasure();
  const xTranslation = useMotionValue(0);

  useEffect(() => {
    const fetchSponsors = async () => {
      try {
        const result = await sanityClient.fetch(`*[_type == "sponsor"]`);
        setSponsors(result);
      } catch (error) {
        console.error("Error fetching sponsors:", error);
      }
    };

    fetchSponsors();
  }, []);

  useEffect(() => {
    let controls;
    let finalPosition = -width / 2;

    controls = animate(xTranslation, [0, finalPosition], {
      ease: "linear",
      duration: 25,
      repeat: Infinity,
      repeatType: "loop",
      repeatDelay: 0,
    });

    return controls.stop;
  }, [xTranslation, width]);

  return (
    <section className="py-6 md:py-10 space-y-4 md:space-y-8 bg-gray flex flex-col justify-center items-center w-full overflow-clip">
      <h4 className="text-sm px-8 md:px-[60px] md:text-lg text-center">
        our trusted partners around the world
      </h4>
      <motion.ul className="flex gap-16 w-[80%] overflow-clip" ref={ref}>
        {[...sponsors, ...sponsors].map((item, index) => (
          <motion.li
            key={index}
            style={{ x: xTranslation }}
            className="text-xl md:text-2xl font-semibold text-gold/80"
          >
            <p className="w-max">{item.name}</p>
          </motion.li>
        ))}
      </motion.ul>
    </section>
  );
}

export default Sponsors;
