import { LazyMotion, domAnimation, m } from "framer-motion";
import styled from "styled-components";
import Header from "@components/Header";
import Footer from "@components/Footer";
import { useRouter } from "next/router";
import { useRef } from "react";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";

const options = {
  smooth: true,
  class: "is-inview",
  lerp: 0.05,
  getDirection: true,
};

const Main = styled(m.main)`
  width: 100%;
  position: relative;
  max-width: 2460px;
  margin: 0 auto;
`;

export default function Layout({ children }) {
  const containerRef = useRef(null);
  const { asPath } = useRouter();
  return (
    <LazyMotion features={domAnimation}>
      <LocomotiveScrollProvider
        options={options}
        location={asPath}
        containerRef={containerRef}
        onLocationChange={(scroll) =>
          scroll.scrollTo(0, { duration: 0, disableLerp: true })
        }
        watch={[]}
      >
        <div data-scroll-container ref={containerRef} id="scroll-container">
          <Header />

          <Main initial="initial" animate="enter" exit="exit">
            {children}
          </Main>

          <Footer />
        </div>
      </LocomotiveScrollProvider>
    </LazyMotion>
  );
}
