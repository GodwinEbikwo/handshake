import Link from "next/link";
import { HeaderBox, HeaderInner } from "./Header.styles";
import { Insta, Twitter, LinkedIn } from "./logo";
import { m } from "framer-motion";
import { useMenu } from "@context/app-context";
import { MenuToggle } from "./toggle";
import Menu from "./menu";
import { FancySpan } from "@helpers/fancy-span";
import FancyLink from "@helpers/fancy-link";
import { navLogoReveal } from "@helpers/transitions";

const Header = () => {
  const { menuOpen, setMenuOpen } = useMenu();
  return (
    <HeaderBox
      initial="initial"
      animate="enter"
      exit="exit"
      variants={{
        enter: { transition: { staggerChildren: 0.1, delay: 0.35 } },
      }}
    >
      <HeaderInner>
        <nav className="nav_left hide-for-mobile">
          <div className="navMenu">
            <FancySpan>
              <m.span variants={navLogoReveal} className="block">
                <FancyLink
                  destination="/About"
                  a11yText="Navigate to the contact page"
                  label="About"
                  className="link link--metis"
                />
              </m.span>
            </FancySpan>
            <FancySpan>
              <m.span variants={navLogoReveal} className="block">
                <FancyLink
                  destination="/Services"
                  a11yText="Navigate to the Services page"
                  label="Services"
                  className="link link--metis"
                />
              </m.span>
            </FancySpan>
            <FancySpan>
              <m.span variants={navLogoReveal} className="block">
                <FancyLink
                  destination="/Portfolio"
                  a11yText="Navigate to the Portfolio page"
                  label="Portfolio"
                  className="link link--metis"
                />
              </m.span>
            </FancySpan>
          </div>
        </nav>

        <div className="logo_container">
          <h4 className="text-uppercase">
            <Link href="/">
              <a className="logo" aria-label="Logo">
                <FancySpan>
                  <m.span variants={navLogoReveal} className="block">
                    Handshake
                  </m.span>
                </FancySpan>
              </a>
            </Link>
          </h4>
        </div>

        <nav className="userNav_Box">
          <div className="userNav_Box_Inner">
            <Link href="/">
              <a aria-label="go to instagram profile">
                <FancySpan>
                  <m.span variants={navLogoReveal} className="block">
                    <Insta />
                  </m.span>
                </FancySpan>
              </a>
            </Link>
            <Link href="/">
              <a aria-label="go to twiiter profile">
                <FancySpan>
                  <m.span variants={navLogoReveal} className="block">
                    <Twitter />
                  </m.span>
                </FancySpan>
              </a>
            </Link>
            <Link href="/">
              <a aria-label="go to linkedin profile">
                <FancySpan>
                  <m.span variants={navLogoReveal} className="block">
                    <LinkedIn />
                  </m.span>
                </FancySpan>
              </a>
            </Link>
          </div>
        </nav>

        <m.div
          initial={false}
          animate={menuOpen ? "enter" : "exit"}
          exit="exit"
          className="hide-for-desktop"
        >
          <MenuToggle toggle={() => setMenuOpen(!menuOpen)} />
          <Menu />
        </m.div>
      </HeaderInner>
    </HeaderBox>
  );
};

export default Header;
