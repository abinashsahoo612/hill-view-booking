"use client";
import BreadCrumb from "../breadcrumb/breadcrumb";
import Footer from "../footer/footer";
import HeaderOne from "../header/HeaderOne";
import ScrollToTopButton from "../scroll-to-top/scrollToTop";
import Gallery from "./gallery";
import Offerarea from "./offer-area";
import Servicestwo from "./services-two";
import Team from "./team";
import SEO from "@/components/seo";

const About = () => {
  return (
    <>
      <SEO pageTitle='About Us' />
        <HeaderOne />
        <BreadCrumb title="About Us" innerTitle="About Us" bgImage="/img/about_banner.webp"/>
        <Offerarea />
        <Servicestwo />
        <Gallery />
        <div style={{ height: "180px" }}></div>
        <Footer />
        <ScrollToTopButton />
    </>
  );
};

export default About;
