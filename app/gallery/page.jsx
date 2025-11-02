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
        <BreadCrumb title="Gallery" innerTitle="Gallery" bgImage="/img/gallery_banner.jpg"/>
        {/* <Offerarea /> */}
        {/* <Servicestwo />
        <Gallery /> */}
        <Team />
        <Footer />
        <ScrollToTopButton />
    </>
  );
};

export default About;
