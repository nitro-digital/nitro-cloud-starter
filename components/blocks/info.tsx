import React from "react";
import { Container } from "../util/container";
import { Section } from "../util/section";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import type { TinaTemplate } from "tinacms";

export const Info = ({ data, parentField = "" }) => {
  return (
    <Section color={data.color}>
      <Container
        id="kapcsolat"
        className={`py-24 ${
          data.color === "primary" ? `prose-primary` : `dark:prose-dark`
        }`}
        data-tinafield={`${parentField}.body`}
        width="medium"
      >
        <h1 className={"text-xl uppercase font-light text-center"}>
          {data.headline}
        </h1>
        <p className="text-5xl text-center underline-offset-[3px]">{data.title}</p>
        <TinaMarkdown content={data.body} />
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
