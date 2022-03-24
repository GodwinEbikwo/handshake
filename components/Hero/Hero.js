import React from "react";
import { Root, RootInner, RootTitle, ImageBox } from "./Hero.styles";
import Image from "next/image";
import { m } from "framer-motion";
import { revealInOut, revealIn, fade } from "@helpers/transitions";
import { FancySpan } from "@helpers/fancy-span";

export default function Hero() {
  return (
    <Root data-scroll-section>
      <div className="left text-uppercase">
        <div className="round-button">
          <button
            type="button"
            aria-label="scroll down"
            className="round-button"
          >
            <span className="button-arrow">
              <svg
                viewBox="0 0 20 23"
                fill="none"
                className="arrow-svg"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.9774 0C11.9774 6.99683 16.6409 12.6586 22.404 12.6586"
                  stroke="var(--black)"
                  strokeMiterlimit="10"
                ></path>
                <path
                  d="M22.4044 12.6582C16.6412 12.6582 11.9778 18.32 11.9778 25.3168"
                  stroke="var(--black)"
                  strokeMiterlimit="10"
                ></path>
                <path
                  d="M19.4041 12.6582H0"
                  stroke="var(--black)"
                  strokeMiterlimit="10"
                ></path>
              </svg>
            </span>
          </button>
        </div>
      </div>

      <div className="right text-uppercase hide-for-mobile">
        <FancySpan>
          <m.div variants={revealIn}>
            <span>Based in</span>
          </m.div>
          <m.div variants={revealIn}>
            <span>London England</span>
          </m.div>
        </FancySpan>
      </div>

      <RootInner>
        <RootTitle
          data-scroll
          data-scroll-speed="1.25"
          data-scroll-direction="vertical"
        >
          <FancySpan>
            <m.div variants={revealInOut}>
              <span className="block">Residential Architects</span>
            </m.div>
          </FancySpan>
        </RootTitle>

        <ImageBox data-scroll className="hide-for-desktop">
          <Image
            src="https://res.cloudinary.com/godwinebikwo/image/upload/v1648032402/pexels-houzlook-com-3356416_tfqkns.jpg"
            layout="fill"
            objectFit="cover"
            alt="plant"
            className="a-img"
          />
        </ImageBox>

        <div
          className="overflow-hidden mx-auto overlap hide-for-mobile"
          data-scroll
        >
          <ImageBox data-scroll data-scroll-speed="-2.5">
            <Image
              src="https://res.cloudinary.com/godwinebikwo/image/upload/v1648032402/pexels-houzlook-com-3356416_tfqkns.jpg"
              layout="fill"
              objectFit="cover"
              alt="plant"
              className="a-img"
            />
          </ImageBox>
        </div>
      </RootInner>
    </Root>
  );
}
