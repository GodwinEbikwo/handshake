import styled from "styled-components";

export const FooterRoot = styled.footer`
  min-height: 50vh;
  position: relative;
`;

export const FooterInner = styled.div`
  position: relative;
  padding: var(--px-2);

  .footer_bottom {
    bottom: 1em;
    left: var(--px-2);
  }
`;

export const FooterContent = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 1024px) {
    flex-direction: row;
  }

  .left_block {
    width: 100%;
    @media (min-width: 1024px) {
      width: 66.666%;
    }
  }

  .footer_brief {
    max-width: 40ch;
    padding-top: 1.35rem;
  }

  .email_input {
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
    text-transform: uppercase;
    padding: 0.75em 0.5em;
    font-size: var(--fs-static);
    transition: 180ms box-shadow ease-in-out;
    cursor: auto;
    text-align: start;
    border: 1px solid rgba(0, 0, 0, 0.3);
    border-right: 0px;
    background-color: transparent;
    font-size: 13.5px;
  }

  .email_btn {
    font-size: 13.5px;
    border: 1px solid rgba(0, 0, 0, 0.3);
    padding: 0.15em 0.5em;
    text-transform: uppercase;
    color: var(--white);
    transition: all 300ms ease;
    background: var(--black);
  }

  .email_btn:hover {
    border: 1px solid var(--black);
  }

  .footet_subtitle {
    color: #555;
  }

  .addy {
    padding-bottom: 1.35rem;
    max-width: 20ch;

    &:first-child {
      padding-top: 1.35rem;
      @media (min-width: 1024px) {
        padding-top: 0;
      }
    }
  }

  .right_block {
    width: 100%;
    @media (min-width: 1024px) {
      width: 33.3333%;
    }
  }
`;
