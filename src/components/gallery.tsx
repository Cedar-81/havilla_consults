import { TextCursorInput } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Gallery } from "react-grid-gallery";
import sanityClient from "../sanityClient";
import imageBuilder from "../imageBuilder";

interface GalleryItem {
  _type: "inline";
  _key: string;
  caption?: string;
  Image: {
    _type: "image";
    asset: {
      _type: "reference";
      _ref: string;
    };
  };
}

function GallerySection() {
  const [images, setImages] = useState<GalleryItem[]>([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const result = await sanityClient.fetch(`*[_type == "gallery"]`);
        setImages(result[0].gallery);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    fetchImages();
  }, []);

  return (
    <section className="px-8 md:px-[60px] space-y-10">
      <h4 className="font-semibold flex ">
        <span className="mr-2">
          <TextCursorInput className="text-gold" />
        </span>
        Gallery
      </h4>
      {images.length > 0 && (
        <div className="md:w-[90%] mx-auto grid grid-cols-8 grid-rows-2">
          <div className="col-span-2 row-span-2">
            <img
              src={imageBuilder(images[0].Image).width(242).height(378).url()}
              className="w-full h-full object-cover"
              alt=""
            />
          </div>

          <div className="col-span-4 row-span-1">
            <img
              src={imageBuilder(images[1].Image).width(557).height(185).url()}
              className="w-full h-full object-cover"
              alt=""
            />
          </div>

          <div className="col-span-2 row-span-1 row-span-a">
            <img
              src={imageBuilder(images[2].Image).width(285).height(185).url()}
              className="w-full h-full object-cover"
              alt=""
            />
          </div>

          <div className="row-span-1 col-span-2">
            <img
              src={imageBuilder(images[3].Image).width(285).height(185).url()}
              className="w-full h-full object-cover"
              alt=""
            />
          </div>

          <div className="row-span-1 col-span-2">
            <img
              src={imageBuilder(images[4].Image).width(242).height(151).url()}
              className="w-full h-full object-cover"
              alt=""
            />
          </div>

          <div className="col-span-2 row-span-2">
            <img
              src={imageBuilder(images[5].Image).width(242).height(218).url()}
              className="w-full h-full object-cover"
              alt=""
            />
          </div>
        </div>
      )}
    </section>
  );
}

export default GallerySection;
