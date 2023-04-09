import * as React from "react";
import { Section } from "../util/section";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import type { TinaTemplate } from "tinacms";

export const Fullwhero = ({ data, parentField }) => {

  return (
    <Section>
      <div
        className="w-screen"
      >
        <div className="flex justify-center items-center relative">
          {data.image && (
            <div
              data-tinafield={`${parentField}.image`}
              className="w-full h-[900px]"
            >
              <img
                className="md:w-full h-[900px] object-cover"
                src={data.image.src}
                aria-hidden="true"
              />
            </div>
          )}
          {data.text && (
            <div
              className={`absolute text-white  text-base bottom-4 left-1/2 -translate-x-1/2 max-w-[900px] w-full px-3`}
            >
              <h2
                data-tinafield={`${parentField}.headline`}
                className="relative inline-block px-3 py-1 mb-8 text-4xl font-boldtext-base tracking-wide title-font z-20 bottom-1 left-1/2 -translate-x-1/2"
              >
                {data.headline}
              </h2>
              <div className="font-extralight">
              <TinaMarkdown content={data.text} />
              </div>
            </div>
          )}
        </div>
      </div>
    </Section>
  );
};

export const fullwheroBlockSchema: TinaTemplate = {
  name: "fullwhero",
  label: "fullwhero",
  ui: {
    defaultItem: {
      headline: "We have nitro",
      text: "@nitro, we do what it takes to stay ahead of the game. Our dedicated, experienced team incorporates innovative ideas and successful strategies to ensure that our clients get to the top and stay there. Depends on your ideas we can help you out at 360 degrees of the digital space. Tell us your needs.",
    },
  },
  fields: [
    {
      type: "string",
      label: "Headline",
      name: "headline",
    },
    {
      label: "Text",
      name: "text",
      type: "rich-text",
    },
    {
      type: "object",
      label: "Image",
      name: "image",
      fields: [
        {
          name: "src",
          label: "Image Source",
          type: "image",
        },
        {
          name: "alt",
          label: "Alt Text",
          type: "string",
        },
      ],
    },
  ],
};
