import styled from "styled-components";
import { m } from "framer-motion";

export const Root = styled(m.div)`
  position: relative;
  margin: 5vw calc(var(--px-2) * 2);
  padding-top: 10vw;

  .border {
    padding-bottom: 3.5rem;
    border-bottom: 1px solid var(--border-color);
  }

  .absolute {
    top: 1em;
  }

  .small-text {
    font-size: var(--size-300);
    color: #777;
  }

  .one-bottom {
    padding-top: 3.5rem;
    flex-wrap: wrap;
    flex-direction: column;

    @media (min-width: 1024px) {
      flex-direction: row;
    }
  }

  .para {
    width: 100%;
    max-width: 58ch;
    padding-bottom: var(--spacer);

    @media (min-width: 1024px) {
      width: 50%;
      padding-bottom: 0;
    }

    p {
      line-height: 1.6;
    }
  }

  .btn {
    width: 100%;
    @media (min-width: 1024px) {
      width: 50%;
    }
  }

  .btn_inner {
    @media (min-width: 1024px) {
      width: fit-content !important;
      margin-left: auto !important;
    }
  }

  .button {
    display: flex;
    align-items: center;
    justify-content: center !important;
    text-align: center !important;
    padding: 5rem;
    width: 90px;
    height: 90px;
    background: var(--black);
    color: var(--white);
    white-space: nowrap;
    border-radius: 9999px;
    line-height: normal;
    font-size: var(--size-500);
  }
`;

export const RootTitle = styled.h1`
  text-indent: 52%;
  line-height: 1.2;

  @media (min-width: 1024px) {
    text-indent: 22%;
  }
`;
