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
        if (result.length > 4) {
          setSponsors([...result, ...result]);
        } else {
          setSponsors([
            ...result,
            // { key: "2", name: "Evan mocks" },
            // { key: "3", name: "Addiddas" },
            // { key: "4", name: "Puma lts" },
            // { key: "5", name: "Netflix" },
            // { key: "6", name: "Disney Ltd" },
            // { key: "7", name: "Versace" },
            // { key: "8", name: "Swype flex" },
            // { key: "9", name: "Swype flex" },
            // { key: "10", name: "Swype flex" },
            // { key: "11", name: "Swype flex" },
            // { key: "12", name: "Swype flex" },
          ]);
        }
      } catch (error) {
        console.error("Error fetching sponsors:", error);
      }
    };

    fetchSponsors();
  }, []);

  // useEffect(() => {
  //   let controls;
  //   let finalPosition = -width / 2;

  //   if (sponsors.length > 5) {
  //     controls = animate(xTranslation, [0, finalPosition], {
  //       ease: "linear",
  //       duration: 25,
  //       repeat: Infinity,
  //       repeatType: "loop",
  //       repeatDelay: 0,
  //     });
  //     return controls.stop;
  //   }
  // }, [xTranslation, width]);

  return (
    <section className="py-6 md:py-10 space-y-6 md:space-y-8 bg-gray flex flex-col justify-center items-center w-full overflow-clip">
      <h4 className="text-xs px-8 md:px-[60px] md:text-lg text-center text-purple/50 uppercase font-semibold">
        our trusted partners around the world
      </h4>
      {/* <motion.ul className="flex gap-16 w-[80%] overflow-clip" ref={ref}>
        {sponsors.map((item, index) => (
          <motion.li
            key={index}
            style={{ x: xTranslation }}
            className="text-xl md:text-2xl font-semibold text-gold/80"
          >
            <p className="w-max font-altDisplay">{item.name}</p>
          </motion.li>
        ))}
      </motion.ul> */}
      <ul className="flex gap-4 md:gap-x-16 md:gap-y-8 w-full px-8 md:px-[60px] flex-wrap justify-evenly">
        {sponsors.map((item, index) => (
          <li
            key={index}
            className="text-xl md:text-2xl font-semibold text-gold flex-wrap"
          >
            <p className="w-max font-altDisplay uppercase font-bold">
              {item.name}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Sponsors;
