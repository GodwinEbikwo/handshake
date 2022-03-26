import { LoaderBox } from "./styles";
import { m, LazyMotion, domAnimation } from "framer-motion";
import Image from "next/image";

const introEnd = {
  enter: { opacity: 0 },
  initial: { opacity: "100%" },
};

const imageLoad = {
  enter: { opacity: "100%" },
  initial: { opacity: 0 },
};

const imageReveal = {
  enter: { y: "-100%" },
  initial: { y: 0 },
};

const imageRevealOut = {
  enter: { y: 0, scale: 1.1 },
  initial: { y: "100%" },
};

export default function Loader({ setLoading }) {
  return (
    <LazyMotion features={domAnimation}>
      <LoaderBox id="loaderbox" className="loaderbox">
        <m.div
          initial="initial"
          animate="enter"
          variants={introEnd}
          transition={{
            delay: 3.05,
            duration: 0.66,
            ease: [0.83, 0, 0.17, 1],
          }}
          className="root_loader"
        ></m.div>
        <m.div
          onAnimationComplete={() => setLoading(false)}
          initial="initial"
          animate="enter"
          variants={introEnd}
          transition={{
            delay: 2.6,
            duration: 0.66,
            ease: [0.83, 0, 0.17, 1],
          }}
          className="root_loader"
        >
          <div className="root_two">
            {/* Reveal In */}
            <m.div
              className="root_item"
              initial="initial"
              animate="enter"
              variants={imageReveal}
              transition={{
                delay: 0.25,
                duration: 1.5,
                ease: [0.83, 0, 0.17, 1],
              }}
            ></m.div>

            {/* Reveal Out */}
            <m.div
              className="root_item"
              initial="initial"
              animate="enter"
              variants={imageRevealOut}
              transition={{
                delay: 1.75,
                duration: 1.5,
                ease: [0.83, 0, 0.17, 1],
              }}
            ></m.div>

            <div>
              <Image
                alt="handshake"
                src="https://res.cloudinary.com/godwinebikwo/image/upload/v1627453776/jason-wang-5MG8cQbw-T8-unsplash_vb8la2.jpg"
                className="root_item_inner"
                priority={true}
                width={1920}
                height={2560}
              />
            </div>

            <m.div
              initial="initial"
              animate="enter"
              variants={imageLoad}
              transition={{ delay: 0.5, duration: 0 }}
            >
              <Image
                alt="handshake"
                src="https://res.cloudinary.com/godwinebikwo/image/upload/v1627453776/jason-wang-5MG8cQbw-T8-unsplash_vb8la2.jpg"
                className="root_item_inner"
                priority={true}
                layout="fill"
                objectFit="cover"
              />
            </m.div>

            <m.div
              initial="initial"
              animate="enter"
              variants={imageLoad}
              transition={{ delay: 0.75, duration: 0 }}
            >
              <Image
                alt="handshake"
                src="https://res.cloudinary.com/godwinebikwo/image/upload/v1648032402/pexels-houzlook-com-3356416_tfqkns.jpg"
                className="root_item_inner"
                priority={true}
                layout="fill"
                objectFit="cover"
              />
            </m.div>

            <m.div
              initial="initial"
              animate="enter"
              variants={imageLoad}
              transition={{ delay: 1, duration: 0 }}
            >
              <Image
                alt="handshake"
                src="https://res.cloudinary.com/godwinebikwo/image/upload/v1648033081/pexels-max-vakhtbovych-5998041_lch2no.jpg"
                className="root_item_inner"
                priority={true}
                layout="fill"
                objectFit="cover"
              />
            </m.div>

            <m.div
              initial="initial"
              animate="enter"
              variants={imageLoad}
              transition={{ delay: 1.25, duration: 0 }}
            >
              <Image
                alt="handshake"
                src="https://res.cloudinary.com/godwinebikwo/image/upload/v1648032967/pexels-victoria-borodinova-3315291_ssnuna.jpg"
                className="root_item_inner"
                priority={true}
                layout="fill"
                objectFit="cover"
              />
            </m.div>

            <m.div
              initial="initial"
              animate="enter"
              variants={imageLoad}
              transition={{ delay: 1.5, duration: 0 }}
            >
              <Image
                alt="handshake"
                src="https://res.cloudinary.com/godwinebikwo/image/upload/v1648032402/pexels-houzlook-com-3356416_tfqkns.jpg"
                className="root_item_inner"
                priority={true}
                layout="fill"
                objectFit="cover"
              />
            </m.div>

            <m.div
              initial="initial"
              animate="enter"
              variants={imageLoad}
              transition={{ delay: 1.75, duration: 0 }}
            >
              <Image
                alt="handshake"
                src="https://res.cloudinary.com/godwinebikwo/image/upload/v1648040632/spacejoy-IH7wPsjwomc-unsplash_xvdce6.jpg"
                className="root_item_inner"
                priority={true}
                layout="fill"
                objectFit="cover"
              />
            </m.div>

            <m.div
              initial="initial"
              animate="enter"
              variants={imageLoad}
              transition={{ delay: 2, duration: 0 }}
            >
              <Image
                alt="handshake"
                src="https://res.cloudinary.com/godwinebikwo/image/upload/v1627453776/jason-wang-5MG8cQbw-T8-unsplash_vb8la2.jpg"
                className="root_item_inner"
                priority={true}
                layout="fill"
                objectFit="cover"
              />
            </m.div>

            <m.div
              initial="initial"
              animate="enter"
              variants={imageLoad}
              transition={{ delay: 2.25, duration: 0 }}
            >
              <Image
                alt="handshake"
                src="https://res.cloudinary.com/godwinebikwo/image/upload/v1648032402/pexels-houzlook-com-3356416_tfqkns.jpg"
                className="root_item_inner"
                priority={true}
                layout="fill"
                objectFit="cover"
              />
            </m.div>
          </div>
        </m.div>
      </LoaderBox>
    </LazyMotion>
  );
}
