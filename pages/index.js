import React from "react";
import Layout from "@components/Layout";
import Hero from "@components/Hero";
import One from "@components/One";
import Two from "@components/Two";
import Three from "@components/Three";
import Four from "@components/Four";
import Carousel from "@components/Carousel";
import Five from "@components/Five";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <One />
      <Two />
      <Three />
      <Four />
      <Carousel />
      <Five />
    </Layout>
  );
}
