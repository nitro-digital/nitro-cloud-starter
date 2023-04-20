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
        <div className="grid grid-cols-2 gap-4">
          <div className="col-span-2 md:col-span-1 col-span-2">
            <h1
                className={`not-italic font-bold text-3xl text-teal-600 text-left ${
                  data.color === "lightgray" ? `text-[#393939] ` :  
                    data.color === "eclipse" ? `text-[#009E97] ` : `text-white`
                }`}>
            {data.headline}
          </h1>
            <p className={`text-xl ${
              data.color === "lightgray" ? `text-[#393939] ` : 
                data.color === "eclipse" ? `text-[#393939] ` : `text-white`
            }`}>{data.title}</p>
            <div className={`${
              data.color === "lightgray" ? `text-[#009E97] ` : `text-white`
            }`}>
              <TinaMarkdown content={data.body} />
            </div></div>
          <div className="col-span-2 md:col-span-1 self-center">
            {data.actions && (
            <Actions
              parentField={`${parentField}.actions`}
              className="justify-center py-2"
              parentColor={data.color}
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
          link: "/",
          color: "yellow",
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
        },
        {
          type: "string",
          label: "Color",
          name: "color",
          options: [
            { label: "Default", value: "default" },
            { label: "Eclipse", value: "eclipse" },
            { label: "Dark cyan", value: "darkcyan" },
            { label: "Lighz gray ish blue", value: "grayishblue"},
            { label: "Light gray", value: "lightgray" },
            { label: "Slightly", value: "slightly" }
          ]
        }
      ],
    },
    {
      type: "string",
      label: "Color",
      name: "color",
      options: [
        { label: "Default", value: "default" },
        { label: "Eclipse", value: "eclipse" },
        { label: "Dark cyan", value: "darkcyan" },
        { label: "Lighz gray ish blue", value: "grayishblue"},
        { label: "Light gray", value: "lightgray" },
        { label: "Nitrogreen", value: "nitrogreen" },
        { label: "Slightly", value: "slightly" }
      ]
    }
  ]
};
