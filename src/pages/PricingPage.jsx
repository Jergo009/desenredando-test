import React from "react";
import PageHeader from "../component/PageHeader";
import Pricing from "../component/Pricing";
import Testimonials from "../component/Testimonials";
import BlogOne from "../component/BlogOne";

const PricingPage = () => {
  const breadcrumbs = [
    { label: "Inicio", link: "/" },
    { label: <i className="fa-solid fa-angle-right"></i>, link: null },
    { label: "Tipos de Sesiones", link: null },
  ];
  return (
    <>
      <PageHeader title="Tipos de Sesiones" breadcrumbs={breadcrumbs}></PageHeader>
      <Pricing></Pricing>
      {/* <Testimonials addClass="inner_testimonails"></Testimonials>
      <BlogOne></BlogOne> */}
    </>
  );
};

export default PricingPage;
