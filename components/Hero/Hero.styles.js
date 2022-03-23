import styled from "styled-components";

export const Root = styled.div`
  position: relative;
  padding: 0 var(--px-2);
  padding-top: calc(var(--spacer-lg) * 2);

  @media (min-width: 1024px) {
    padding-top: 13vw;
  }

  .left {
    position: absolute;
    bottom: 22vw;
    left: var(--px-2);
    max-width: 5ch;
    font-size: var(--size-300);

    & > span {
      display: inline-block;
    }

    .round-button {
      width: 60px;
      height: 60px;
      border-radius: 50%;
      border: 0.25px solid rgba(0, 0, 0, 0.2);
      background: transparent;
    }

    .button-arrow {
      display: inline-flex;

      .arrow-svg {
        margin: auto;
        width: 6vw;
        height: 6vw;
        transform: rotate(90deg);

        @media (min-width: 768px) {
          width: 2vw;
          height: 2vw;
        }
      }
    }
  }

  .right {
    position: absolute;
    bottom: 22vw;
    right: var(--px-2);
    max-width: 19ch;
    text-align: right;
    font-size: var(--size-300);

    & > span {
      display: inline-block;
    }
  }
`;

export const RootInner = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const RootTitle = styled.h1`
  font-size: 17.5vw;
  text-align: center;
  line-height: 0.85;
  z-index: 1;

  @media (min-width: 1024px) {
    font-size: 11.5vw;
  }
`;

export const ImageBox = styled.div`
  position: relative;
  overflow: hidden;
  margin-top: -3.5vw;
  width: 100%;
  height: 640px;

  @media (min-width: 1024px) {
    width: 480px;
    height: 640px;
  }
`;
