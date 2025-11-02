import SEO from "@/components/seo";
import BreadCrumb from "../breadcrumb/breadcrumb";
import Footer from "../footer/footer";
import ScrollToTopButton from "../scroll-to-top/scrollToTop";
import Contactcontainer from "./contact-container";
import HeaderFour from "../header/headerFour";
import HeaderOne from "../header/HeaderOne";

const Contact = () => {
  return (
    <>
      <SEO pageTitle="Contact Us" />
        <HeaderOne />
        <BreadCrumb title="Contact Us" innerTitle="Contact Us" bgImage="/img/contact_banner.jpg"/>
        <Contactcontainer />
        <Footer />
        <ScrollToTopButton />
    </>
  );
};

export default Contact;
