import styled from "styled-components";

export const Root = styled.section`
  position: relative;
  background-color: #1c1c20;
  padding-bottom: 5vw;
`;

export const RootInner = styled.div`
  position: relative;

  .banner_img {
    z-index: 0;
  }

  .absolute {
    top: 1em;
    left: var(--px-2);

    @media (min-width: 1024px) {
      top: unset;
      bottom: 8em;
    }

    & > span {
      font-weight: 600;
      letter-spacing: var(--ls-sm);
      text-shadow: 1px 1px 1px #000;
      color: white;
    }
  }
`;

export const RootContent = styled.div`
  position: relative;
  background: white;
  margin: 0 calc(var(--px-2));
  margin-top: -5vw;
  z-index: 4;
  min-height: 50vh;
`;

export const RootContentInner = styled.div`
  padding: var(--spacer-md) calc(var(--px-2) * 2);

  @media (min-width: 1024px) {
    padding: var(--px-2) calc(var(--px-2) * 2);
  }

  .content_title {
    text-indent: 40%;
    @media (min-width: 1024px) {
      text-indent: 15%;
    }
  }
`;

export const DropDownBox = styled.div`
  width: 100%;
  padding-top: var(--spacer);
  flex-direction: column;

  .left {
    width: 100%;
  }

  .right {
    width: 100%;
  }

  @media (min-width: 1024px) {
    padding-top: var(--spacer-md);
    flex-direction: row;

    .left {
      width: 50%;
      padding-right: 2em;
    }

    .right {
      width: 50%;
    }
  }
`;

export const data = [
  {
    id: 0,
    title: "Land Mapping",
    content:
      "This is a semi-thorough description of what this service entails, how it’s accomplished, what clients can expect, and how long it might take.",
  },
  {
    id: 1,
    title: "Room Planning",
    content:
      "This is a semi-thorough description of what this service entails, how it’s accomplished, what clients can expect, and how long it might take",
  },
  {
    id: 2,
    title: "Technical Design",
    content:
      "This is a semi-thorough description of what this service entails, how it’s accomplished, what clients can expect, and how long it might take.",
  },
  {
    id: 3,
    title: "Contract Administration",
    content:
      "This is a semi-thorough description of what this service entails, how it’s accomplished, what clients can expect, and how long it might take.",
  },
  {
    id: 4,
    title: "Planning Process",
    content:
      "This is a semi-thorough description of what this service entails, how it’s accomplished, what clients can expect, and how long it might take.",
  },
];

export const dataTwo = [
  {
    id: 0,
    title: "Corporate Offices",
    content:
      "This is a semi-thorough description of what this service entails, how it’s accomplished, what clients can expect, and how long it might take.",
  },
  {
    id: 1,
    title: "On-site Assistance",
    content:
      "This is a semi-thorough description of what this service entails, how it’s accomplished, what clients can expect, and how long it might take",
  },
  {
    id: 2,
    title: "Visualizations",
    content:
      "This is a semi-thorough description of what this service entails, how it’s accomplished, what clients can expect, and how long it might take.",
  },
  {
    id: 3,
    title: "Team Cordination",
    title: "Contract Administration",
    content:
      "This is a semi-thorough description of what this service entails, how it’s accomplished, what clients can expect, and how long it might take.",
  },
  {
    id: 4,
    title: "Home Planning",
    content:
      "This is a semi-thorough description of what this service entails, how it’s accomplished, what clients can expect, and how long it might take",
  },
];
