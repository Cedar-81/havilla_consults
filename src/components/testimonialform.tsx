import React, { useState } from "react";
import sanityClient from "../sanityClient";
import { X } from "lucide-react";

interface Testimonial {
  _id: string;
  author: string;
  quote: string;
  city: string;
}

function TestimonialForm({ showForm, setShowForm }) {
  const [isLoading, setIsLoading] = useState(false);
  const [newTestimonial, setNewTestimonial] = useState<Testimonial>({
    _id: "",
    author: "",
    quote: "",
    city: "",
  });
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setNewTestimonial({
      ...newTestimonial,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setIsLoading(true);
    e.preventDefault();
    try {
      // Send the new testimonial data to Sanity for update
      await sanityClient.create({
        _type: "testimonial",
        author: newTestimonial.author,
        quote: newTestimonial.quote,
        city: newTestimonial.city,
      });
      // Update the testimonials state with the new testimonial
      //   setTestimonials([...testimonials, newTestimonial]);
      // Clear the new testimonial form fields
      setNewTestimonial({
        _id: "",
        author: "",
        quote: "",
        city: "",
      });

      setShowForm(false);
      setIsLoading(false);
    } catch (error) {
      console.error("Error updating testimonial:", error);
    }
  };
  return (
    <>
      {showForm && (
        <section className="w-full h-full fixed -top-10 right-0 bg-black/15 z-[80] flex justify-center items-center">
          <div className=" w-[30rem] mx-auto bg-white p-8 space-y-6">
            <div className="flex justify-between items-center">
              <h4 className="text-xl text-gold font-semibold">
                Leave a review
              </h4>{" "}
              <button onClick={() => setShowForm(false)} className="btn">
                <X className="h-5 w-5 text-purple font-bold" />
              </button>
            </div>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col w-full space-y-10"
            >
              <input
                type="text"
                name="author"
                placeholder="Name"
                className="p-2 border-purple border-b-2 outline-none"
                value={newTestimonial.author}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="city"
                placeholder="City"
                className="p-2 border-purple border-b-2 outline-none"
                value={newTestimonial.city}
                onChange={handleChange}
                required
              />
              <textarea
                name="quote"
                placeholder="Review"
                value={newTestimonial.quote}
                onChange={handleChange}
                className="p-2 border-purple border-b-2 outline-none"
                required
              ></textarea>
              <button type="submit" className="btn bg-gold text-white">
                {isLoading ? "Submitting..." : "Add Testimonial"}
              </button>
            </form>
          </div>
        </section>
      )}
    </>
  );
}

export default TestimonialForm;
