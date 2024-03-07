import { TextCursorInput } from "lucide-react";
import React, { useEffect, useState } from "react";
import sanityClient from "../../sanityClient";
import imageBuilder from "../../imageBuilder";

interface TeamMember {
  _key: string;
  Image: {
    asset: {
      _ref: string;
      _type: string;
    };
  };
  Name: string;
}

interface TeamSection {
  team: TeamMember[];
}

function Team() {
  const [images, setImages] = useState<TeamMember[]>([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const result: TeamSection[] = await sanityClient.fetch(
          `*[_type == "team"]`
        );
        setImages(result[0]?.team || []);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    fetchImages();
  }, []);

  return (
    <section className="px-8 md:px-[60px] space-y-10 pb-[80px]">
      <h4 className="font-semibold flex justify-center">
        <span className="mr-2">
          <TextCursorInput className="text-gold" />
        </span>
        Meet the team
      </h4>
      <div className="flex justify-center items-center">
        <div className="flex flex-wrap md:flex-nowrap space-y-8 md:space-y-0 w-[85%] justify-between">
          {images.map((item) => (
            <div
              key={item._key}
              className="w-full md:w-max md:h-[20rem] aspect-square flex items-end relative"
            >
              <img
                className="object-cover h-full w-full absolute top-0 right-0"
                src={imageBuilder(item.Image).height(500).url()}
                alt={`Team Member ${item.Name}`}
              />
              <div className="bg-purple w-full py-4 m-4 bg-blend-multiply text-white text-center z-10">
                <p>{item.Name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Team;
