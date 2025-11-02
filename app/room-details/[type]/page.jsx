import SEO from "@/components/seo";
import BreadCrumb from "../../breadcrumb/breadcrumb";
import Footer from "../../footer/footer";
import HeaderOne from "../../header/HeaderOne";
import ScrollToTopButton from "../../scroll-to-top/scrollToTop";
import Roomdetailscontainer from "../room-details-container";
import roomStyleAllBlogs from "@/components/data/room-style-all-blogs";

const Roomdetails = async ({params}) => {
  const { type } = await params
  return (
    <>
      <SEO pageTitle='Room Details' />
        <HeaderOne />
        <BreadCrumb title={roomStyleAllBlogs[type].title} innerTitle='Room Details' bgImage={roomStyleAllBlogs[type].bannerImage} />
        <Roomdetailscontainer type={type} />
        <Footer />
        <ScrollToTopButton />
    </>
  );
};

export default Roomdetails;
