import React from "react";
import { Container } from "../util/container";
import { Section } from "../util/section";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import type { TinaTemplate } from "tinacms";

export const Workstab = ({ data, parentField = "" }) => {
  const [openTab, setOpenTab] = React.useState(1);
  return (
    <Section color={data.color}>
      <Container
        id="kapcsolat"
        className={`py-24 ${
          data.color === "primary" ? `prose-primary` : `dark:prose-dark`
        }`}
        data-tinafield={`${parentField}.body`}
        width="ourwork"
      >
        <Container
          id="kapcsolat"
          className={`py-24 px-[30px]${
            data.color === "primary" ? `prose-primary` : `dark:prose-dark`
          }`}
          data-tinafield={`${parentField}.body`}
          width="small"
        >
          <h1 className={"text-xl uppercase font-light text-center"}>
            {data.headline}
          </h1>
          <p className="text-5xl text-center underline-offset-[3px]">{data.title}</p>
          <div className={`${
            data.color === "nitrogreen" ? `text-center justify-center ` : `py-3`
          }`}>
            <TinaMarkdown content={data.body} />
          </div>
        </Container>
        <div className="container mx-auto mt-12">
          <div className="justify-center w-full">
            <div className="flex place-content-center">
              <ul className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 flex flex-col items-center justify-center">
                <li>
                  <a
                    onClick={() => setOpenTab(1)}
                    className={` ${openTab === 1 ? "bg-[#007D77] text-white" : ""} inline-block px-4 py-2 text-gray-600 rounded`}
                  >
                    Digital Strateg
                  </a>
                </li>
                <li>
                  <a
                    onClick={() => setOpenTab(2)}
                    className={` ${openTab === 2 ? "bg-[#007D77] text-white" : ""} inline-block px-4 py-2 text-gray-600 rounded`}
                  >
                    Development
                  </a>
                </li>
                <li>
                  <a
                    onClick={() => setOpenTab(3)}
                    className={` ${openTab === 3 ? "bg-[#007D77] text-white" : ""} inline-block px-4 py-2 text-gray-600 rounded`}
                  >
                    Project Maganement
                  </a>
                </li>
                <li>
                  <a
                    onClick={() => setOpenTab(4)}
                    className={` ${openTab === 4 ? "bg-[#007D77] text-white" : ""} inline-block px-4 py-2 text-gray-600 rounded`}
                  >
                    Online Marketing
                  </a>
                </li>
                <li>
                  <a
                    onClick={() => setOpenTab(5)}
                    className={` ${openTab === 5 ? "bg-[#007D77] text-white" : ""} inline-block px-4 py-2 text-gray-600 rounded`}
                  >
                    Social Media
                  </a>
                </li>
              </ul>
            </div>
            <div className="p-3 mt-6 bg-white w-full">
              <div className={openTab === 1 ? "block" : "hidden"}>
                <div className="flex flex-wrap items-center justify-center">
                  <div className="grid">
                    {data.strategys && (
                      <>
                        <div className="flex flex-wrap items-center justify-center">
                          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5">
                            {data.strategys.strategy.map((strategy, index) => (
                              <div key={index} className={`min-h-[225px] max-w-[353px] min-w-[225px] xxl:min-w-[353px] w-full ${index === 0 ? "bg-[#4B4B4B]" : index === 1 ? "bg-[#323131]" : index === 2 ? "bg-[#605E5E]" : index === 3 ? "bg-[#494949]" : "bg-[#323131]"}`}>
                                <div
                                  className="py-[25px] px-[25px] bottom-0 flex flex-col justify-end h-full"
                                >
                                  <div className="fnot-italic font-bold text-2xl text-gray-100">
                                    {strategy.header}
                                  </div>
                                  <div className="fnot-italic font-normal text-sm text-gray-100">
                                    {strategy.description}
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>
              <div className={openTab === 2 ? "block" : "hidden"}>
                <div className="flex flex-wrap items-center justify-center">
                  <div className="grid">
                    {data.developments && (
                      <>
                        <div className="flex flex-wrap items-center justify-center">
                          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5">
                            {data.developments.development.map((development, index) => (
                              <div key={index} className={`min-h-[225px] max-w-[353px] min-w-[225px] xxl:min-w-[353px] w-full ${index === 0 ? "bg-[#4B4B4B]" : index === 1 ? "bg-[#323131]" : index === 2 ? "bg-[#605E5E]" : index === 3 ? "bg-[#494949]" : "bg-[#323131]"}`}>
                                <div
                                  className="py-[25px] px-[25px] bottom-0 flex flex-col justify-end h-full"
                                >
                                  <div className="fnot-italic font-bold text-2xl text-gray-100">
                                    {development.header}
                                  </div>
                                  <div className="fnot-italic font-normal text-sm text-gray-100">
                                    {development.description}
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>
              <div className={openTab === 3 ? "block" : "hidden"}>
                <div className="flex flex-wrap items-center justify-center">
                  <div className="grid">
                    {data.projectmaganements && (
                      <>
                        <div className="flex flex-wrap items-center justify-center">
                          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5">
                            {data.projectmaganements.projectmaganement.map((projectmaganement, index) => (
                              <div key={index} className={`h-[225px] w-[225px] ${index === 0 ? "bg-[#4B4B4B]" : index === 1 ? "bg-[#323131]" : index === 2 ? "bg-[#605E5E]" : index === 3 ? "bg-[#494949]" : "bg-[#323131]"}`}>
                                <div
                                  className="py-[25px] px-[25px] bottom-0 flex flex-col justify-end h-full"
                                >
                                  <div className="fnot-italic font-bold text-2xl text-gray-100">
                                    {projectmaganement.header}
                                  </div>
                                  <div className="fnot-italic font-normal text-sm text-gray-100">
                                    {projectmaganement.description}
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>
              <div className={openTab === 4 ? "block" : "hidden"}>
                <div className="flex flex-wrap items-center justify-center">
                  <div className="grid">
                    {data.onlinemarketings && (
                      <>
                        <div className="flex flex-wrap items-center justify-center">
                          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5">
                            {data.onlinemarketings.onlinemarketing.map((onlinemarketing, index) => (
                              <div key={index} className={`min-h-[225px] max-w-[353px] min-w-[225px] xxl:min-w-[353px] w-full ${index === 0 ? "bg-[#4B4B4B]" : index === 1 ? "bg-[#323131]" : index === 2 ? "bg-[#605E5E]" : index === 3 ? "bg-[#494949]" : "bg-[#323131]"}`}>
                                <div
                                  className="py-[25px] px-[25px] bottom-0 flex flex-col justify-end h-full"
                                >
                                  <div className="fnot-italic font-bold text-2xl text-gray-100">
                                    {onlinemarketing.header}
                                  </div>
                                  <div className="fnot-italic font-normal text-sm text-gray-100">
                                    {onlinemarketing.description}
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>
              <div className={openTab === 5 ? "block" : "hidden"}>
                <div className="flex flex-wrap items-center justify-center">
                  <div className="grid">
                    {data.socialmedias && (
                      <>
                        <div className="flex flex-wrap items-center justify-center">
                          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5">
                            {data.socialmedias.socialmedia.map((socialmedia, index) => (
                              <div key={index} className={`min-h-[225px] max-w-[353px] min-w-[225px] xxl:min-w-[353px] w-full ${index === 0 ? "bg-[#4B4B4B]" : index === 1 ? "bg-[#323131]" : index === 2 ? "bg-[#605E5E]" : index === 3 ? "bg-[#494949]" : "bg-[#323131]"}`}>
                                <div
                                  className="py-[25px] px-[25px] bottom-0 flex flex-col justify-end h-full"
                                >
                                  <div className="fnot-italic font-bold text-2xl text-gray-100">
                                    {socialmedia.header}
                                  </div>
                                  <div className="fnot-italic font-normal text-sm text-gray-100">
                                    {socialmedia.description}
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export const workstabBlockSchema: TinaTemplate = {
  name: "workstab",
  label: "Our Woorks tab",
  ui: {
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
      label: "Digital Strategy",
      name: "strategys",
      type: "object",
      fields: [
        {
          type: "object",
          label: "strategy",
          name: "strategy",
          list: true,
          fields: [
            {
              label: "Header",
              name: "header",
              type: "string"
            },
            {
              label: "Description",
              name: "description",
              type: "string",
              ui: {
                component: "textarea"
              }
            }
          ]
        }
      ]
    },
    {
      label: "Development",
      name: "developments",
      type: "object",
      fields: [
        {
          type: "object",
          label: "Client",
          name: "development",
          list: true,
          fields: [
            {
              label: "Header",
              name: "header",
              type: "string"
            },
            {
              label: "Description",
              name: "description",
              type: "string",
              ui: {
                component: "textarea"
              }
            }
          ]
        }
      ]
    },
    {
      label: "Project Maganement",
      name: "projectmaganements",
      type: "object",
      fields: [
        {
          type: "object",
          label: "Client",
          name: "projectmaganement",
          list: true,
          fields: [
            {
              label: "Header",
              name: "header",
              type: "string"
            },
            {
              label: "Description",
              name: "description",
              type: "string",
              ui: {
                component: "textarea"
              }
            }
          ]
        }
      ]
    },
    {
      label: "Online Marketing",
      name: "onlinemarketings",
      type: "object",
      fields: [
        {
          type: "object",
          label: "Client",
          name: "onlinemarketing",
          list: true,
          fields: [
            {
              label: "Header",
              name: "header",
              type: "string"
            },
            {
              label: "Description",
              name: "description",
              type: "string",
              ui: {
                component: "textarea"
              }
            }
          ]
        }
      ]
    },
    {
      label: "Social Media",
      name: "socialmedias",
      type: "object",
      fields: [
        {
          type: "object",
          label: "Client",
          name: "socialmedia",
          list: true,
          fields: [
            {
              label: "Header",
              name: "header",
              type: "string"
            },
            {
              label: "Description",
              name: "description",
              type: "string",
              ui: {
                component: "textarea"
              }
            }
          ]
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
