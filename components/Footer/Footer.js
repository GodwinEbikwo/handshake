import { FooterRoot, FooterInner, FooterContent } from "./Footer.styles";

export default function Footer() {
  return (
    <FooterRoot>
      <FooterInner>
        <FooterContent>
          <div className="left_block">
            <h1>HandShake</h1>

            <div className="footer_brief">
              <p>
                Handshake is a minimalist theme website template by Godwin
                Ebikwo — featuring a stunning 1-page format. If you want to use
                it hit me up and I would gladly connect a cms for you. For FREE.
              </p>
            </div>

            <div className="footer_brief">
              <form className="flex">
                <label
                  aria-label="search field"
                  htmlFor="email"
                  className="hidden"
                >
                  Search
                </label>
                <input
                  id="email__input"
                  className="email_input"
                  type="text"
                  placeholder="EMAIL ADDRESS"
                />
                <button className="email_btn">
                  <span>Signup</span>
                </button>
              </form>
            </div>
          </div>

          <div className="right_block">
            <div className="flex flex-column addy">
              <span className="footet_subtitle">Phone</span>
              <span className="footet_title">(123) 456-7890</span>
            </div>
            <div className="flex flex-column addy">
              <span className="footet_subtitle">Email</span>
              <span className="footet_title">godwin.a.ebikwo@gmail.com</span>
            </div>
            <div className="flex flex-column addy">
              <span className="footet_subtitle">Address</span>
              <span className="footet_title">
                123 Fake Address Rd. Seattle, Washington 54321 USA
              </span>
            </div>
          </div>
        </FooterContent>

        <div className="footer_bottom absolute">
          <div className="flex space-between">
            <div>Handshake © 2022</div>
          </div>
        </div>
      </FooterInner>
    </FooterRoot>
  );
}
