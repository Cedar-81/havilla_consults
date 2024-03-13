import { MessageSquarePlus, TextCursorInput } from "lucide-react";
import React, { useEffect, useState } from "react";
import TestimonialCard from "./testimonialcard";
import sanityClient from "../sanityClient";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "../style.css";
import TestimonialForm from "./testimonialform";

interface Testimonial {
  _type: "testimonial";
  _id: string;
  author: string;
  quote: string;
  city: string;
}

function Testimonial() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [showForm, setShowForm] = useState(false);

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
      <div className="w-full flex justify-between items-center">
        <h4 className="font-semibold flex">
          <span className="mr-2">
            <TextCursorInput className="text-gold" />
          </span>
          Testimonial
        </h4>
        <button
          onClick={() => setShowForm(true)}
          className="btn text-xs md:text-sm underline underline-offset-2 decoration-purple animate-pulse font-semibold flex items-start"
        >
          <MessageSquarePlus className="h-4 w-4 mr-1 md:h-6 md:w-6 md:mr-2 text-gold" />
          add a review
        </button>
      </div>

      <TestimonialForm showForm={showForm} setShowForm={setShowForm} />

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
        {testimonials.length == 0 && (
          <div className="flex items-center flex-col md:flex-row">
            <h5 className="text-sm md:text-2xl text-black/30 mx-auto text-center font-altDisplay">
              Be the first to leave a review of Havilla's services.
            </h5>
            <button
              onClick={() => setShowForm(true)}
              className="btn text-xs md:text-sm underline underline-offset-2 decoration-purple text-black/70 font-semibold flex items-start"
            >
              <MessageSquarePlus className="h-4 w-4 mr-1 md:h-6 md:w-6 md:mr-2 text-gold" />
              add a review
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

export default Testimonial;
