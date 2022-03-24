import styled from "styled-components";

export const Root = styled.div`
  position: relative;
  padding: 0 calc(var(--px-2) * 2);
  padding-top: calc(var(--spacer));
  padding-bottom: calc(var(--spacer-md) * 2);
  background-color: #1c1c20;
  color: rgba(255, 255, 255, 0.9);

  @media (min-width: 1024px) {
    padding-top: 5vw;
  }
`;

export const RootInner = styled.div`
  position: relative;
`;

export const RootTitle = styled.h1`
  line-height: 1;
  padding-bottom: 1rem;
  font-size: 70px;

  @media (min-width: 1024px) {
    font-size: 170px;
    padding-bottom: 1.5rem;
  }
`;

export const RootContent = styled.div`
  position: relative;

  .right_para {
    border-bottom: 1px solid rgba(255, 255, 255, 0.7);
    padding-bottom: 1.5em;
  }

  .pt {
    padding-top: 2em;

    @media (min-width: 1024px) {
      padding-top: 1.5em;
    }

    h4 {
      text-indent: 42%;
      @media (min-width: 1024px) {
        text-indent: 22%;
      }
    }
  }

  .left_block {
    padding-bottom: 1rem;
  }

  .btn {
    width: 100%;
    padding-top: 3rem;
    @media (min-width: 1024px) {
      padding-top: 2em;
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
    background: var(--white);
    color: var(--black);
    white-space: nowrap;
    border-radius: 9999px;
    line-height: normal;
    font-size: var(--size-500);
  }

  @media (min-width: 1024px) {
    display: flex;

    .left_block {
      width: 50%;
      padding-right: 2em;
      padding-bottom: 0em;
    }

    .right_block {
      width: 50%;
    }

    .right_inner_block {
      display: flex;
      flex-direction: column;
    }
  }
`;
