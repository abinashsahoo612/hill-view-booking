"use client";
import React from "react";
import Footer from "../footer/footer";
import BreadCrumb from "../breadcrumb/breadcrumb";
import ServicesDetails from "./service-details";
import HeaderOne from "../header/HeaderOne";
import ScrollToTopButton from "../scroll-to-top/scrollToTop";
import SEO from "@/components/seo";

const Servicedetails = () => {
  return (
    <>
      <SEO pageTitle="Bar & Restaurant" />
        <HeaderOne />
        <BreadCrumb title="Coming Soon" innerTitle="Restaurnat" bgImage="/img/restaurant_banner.jpeg"/>
        <ServicesDetails />
        <Footer />
        <ScrollToTopButton />
    </>
  );
};

export default Servicedetails;
