import { Root, RootInner, RootTitle, RootContent } from "./Contact.styles";
import Image from "next/image";
import Link from "next/link";

export default function Contact() {
  return (
    <Root data-scroll-section>
      <RootInner>
        <RootTitle>Contact</RootTitle>

        <RootContent>
          <div className="left_block">
            <Image
              src="https://res.cloudinary.com/godwinebikwo/image/upload/v1648104614/inside-weather-BayIzHKkjM4-unsplash_1_thaa3t.jpg"
              width={640}
              height={640}
              alt="contact"
            />
          </div>
          <div className="right_block">
            <div className="right_inner_block">
              <div className="right_para">
                <h4>
                  Think we might be a good fit for your upcoming project? Reach
                  out — we’d love to talk details and see how we can help.
                </h4>
              </div>

              <div className="pt">
                <h4>
                  We have multiple models of engagement: We can work directly
                  with individuals for private residences, partner with builders
                  and contractors on corporate projects, or simply be involved
                  in the planning process. No project is too small, but we
                  generally prefer to work in sprints with a 3-6 month minimum
                  duration. If you have any questions or ideas, we’d be happy to
                  schedule a consultation.
                </h4>
              </div>

              <div className="btn">
                <Link href="/">
                  <a className="button">Work with us</a>
                </Link>
              </div>
            </div>
          </div>
        </RootContent>
      </RootInner>
    </Root>
  );
}
