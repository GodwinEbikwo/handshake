import { Root, RootInner } from "./Three.styles";
import Image from "next/image";
import Link from "next/link";

function ImageCard() {
  return (
    <div className="relative flex flex-column">
      <div className="imgContainer">
        <Image
          src="https://res.cloudinary.com/godwinebikwo/image/upload/v1628673325/rachel-mcdermott-0fN7Fxv1eWA-unsplash_ujennl.jpg"
          width={1920}
          height={1498}
          alt="people"
        />
      </div>

      <div className="card_details">
        <div className="text-uppercase gray">Lead Designer</div>
        <h3>Gerard Stone</h3>
        <p>
          A natural craftsman, Gerard is the driving creative force behind our
          work. From concept, to testing, to execution, his thorough and nuanced
          approach yields amazing results for our clients.
        </p>

        <div className="flex flex-wrap links">
          <Link href="/">
            <a className="link link--metis">IG</a>
          </Link>
          <Link href="/">
            <a className="link link--metis">TW</a>
          </Link>
          <Link href="/">
            <a className="link link--metis">LI</a>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function Three() {
  return (
    <Root>
      <RootInner>
        <div className="flex flex-wrap border">
          <div className="left">
            <h1>Team</h1>
          </div>

          <div className="right">
            <div className="right_inner">
              <h4>
                Life-long friends turned business partners. We strive to build
                lasting monuments, objects, and structures that reflect our
                clients’ unique perspectives of the world.
              </h4>
            </div>
          </div>
        </div>

        <div className="imageGrid">
          <ImageCard />

          <ImageCard />

          <ImageCard />
        </div>
      </RootInner>
    </Root>
  );
}
