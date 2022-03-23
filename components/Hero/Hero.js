import React from "react";
import { Root, RootInner, RootTitle, ImageBox } from "./Hero.styles";
import Image from "next/image";

export default function Hero() {
  return (
    <Root>
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
        <span>Based in</span>
        <span>London England</span>
      </div>
      <RootInner>
        <RootTitle>
          <span>Residential</span> <br />
          <span>Architects</span>
        </RootTitle>
        <ImageBox>
          <Image
            src="https://res.cloudinary.com/godwinebikwo/image/upload/v1627453776/jason-wang-5MG8cQbw-T8-unsplash_vb8la2.jpg"
            layout="fill"
            objectFit="cover"
            alt="plant"
            className="hero-img"
          />
        </ImageBox>
      </RootInner>
    </Root>
  );
}
