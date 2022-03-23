import React from "react";
import Image from "next/image";
import { Root } from "./Two.styles";

export default function Two() {
  return (
    <Root>
      <Image
        src="https://res.cloudinary.com/godwinebikwo/image/upload/v1647861321/spacejoy-trG8989WjFA-unsplash_gluawl.jpg"
        width={1920}
        height={1080}
        alt="room"
      />
    </Root>
  );
}
