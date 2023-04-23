import React from "react";
import { Container } from "../util/container";
import { Section } from "../util/section";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import type { TinaTemplate } from "tinacms";
import { useRouter } from "next/router";

export const Info = ({ data, parentField = "" }) => {
  const router = useRouter();
  return (
    <Section color={data.color}>
      <Container
        id="kapcsolat"
        className={`${['/home', '/'].includes(router.asPath) ? "py-24`" : "mt-[145px]"} px-4`}
        data-tinafield={`${parentField}.body`}
        width="medium"
      >
        <div className={`text-xl uppercase font-light  ${['/home', '/'].includes(router.asPath) ? `text-center ` : `text-left`
        }`}>
          {data.headline}
        </div>
        <p className={`pb-10 ${['/home', '/'].includes(router.asPath) ? ` text-center ` : ` text-left `
        }`}>
          <span className={`text-5xl  ${
            data.color === "nitrogreen" ? 
              `border-b-4 border-[#7199C7] inline-block ` :  
              `border-b-4 border-basegreen inline-block `
          } 
          ${['/home', '/'].includes(router.asPath) ? 
            ` text-center ` : ` text-left `
          }`}>
            {data.title}
          </span>
        </p>
        <Container
        className={`${['/home', '/'].includes(router.asPath) ? "hidden" : "prose prose-lg "} text-[20px] 
        ${
          data.color === "nitrogreen" ?
            `text-white ` :
            `text-black`
        }`}
        data-tinafield={`${parentField}.body`}
        size="large"
        width="medium"
      >
        <TinaMarkdown content={data.body} />
      </Container>
      </Container>
    </Section>
  );
};

export const infoBlockSchema: TinaTemplate = {
  name: "info",
  label: "Info",
  ui: {
    previewSrc: "/blocks/content.png",
    defaultItem: {
      body: "Lorecccnon, semper suscipit, posuere a, pede."
    }
  },
  fields: [
    {
      type: "string",
      label: "Headline",
      name: "headline"
    },
    {
      type: "string",
      label: "Title",
      name: "title"
    },
    {
      type: "rich-text",
      label: "Body",
      name: "body"
    },
    {
      type: "string",
      label: "Color",
      name: "color",
      options: [
        { label: "Default", value: "default" },
        { label: "Tint", value: "tint" },
        { label: "Primary", value: "primary" },
        { label: "Nitrogreen", value: "nitrogreen" }
      ]
    }
  ]
};
