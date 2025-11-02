"use client"
import SEO from "@/components/seo";
import Footer from "@/app/footer/footer";
import ScrollToTopButton from "@/app/scroll-to-top/scrollToTop";
import Accommodations from "@/app/home-three/accommodations";
import Banner from "@/app/home-three/banner";
import Callarea from "@/app/home-three/call-area";
import Deluxe from "@/app/deluxe/deluxe1";
import Placearea from "@/app/home-three/place-area";
import Roomarea from "@/app/home-three/room-area";
import Services from "@/app/home-three/services";
import MadMan from "./home-three/madMan";
import HeaderOne from "./header/HeaderOne";
import BannerCta from "./banner/banner-cta";

const Home3 = () => {
  return (
    <>
      <SEO pageTitle='Home Three' />
        <HeaderOne />
        <Banner />
        <BannerCta />
        <Deluxe />
        <MadMan/>
        <Callarea />
        <Accommodations />
        <Services />
        <Roomarea />
        {/* <Teamarea /> */}
        {/* <Bookingarea /> */}
        <Placearea />
        {/* <Bandarea /> */}
        {/* <Testimonial /> */}
        <Footer />
        <ScrollToTopButton />
    </>
  );
};

export default Home3;
