import React from "react";
import { Root, RootTitle } from "./One.styles";
import Link from "next/link";

export default function One() {
  return (
    <Root data-scroll-section>
      <div className="flex relative border">
        <div className="absolute text-uppercase small-text">Who we are</div>
        <RootTitle>
          Hey, we’re Handshake — architects based in Seattle. Our projects range
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
            <Link href="/">
              <a className="button">Work with us</a>
            </Link>
          </div>
        </div>
      </div>
    </Root>
  );
}
