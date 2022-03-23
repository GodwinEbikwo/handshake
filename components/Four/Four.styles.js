import styled from "styled-components";

export const Root = styled.section`
  position: relative;
  background-color: #1c1c20;
  color: rgba(255, 255, 255, 0.9);
  margin-top: 7vw;

  .absolute {
    top: 1em;
  }

  .small-text {
    font-size: var(--size-300);
    color: rgba(255, 255, 255, 0.7);
  }
`;

export const RootInner = styled.div`
  position: relative;
  padding: 5vw calc(var(--px-2) * 2);
  padding-top: 8vw;

  .small-text {
    font-size: var(--size-300);
  }
`;

export const RootTitle = styled.h1`
  text-indent: 45%;
  line-height: 1.2;

  @media (min-width: 1024px) {
    text-indent: 22%;
  }
`;
