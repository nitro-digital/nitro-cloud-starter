import React from "react";
import { Container } from "../util/container";
import { Section } from "../util/section";
import type { TinaTemplate } from "tinacms";
import { Icon } from "../util/icon";
import { TinaMarkdown } from "tinacms/dist/rich-text";

export const Solutions = ({ data, parentField = "" }) => {
  return (
    <div className={`bg-[#393939]`}>
      <Container
        className={`py-24 bg-[#393939]`}
        data-tinafield={`${parentField}.body`}
        width="large"
      >
        <h2 className={"not-italic font-light text-xl uppercase text-white"}>
          {data.headline}
        </h2>
        <h1 className="not-italic font-normal text-5xl lowercase text-white">{data.title}</h1>
        <p className="not-italic font-normal text-xl text-gray-400">{data.baseline}</p>
        {data.images && (
          <>
            <h2
              data-tinafield={`${parentField}.images`}
              className="relative inline-block px-3 py-1 mb-8 text-md font-bold tracking-wide title-font z-20"
            >
            </h2>
            <div className="flex flex-wrap items-center justify-center pt-[60px] pb-[170px]">
              <div className="grid grid-cols-5 gap-4">
                {data.images.image.map((image, index) => (
                  <div key={index} className="flex-1 justify-center flex flex-col gap-6 text-center items-center lg:text-left max-w-xl mx-auto">
                    <img
                      src={image.src}
                      alt={image.alt}
                      title={image.title}
                    />
                    <div className="flex-1 justify-center flex flex-col gap-6 text-center items-center lg:text-left max-w-xl mx-auto text-white">{image.title}</div>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="h-[615px] bg-[#7199C7] px-8">
            <h1 className="not-italic font-light text-xl uppercase text-white pt-5">1.</h1>
            <div className="not-italic font-normal text-5xl text-gray-800 leading-[58px] pt-5">{data.digitalstrategy}</div>
            <div className="not-italic font-normal text-xl leading-[115%] text-[#E0E0E0] leading-[23px] pt-[41px]">
              <TinaMarkdown content={data.digitalstrategytext} />
            </div>
          </div>
          <div className="h-[615px] bg-[#717171] hidden md:flex">
          </div>
          <div className="h-[615px] bg-[#717171] hidden md:flex">
          </div>
          <div className="h-[615px] bg-[#009E97] px-8">
            <h1 className="not-italic font-light text-xl uppercase text-white pt-5">2.</h1>
            <div className="not-italic font-normal text-5xl text-white leading-[58px] pt-5">{data.consulting}</div>
            <div className="not-italic font-normal text-xl text-white leading-[23px] pt-[41px]">
              <TinaMarkdown content={data.consultingtext} />
            </div>
          </div>
          <div className="h-[615px] bg-[#1D3E66] px-8">
            <h1 className="not-italic font-light text-xl uppercase text-white pt-5">3.</h1>
            <div className="not-italic font-normal text-5xl text-gray-400 leading-[58px] pt-5">{data.projectmanagement}</div>
            <div className="not-italic font-normal text-xl text-gray-300  leading-[23px] pt-[41px]">
              <TinaMarkdown content={data.projectmanagementtext} />
            </div>
          </div>
          <div className="h-[615px] bg-[#717171] hidden md:flex">
          </div>
          <div className="h-[615px] bg-[#717171] hidden md:flex">
          </div>
          <div className="h-[615px] bg-[#D9D9D9] px-8">
            <h1 className="not-italic font-light text-xl uppercase text-gray-800 pt-5">4.</h1>
            <div className="not-italic font-normal text-5xl text-teal-700 leading-[58px] pt-5">{data.pr}</div>
            <div className="not-italic font-normal text-xl text-gray-800  leading-[23px] pt-[41px]">
              <TinaMarkdown content={data.prtext} />
            </div>
          </div>
          <div className="h-[615px] bg-[#006661] px-8">
            <h1 className="not-italic font-light text-xl uppercase text-white pt-5">5.</h1>
            <div className="not-italic font-normal text-5xl text-gray-400 leading-[58px] pt-5">{data.marketing}</div>
            <div className="not-italic font-normal text-xl text-gray-300 leading-[23px] pt-[41px]">
              <TinaMarkdown content={data.marketingtext} />
            </div>
          </div>
          <div className="h-[615px] bg-[#717171] hidden md:flex">
          </div>
        </div>
      </Container>
    </div>
  );
};

export const solutionsBlockSchema: TinaTemplate = {
  name: "solutions",
  label: "Solutions",
  ui: {
    defaultItem: {
      headline: "What we do",
      title: "Solutions",
      baseline: "We're a passionate team about all around the digital globe (from the metaverse to the classic web).",
      digitalstrategy: "Digital strategy",
      digitalstrategytext: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
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
      type: "string",
      label: "Baseline",
      name: "baseline"
    },
    {
      type: "string",
      label: "Digital strategy",
      name: "digitalstrategy"
    },
    {
      label: "Digitalstrategy Text",
      name: "digitalstrategytext",
      type: "rich-text"
    },
    {
      type: "string",
      label: "Consulting",
      name: "consulting"
    },
    {
      label: "Consulting Text",
      name: "consultingtext",
      type: "rich-text"
    },
    {
      type: "string",
      label: "Project management",
      name: "projectmanagement"
    },
    {
      label: "Projectmanagement Text",
      name: "projectmanagementtext",
      type: "rich-text"
    },
    {
      type: "string",
      label: "Communication, PR",
      name: "pr"
    },
    {
      label: "communication, PR Text",
      name: "prtext",
      type: "rich-text"
    },
    {
      type: "string",
      label: "Marketing and social media",
      name: "marketing"
    },
    {
      label: "Marketing and social media Text",
      name: "marketingtext",
      type: "rich-text"
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
    },
    {
      label: "Images",
      name: "images",
      type: "object",
      fields: [
        {
          type: "object",
          label: "Image",
          name: "image",
          list: true,
          fields: [
            {
              name: "src",
              label: "Image Source",
              type: "image"
            },
            {
              name: "title",
              label: "Title",
              type: "string"
            },
            {
              name: "alt",
              label: "Alt Text",
              type: "string"
            }
          ]
        }
      ]
    }
  ]
};
