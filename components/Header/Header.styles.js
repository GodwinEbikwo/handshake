import styled from "styled-components";

export const HeaderBox = styled.header`
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 50;
`;

export const HeaderInner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem var(--px-2);
  font-size: var(--size-300);
  background: var(--bg);
  font-family: var(--font2);
  text-transform: uppercase;

  @media (min-width: 1024px) {
    padding: 2rem var(--px-2);
  }

  .nav_left {
    flex: 1 1 0%;
  }

  .navMenu {
    display: none;
    & > * + * {
      position: relative;
      margin-left: 1.5rem;
    }

    @media (min-width: 1024px) {
      display: inline-flex;
    }
  }

  .nav_link {
    display: inline-flex;
    align-items: center;
  }

  .logo_container {
    display: flex;
    align-items: center;
  }

  .logo {
    cursor: pointer;
    transition: transform 200ms ease-in-out;
    font-size: var(--size-500);
    font-weight: 600;
  }

  .userNav_Box {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    flex: 1 1 0%;

    & > * + * {
      margin-top: var(--spacer);
    }
  }

  .userNav_Box_Inner {
    display: none;

    & > * + * {
      position: relative;
      margin-left: 1.5rem;
    }

    @media (min-width: 1024px) {
      display: flex;
    }
  }
`;
