import Link from "next/link";
import { HeaderBox, HeaderInner } from "./Header.styles";
import { Insta, Twitter, LinkedIn } from "./logo";
import { m } from "framer-motion";
import { useMenu } from "@context/app-context";
import { MenuToggle } from "./toggle";
import Menu from "./menu";

const Header = () => {
  const { menuOpen, setMenuOpen } = useMenu();
  return (
    <HeaderBox>
      <HeaderInner>
        <nav className="nav_left hide-for-mobile">
          <div className="navMenu">
            <Link href="/">
              <a>About</a>
            </Link>
            <Link href="/">
              <a>Portfolio</a>
            </Link>
            <Link href="/">
              <a>Services</a>
            </Link>
          </div>
        </nav>

        <div className="logo_container">
          <h4 className="text-uppercase">
            <Link href="/">
              <a className="logo" aria-label="Logo">
                Handshake
              </a>
            </Link>
          </h4>
        </div>

        <nav className="userNav_Box">
          <div className="userNav_Box_Inner">
            <Link href="/">
              <a aria-label="go to instagram profile">
                <Insta />
              </a>
            </Link>
            <Link href="/">
              <a aria-label="go to twiiter profile">
                <Twitter />
              </a>
            </Link>
            <Link href="/">
              <a aria-label="go to linkedin profile">
                <LinkedIn />
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
