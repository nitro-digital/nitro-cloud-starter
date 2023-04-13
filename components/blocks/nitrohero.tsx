import * as React from "react";
import { Container } from "../util/container";
import { Section } from "../util/section";
import { useTheme } from "../layout";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import type { TinaTemplate } from "tinacms";

export const Nitrohero = ({ data, parentField }) => {
  const theme = useTheme();
  const headlineColorClasses = {
    blue: "from-blue-400 to-blue-600",
    teal: "from-teal-400 to-teal-600",
    green: "from-green-400 to-green-600",
    red: "from-red-400 to-red-600",
    pink: "from-pink-400 to-pink-600",
    purple: "from-purple-400 to-purple-600",
    orange: "from-orange-300 to-orange-600",
    yellow: "from-yellow-400 to-yellow-600",
  };

  return (
    <Section color={data.color}>
      <Container
        size="navbar"
        className="py-0 grid grid-cols-1 lg:grid-cols-7 gap-14 items-center justify-center p-0 m-0 py-0"
      >
        <div className="row-start-0 lg:row-start-1 lg:col-span-6 text-center lg:text-left">
          {data.firstcardimage && (
            <div
              data-tinafield={`${parentField}.firstcardimage`}
              className="relative row-start-1 lg:col-span-2 flex justify-center lg:justify-start"
            >

              <img
                className="relative z-10"
                alt={data.firstcardimage.alt}
                src={data.firstcardimage.src}
              />
            </div>
          )}
          {data.firstcardtitle && (
            <h3
              data-tinafield={`${parentField}.firstcardtitle`}
              className={`w-full text-white py-4`}
            >
              <span
                className={`bg-clip-text text-transparent text-white`}
              >
                {data.firstcardtitle}
              </span>
            </h3>
          )}
          {data.firstcardtext && (
            <div
              data-tinafield={`${parentField}.firstcardtext`}
              className={`mx-auto lg:mx-0 mb-10 text-white`}
            >
              <TinaMarkdown content={data.firstcardtext} />
            </div>
          )}
        </div>
        <div className="row-start-2 lg:row-start-1 lg:col-span-6 text-center lg:text-left">
          {data.secundcardimage && (
            <div
              data-tinafield={`${parentField}.secundcardimage`}
              className="relative row-start-1 lg:col-span-2 flex justify-center lg:justify-start"
            >

              <img
                className="relative z-10"
                alt={data.secundcardimage.alt}
                src={data.secundcardimage.src}
              />
            </div>
          )}
          {data.secundcardtitle && (
            <h3
              data-tinafield={`${parentField}.secundcardtitle`}
              className={`w-full text-white py-4`}
            >
              <span
                className={`bg-clip-text text-transparent text-white`}
              >
                {data.secundcardtitle}
              </span>
            </h3>
          )}
          {data.secundcardtext && (
            <div
              data-tinafield={`${parentField}.secundcardtext`}
              className={`mx-auto lg:mx-0 mb-10 text-white`}
            >
              <TinaMarkdown content={data.secundcardtext} />
            </div>
          )}
        </div>
        {data.image && (
          <div
            data-tinafield={`${parentField}.image`}
            className="relative row-start-1 lg:col-span-2 flex justify-center"
          >
            <img
              className="absolute w-full rounded-lg max-w-xs lg:max-w-none h-auto blur-2xl brightness-150 contrast-[0.9] dark:brightness-150 saturate-200 opacity-50 dark:opacity-30 mix-blend-multiply dark:mix-blend-hard-light"
              src={data.image.src}
              aria-hidden="true"
            />
            <img
              className="relative z-10 w-full max-w-xs rounded-lg lg:max-w-none h-auto"
              alt={data.image.alt}
              src={data.image.src}
            />
          </div>
        )}
      </Container>
    </Section>
  );
};

export const nitroheroBlockSchema: TinaTemplate = {
  name: "nitrohero",
  label: "NitroHero",
  ui: {
    defaultItem: {
      firstcardtitle: "Kommunikáció és PR",
      firstcardtext: "We can help you with digital marketing plans and projects",
      secundcardtitle: "Marketing, social és klasszikus média",
      secundcardtext:"We have an experienced social media manager team",
    },
  },
  fields: [
    {
      type: "object",
      label: "First Card Image",
      name: "firstcardimage",
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
    {
      type: "string",
      label: "First Card Title",
      name: "firstcardtitle",
    },
    {
      label: "First Card Text",
      name: "firstcardtext",
      type: "rich-text",
    },
    {
      type: "object",
      label: "Secund Card Image",
      name: "secundcardimage",
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
    {
      type: "string",
      label: "Secund Card Title",
      name: "secundcardtitle",
    },
    {
      label: "Secund Card Text",
      name: "secundcardtext",
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
    {
      type: "string",
      label: "Color",
      name: "color",
      options: [
        { label: "Default", value: "default" },
        { label: "Tint", value: "tint" },
        { label: "Primary", value: "primary" },
        { label: "Nitrogreen", value: "nitrogreen" },
      ],
    },
  ],
};
