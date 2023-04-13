import React from "react";
import { Container } from "../util/container";
import { Section } from "../util/section";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import type { TinaTemplate } from "tinacms";
import { Actions } from "../util/actions";

export const Contactus = ({ data, parentField = "" }) => {
  return (
    <Section color={data.color}>
      <Container
        className={`py-24`}
        data-tinafield={`${parentField}.body`}
        width="medium"
      >
        <div className="grid grid-cols-3 gap-4">
          <div className="col-span-2">
            <h1 className={"text-4xl uppercase font-bold text-center"}>
            {data.headline}
          </h1>
            <p className="text-xl font-normal">{data.title}</p>
            <div className={`${
              data.color === "nitrogreen" ? `text-center justify-center ` : `py-3`
            }`}>
              <TinaMarkdown content={data.body} />
            </div></div>
          <div className="col-span-1">
            {data.actions && (
            <Actions
              parentField={`${parentField}.actions`}
              className="justify-center lg:justify-start py-2 bg-white"
              parentColor={data.green}
              actions={data.actions}
            />
          )}
          </div>
        </div>
      </Container>
    </Section>
  );
};

export const contactusBlockSchema: TinaTemplate = {
  name: "contactus",
  label: "Contactus",
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
      label: "Actions",
      name: "actions",
      type: "object",
      list: true,
      ui: {
        defaultItem: {
          label: "Action Label",
          type: "button",
          icon: true,
          link: "/"
        },
        itemProps: (item) => ({ label: item.label })
      },
      fields: [
        {
          label: "Label",
          name: "label",
          type: "string"
        },
        {
          label: "Type",
          name: "type",
          type: "string",
          options: [
            { label: "Button", value: "button" },
            { label: "Link", value: "link" }
          ]
        },
        {
          label: "Icon",
          name: "icon",
          type: "boolean"
        },
        {
          label: "Link",
          name: "link",
          type: "string"
        }
      ]
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
