// Import necessary components and icons
import footerOne from "@/components/data/footerOne";
import Image from "next/image";
import Link from "next/link";
import Social from "../socials/page";

const {
  logo,
  title_1,
  description,
  title_2,
  widgetMenus,
  title_3,
  title_4,
  office_des,
  officeInfos,
} = footerOne;

const pageslink = [
  "Room Cleaning",
  "Car Parking",
  "Swimming pool",
  "Fitness Gym",
];

// Define the Footer component
export default function Footer() {
  return (
    <div className="footer__area">
      <div className="container">
        <div className="row flex justify-between">
          <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 sm-mb-30">
            <div className="footer__area-widget">
              <div className="footer__area-widget-about">
                <div className="footer__area-widget-about-logo">
                  {/* Company logo */}
                  <Link href="/">
                    <img src="/logo-1.png" alt="logo" height={"30px"}/>
                  </Link>
                </div>
                {/* Company description */}
                <p>
                  Madikeri is a hill town in southern India. Framed by the Western Ghats mountain range, it’s known for the Raja’s Seat, a simple monument overlooking forests and rice paddies.
                </p>
                <div className="footer__area-widget-about-social">
                  <Social />
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 lg-mb-30">
            <div className="footer__area-widget">
              {/* Contact information */}
              <h5>Information</h5>
              <div className="footer__area-widget-contact">
                {/* Address */}
                {footerOne.officeInfos.map((item, index) => (
                  <div className="footer__area-widget-contact-item" key={index}>
                    <div className="footer__area-widget-contact-item-icon">
                      {item.icon}
                    </div>
                    <div className="footer__area-widget-contact-item-content">
                      {/* Address details */}
                      <span>
                        <Link href={item.link}>{item.info}</Link>
                      </span>
                    </div>
                  </div>
                ))}
                <div className="footer__area-widget-contact-item">
                  <div className="footer__area-widget-contact-item-icon">
                    <i className="fas fa-sign-in-alt"></i>
                  </div>
                  <div className="footer__area-widget-contact-item-content">
                    {/* Address details */}
                    <span>
                      <Link href="#">Check-In 12 PM</Link>
                    </span>
                  </div>
                </div>
                <div className="footer__area-widget-contact-item">
                  <div className="footer__area-widget-contact-item-icon">
                    <i className="fas fa-sign-out-alt"></i>
                  </div>
                  <div className="footer__area-widget-contact-item-content">
                    {/* Address details */}
                    <span>
                      <Link href="#">Check-Out 12 PM</Link>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-2 col-lg-2 col-md-5 col-sm-4 sm-mb-30">
            <div className="footer__area-widget">
              {/* Page links */}
              <h5>Pages Links</h5>
              <div className="footer__area-widget-menu">
                <ul>
                  {footerOne.widgetMenus.map((item, index) => (
                    <li key={index}>
                      <Link href={item.link}>
                        <i className="fal fa-angle-double-right"></i>
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-7 col-sm-6">
            <div className="footer__two-widget">
              <h5 style={{color: '#CCCCCC'}}>Tourist Spots</h5>
              <div className="footer__two-widget-hours">
                <p style={{color: '#CCCCCC'}}>
                  Raja seat<span>1.5 K.M.</span>
                </p>
                <p style={{color: '#CCCCCC'}}>
                  Abby falls<span>8 k.M.</span>
                </p>
                <p style={{color: '#CCCCCC'}}>
                  Rajas Tomb<span>1.0 K.M.</span>
                </p>
                <p style={{color: '#CCCCCC'}}>
                  Fort<span>1.0 K.M</span>
                </p>
                <p style={{color: '#CCCCCC'}}>
                  Mandalpatti<span>18 K.M</span>
                </p>
                <p style={{color: '#CCCCCC'}}>
                  Gen. ThimmaiaH Museum<span>1.5 K.M</span>
                </p>
                {/* <p style={{color: '#CCCCCC'}}>
                  Dubare Elephant Camp<span>36 K.M</span>
                </p>
                <p style={{color: '#CCCCCC'}}>
                  Nisargadhama<span>28 K.M</span>
                </p>
                <p style={{color: '#CCCCCC'}}>
                  Harangi Dam<span>33 K.M</span>
                </p>
                <p style={{color: '#CCCCCC'}}>
                  Iruppu Falls<span>74 K.M</span>
                </p>
                <p style={{color: '#CCCCCC'}}>
                  Nagarhole National Park<span>79 K.M</span>
                </p>
                <p style={{color: '#CCCCCC'}}>
                  Bhagamandala<span>79 K.M</span>
                </p>
                <p style={{color: '#CCCCCC'}}>
                  Talacauvery<span>39 K.M</span>
                </p> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright__area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-6 col-lg-6 col-md-7 md-mb-10">
              <div className="copyright__area-left md-t-center">
                  <p>Copyright © 2025 Powered by<Link href="https://dertzinfotech.com"> Dertz</Link></p>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-5">
              <div className="copyright__area-right t-right md-t-center">
                {/* Footer links */}
                <ul>
                  <li>
                    <a href="#">FAQ</a>
                  </li>
                  <li>
                    <a href="#">Terms of Use</a>
                  </li>
                  <li>
                    <a href="#">Privacy Policy</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
