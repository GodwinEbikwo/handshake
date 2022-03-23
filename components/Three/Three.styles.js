import styled from "styled-components";

export const Root = styled.section`
  position: relative;
  margin: 5vw calc(var(--px-2) * 2);
  padding-top: 5vw;
`;

export const RootInner = styled.div`
  .border {
    padding-bottom: 3.5rem;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  }

  .left {
    width: 100%;
    padding-bottom: var(--spacer);
    @media (min-width: 1024px) {
      width: 50%;
      padding-bottom: 0;
    }

    h1 {
      font-size: 70px;
      line-height: 0.75;
      @media (min-width: 1024px) {
        font-size: 170px;
      }
    }
  }

  .right {
    width: 100%;
    @media (min-width: 1024px) {
      width: 50%;
    }
  }

  .right_inner {
    width: fit-content !important;
    margin-left: auto !important;

    h4 {
      text-indent: 40%;
      font-size: 21px;

      @media (min-width: 1024px) {
        text-indent: 10%;
        font-size: 24px;
      }
    }
  }

  .imgContainer {
    margin-bottom: 1.5rem;
    width: auto;
  }

  .card_details {
    display: flex;
    flex-direction: column;

    .gray {
      font-size: var(--size-300);
      color: #777;
      letter-spacing: 0.04em;
    }

    & > * + * {
      margin-top: 0.5rem;
      max-width: 40ch;
    }
  }

  .imageGrid {
    --gap: 1em;
    display: flex;
    flex-wrap: wrap;
    gap: var(--gap);
    width: 100%;
    margin-top: var(--spacer);

    @media (min-width: 1024px) {
      margin-top: 5rem;
    }
  }

  .imageGrid > * {
    --min: 25ch;
    flex: 1 1 var(--min);
  }

  .links {
    a {
      margin-top: 0.5rem;
      margin-right: 1.25rem;
      font-size: var(--size-300);
      color: #777;
    }
  }
`;
