import React from "react";
import PageHeader from "../component/PageHeader";
import AbouUsTwo from "../component/AbouUsTwo";
import ChoseTwo from "../component/ChoseTwo";
import Working from "../component/Working";
import Blog from "../component/BlogOne";

const AboutPage = () => {
  const breadcrumbs = [
    { label: "Inicio", link: "/" },
    { label: <i className="fa-solid fa-angle-right"></i>, link: null },
    { label: "Quines somos", link: null },
  ];
  return (
    <>
      <PageHeader title="Quienes Somos" breadcrumbs={breadcrumbs}></PageHeader>
      <AbouUsTwo></AbouUsTwo>
      <ChoseTwo addClass="inner_chose"></ChoseTwo>
      <Working></Working>
      <Blog></Blog>
    </>
  );
};

export default AboutPage;
