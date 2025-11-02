"use client";
import BreadCrumb from "../breadcrumb/breadcrumb";
import Footer from "../footer/footer";
import HeaderOne from "../header/HeaderOne";
import ScrollToTopButton from "../scroll-to-top/scrollToTop";
import RoomsAdmin from "./rooms";

const Bookings = () => {
  return (
    <>
      <HeaderOne />
      <BreadCrumb title="Admin" innerTitle="Admin" bgImage="/img/about_banner.webp"/>
      <RoomsAdmin/>
      <Footer />
      <ScrollToTopButton />
    </>
  );
};

export default Bookings;
