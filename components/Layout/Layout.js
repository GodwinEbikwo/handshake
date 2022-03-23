import { LazyMotion, domAnimation } from "framer-motion";
import styled from "styled-components";
import Header from "@components/Header";
import Footer from "@components/Footer";

const Main = styled.main`
  width: 100%;
  position: relative;
  max-width: 2460px;
  margin: 0 auto;
`;

export default function Layout({ children }) {
  return (
    <LazyMotion features={domAnimation}>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </LazyMotion>
  );
}
