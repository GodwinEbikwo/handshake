import styled from "styled-components";

export const imgData = [
  {
    id: 0,
    name: "Orizon Corrdiors",
    src:
      "https://res.cloudinary.com/godwinebikwo/image/upload/v1627453776/jason-wang-5MG8cQbw-T8-unsplash_vb8la2.jpg",
  },
  {
    id: 1,
    name: "Urban Shelters",
    src:
      "https://res.cloudinary.com/godwinebikwo/image/upload/v1641586064/pavelpetro_rq5bs9.jpg",
  },
  {
    id: 2,
    name: "Pinnel Apartments",
    src:
      "https://res.cloudinary.com/godwinebikwo/image/upload/v1648032402/pexels-houzlook-com-3356416_tfqkns.jpg",
  },
  {
    id: 3,
    name: "Sunny Ville",
    src:
      "https://res.cloudinary.com/godwinebikwo/image/upload/v1648033081/pexels-max-vakhtbovych-5998041_lch2no.jpg",
  },
  {
    id: 4,
    name: "The Meridien",
    src:
      "https://res.cloudinary.com/godwinebikwo/image/upload/v1644734344/Cantarutti-Tipi-1-38-I_pc1art.jpg",
  },
  {
    id: 5,
    name: "Pluto Palace",
    src:
      "https://res.cloudinary.com/godwinebikwo/image/upload/v1648032967/pexels-victoria-borodinova-3315291_ssnuna.jpg",
  },
  {
    id: 6,
    name: "Astro Bistro",
    src:
      "https://res.cloudinary.com/godwinebikwo/image/upload/v1648032856/pexels-medhat-ayad-447592_dbb179.jpg",
  },
  {
    id: 7,
    name: "Mars Café",
    src:
      "https://res.cloudinary.com/godwinebikwo/image/upload/v1627453776/jason-wang-5MG8cQbw-T8-unsplash_vb8la2.jpg",
  },
  {
    id: 8,
    name: "Zella Residence",
    src:
      "https://res.cloudinary.com/godwinebikwo/image/upload/v1648040632/spacejoy-IH7wPsjwomc-unsplash_xvdce6.jpg",
  },
];

export const Root = styled.div`
  position: relative;
  background-color: #1c1c20;
  color: rgba(255, 255, 255, 0.9);
  padding-bottom: 3vw;
`;

export const RootInner = styled.div`
  position: relative;
  padding: 5vw var(--px-2);

  .absolute {
    top: 1em;
  }

  .small-text {
    font-size: var(--size-300);
  }

  .heading {
    padding: 5vw calc(var(--px-2) * 2);
    padding-top: 8vw;

    .small-text {
      font-size: var(--size-300);
    }
  }

  @media (min-width: 1024px) {
    padding: 1vw 0;
  }

  .name {
    font-weight: 500;
    letter-spacing: var(--ls-md);
  }

  .date {
    font-size: 13px;
  }

  .btn_container {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem 0;
    margin-top: var(--spacer);
  }
`;

export const RootTitle = styled.h1`
  text-indent: 45%;
  line-height: 1.2;

  @media (min-width: 1024px) {
    text-indent: 22%;
  }
`;
