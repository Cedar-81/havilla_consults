import React from "react";
import Banner2 from "../components/banner2";
import Info from "../components/info";
import Footer from "../components/footer";
import GallerySection from "../components/gallery";
import Hero from "../components/hero";
import HowWeHelp from "../components/howwehelp";
import Navbar from "../components/navbar";
import Sponsors from "../components/sponsors";
import Testimonial from "../components/testimonial";
import WhatWeDo from "../components/whatwedo";

function Home() {
  return (
    <main className="font-display space-y-[80px]">
      <Hero />
      <Sponsors />
      <Info />
      <HowWeHelp />
      <Banner2 />
      <WhatWeDo />
      <GallerySection />
      <Testimonial />
      <Sponsors />
    </main>
  );
}

export default Home;
