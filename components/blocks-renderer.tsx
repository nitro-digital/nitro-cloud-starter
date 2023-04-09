import React from "react";
import type { Page } from "../tina/__generated__/types";
import { Content } from "./blocks/content";
import { Features } from "./blocks/features";
import { Hero } from "./blocks/hero";
import { Testimonial } from "./blocks/testimonial";
import { Info }  from "./blocks/info";
import { Fullwhero } from "../components/blocks/fullwhero";
import { Nitrohero } from "../components/blocks/nitrohero";

export const Blocks = (props: Omit<Page, "id" | "_sys" | "_values">) => {
  return (
    <>
      {props.blocks
        ? props.blocks.map(function (block, i) {
          switch (block.__typename) {
            case "PageBlocksContent":
              return (
                <div
                  data-tinafield={`blocks.${i}`}
                  key={i + block.__typename}
                >
                  <Content data={block} parentField={`blocks.${i}`} />
                </div>
              );
            case "PageBlocksHero":
              return (
                <div
                  data-tinafield={`blocks.${i}`}
                  key={i + block.__typename}
                >
                  <Hero data={block} parentField={`blocks.${i}`} />
                </div>
              );
            case "PageBlocksFeatures":
              return (
                <div
                  data-tinafield={`blocks.${i}`}
                  key={i + block.__typename}
                >
                  <Features data={block} parentField={`blocks.${i}`} />
                </div>
              );
            case "PageBlocksTestimonial":
              return (
                <div
                  data-tinafield={`blocks.${i}`}
                  key={i + block.__typename}
                >
                  <Testimonial data={block} parentField={`blocks.${i}`} />
                </div>
              );
              case "PageBlocksInfo":
                  return (
                      <div
                          data-tinafield={`blocks.${i}`}
                          key={i + block.__typename}
                      >
                          <Info data={block} parentField={`blocks.${i}`} />
                      </div>
                  );
              case "PageBlocksFullwhero":
                  return (
                      <div
                          data-tinafield={`blocks.${i}`}
                          key={i + block.__typename}
                      >
                          <Fullwhero data={block} parentField={`blocks.${i}`} />
                      </div>
                  );
              case "PageBlocksNitrohero":
                  return (
                      <div
                          data-tinafield={`blocks.${i}`}
                          key={i + block.__typename}
                      >
                          <Nitrohero data={block} parentField={`blocks.${i}`} />
                      </div>
                  );
            default:
              return null;
          }
        })
        : null}
    </>
  );
};
