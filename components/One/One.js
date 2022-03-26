import React from "react";
import { Root, RootTitle } from "./One.styles";
import Link from "next/link";
import { fade } from "@helpers/transitions";

export default function One() {
  return (
    <Root
      data-scroll-section
      initial="initial"
      whileInView="enter"
      variants={fade}
      viewport={{ margin: "8px" }}
    >
      <div className="flex relative border">
        <div className="absolute text-uppercase small-text">Who we are</div>
        <RootTitle>
          Hey, we’re Sunken — architects based in London. Our projects range
          from small side-projects, to major industrial buildouts, and
          everything in between.
        </RootTitle>
      </div>

      <div className="flex relative one-bottom">
        <div className="para">
          <p>
            We believe that the spaces humans inhabit provide much deeper value
            than simply shelter — they’re where we learn, explore, and become.
            Artistry is often forgotten about in the field of architecture,
            commonly replaced by domineering function, or cliche stylings. It’s
            our mission to create places that spark presence: Allowing oneself
            to simply be, and start to appreciate the moment, exactly where it’s
            at.
          </p>
        </div>

        <div className="btn">
          <div className="btn_inner">
            <button className="button button--skoll">
              <span>
                <span>Work with us</span>
              </span>
            </button>
          </div>
        </div>
      </div>
    </Root>
  );
}
