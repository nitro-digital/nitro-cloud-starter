import React from "react";
import { Container } from "../util/container";
import { Section } from "../util/section";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import type { TinaTemplate } from "tinacms";

export const Info = ({ data, parentField = "" }) => {
  return (
    <Section color={data.color}>
      <Container
        className={`prose prose-lg ${
          data.color === "primary" ? `prose-primary` : `dark:prose-dark`
        }`}
        data-tinafield={`${parentField}.body`}
        size="large"
        width="medium"
      >
        <h1 className={'text-xl uppercase ont-light'}>
          {data.headline}
        </h1>
        {data.title}
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
      body: "Lorecccnon, semper suscipit, posuere a, pede.",
    },
  },
  fields: [
    {
      type: "string",
      label: "Headline",
      name: "headline",
    },
    {
      type: "string",
      label: "Title",
      name: "title",
    },
    {
      type: "rich-text",
      label: "Body",
      name: "body",
    },
    {
      type: "string",
      label: "Color",
      name: "color",
      options: [
        { label: "Default", value: "default" },
        { label: "Tint", value: "tint" },
        { label: "Primary", value: "primary" },
      ],
    },
  ],
};
