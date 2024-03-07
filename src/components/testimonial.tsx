import { TextCursorInput } from "lucide-react";
import React, { useEffect, useState } from "react";
import TestimonialCard from "./testimonialcard";
import sanityClient from "../sanityClient";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "../style.css";

interface Testimonial {
  _type: "testimonial";
  _id: string;
  author: string;
  quote: string;
  city: string;
}

function Testimonial() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const result = await sanityClient.fetch<Testimonial[]>(
          `*[_type == "testimonial"]`
        );
        setTestimonials(result);
      } catch (error) {
        console.error("Error fetching testimonials:", error);
      }
    };

    fetchTestimonials();
  }, []);

  return (
    <section className="px-8 md:px-[60px] space-y-10">
      <h4 className="font-semibold flex mx-auto justify-center">
        <span className="mr-2">
          <TextCursorInput className="text-gold" />
        </span>
        Testimonial
      </h4>

      <div className="md:w-[55%] mx-auto">
        {testimonials.length > 0 && (
          <Swiper
            cssMode={true}
            navigation={true}
            pagination={true}
            mousewheel={true}
            keyboard={true}
            modules={[Navigation, Pagination, Mousewheel, Keyboard]}
            className="mySwiper"
          >
            {testimonials.map((item) => (
              <SwiperSlide key={item._id}>
                <TestimonialCard details={item} />
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </section>
  );
}

export default Testimonial;
