import React from "react";
import Image from "next/image";
import {
  Root,
  RootInner,
  RootContent,
  RootContentInner,
  DropDownBox,
  data,
  dataTwo,
} from "./Five.styles";
import Accordion from "@components/Accordion";

export default function Five() {
  return (
    <Root data-scroll-section>
      <RootInner>
        <div className="relative banner_img">
          <div className="overflow-hidden mx-auto" data-scroll>
            <div data-scroll data-scroll-speed="-2.5">
              <Image
                src="https://res.cloudinary.com/godwinebikwo/image/upload/v1648040830/spacejoy-9M66C_w_ToM-unsplash_bv11iz.jpg"
                width={1920}
                height={1013}
                alt="people"
                className="a-img"
              />
            </div>
          </div>

          {/* <div className="absolute">
            <span>Savannah's Garden</span> <br />
            <span>Spring 2016</span>
          </div> */}
        </div>

        <RootContent>
          <RootContentInner>
            <h4 className="content_title">
              Everything we do follows strict process, eliminating the
              guesswork, and allowing our teams to most effectively craft the
              designs we’re known for. Projects vary by need & scope, but we
              handle the challenges every step of the way — here’s how we can
              help.
            </h4>

            <DropDownBox className="flex">
              <div className="left">
                {data.map((i, _) => (
                  <Accordion
                    key={i.id}
                    id={i.id}
                    title={i.title}
                    content={i.content}
                  />
                ))}
              </div>
              <div className="right">
                {dataTwo.map((i, _) => (
                  <Accordion
                    key={i.id}
                    id={i.id}
                    title={i.title}
                    content={i.content}
                  />
                ))}
              </div>
            </DropDownBox>
          </RootContentInner>
        </RootContent>
      </RootInner>
    </Root>
  );
}
