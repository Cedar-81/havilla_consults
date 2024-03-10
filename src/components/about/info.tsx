import React, { useEffect, useState } from "react";
import sanityClient from "../../sanityClient";
import imageBuilder from "../../imageBuilder";
import { easeInOut, motion } from "framer-motion";

interface AboutImage {
  _key: string;
  Image: {
    asset: {
      _ref: string;
      _type: string;
    };
  };
  // Add other properties if available in your data
}

interface AboutSection {
  about: AboutImage[];
  // Add other properties if available in your data
}

function Info() {
  const [images, setImages] = useState<AboutImage[]>([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const result: AboutSection[] = await sanityClient.fetch(
          `*[_type == "about"]`
        );
        setImages(result[0]?.about || []);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    fetchImages();
  }, []);

  return (
    <section className="flex px-8 md:px-[60px] items-center justify-center">
      <div className="flex flex-col-reverse md:grid md:grid-cols-2  gap-x-20 items-start">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: 1, ease: easeInOut } }}
          className="space-y-8 mt-10"
        >
          <p>
            <span className="text-xl font-semibold">At</span> Havilla Consults,
            we strive bridge the gap between your aspirations for international
            education and the realization of those dreams. Our experienced team
            is driven by a shared passion for guiding individuals towards
            academic success and cultural enrichment.
            <br />
            <br /> Our differentiator is a holistic, client-centric approach.
            Recognizing the uniqueness of each educational journey, we tailor
            our services to address specific needs – from navigating complex
            applications to facilitating a seamless transition into a new
            country.
            <br />
            <br /> Integrity, transparency, and relentless pursuit of excellence
            are our core values, forming the foundation for lasting
            relationships based on trust and mutual respect. Beyond consultancy,
            our commitment is to stand by you through this exciting,
            life-changing adventure.
          </p>
          <div>
            <a href="mailto:enquire@havillaconsults.com">
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
                className="btn bg-purple hover:shadow-lg text-white"
              >
                GET IN TOUCH
              </motion.button>
            </a>
          </div>
        </motion.div>
        <motion.div
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: {
                staggerChildren: 1.25,
                delay: 1.5,
              },
            },
          }}
          initial="hidden"
          animate="show"
          className="grid grid-cols-2 gap-2 space-x-0 w-full md:w-max"
        >
          {images.map((item) => (
            <motion.div
              key={item._key}
              variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }}
              className="w-full md:h-[15rem] aspect-square"
            >
              <img
                className="object-cover h-full w-full"
                src={imageBuilder(item.Image).height(500).url()}
                alt={`About Image ${item._key}`}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Info;
