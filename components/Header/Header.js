import Link from "next/link";
import { HeaderBox, HeaderInner } from "./Header.styles";
import { Insta, Twitter, LinkedIn } from "./logo";

const Header = () => {
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
      </HeaderInner>
    </HeaderBox>
  );
};

export default Header;
