import styled from "styled-components";

export const LoaderBox = styled.div`
  position: relative;

  .root_loader {
    position: fixed;
    inset: 0;
    z-index: 1000;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
  }

  .root_two {
    position: relative;
    overflow: hidden;
    width: 100%;
    max-width: 20rem;

    @media (min-width: 768px) {
      max-width: 26rem;
    }
  }

  .root_item {
    position: absolute;
    z-index: 1000;
    width: 100%;
    height: 100%;
    background: white;
  }

  .root_item_inner {
    position: absolute;
    inset: 0;
    object-fit: cover;
    object-position: center;
    width: 100%;
    height: 100%;
    scale: 1.05;
  }
`;
