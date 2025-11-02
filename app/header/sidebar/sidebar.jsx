import Social from '@/app/socials/page';
import Link from 'next/link';
import React from 'react';


const SideBar = ({ isOpen, setIsOpen }) => {
    return (
        <>
            <div className={`header__area-menubar-right-sidebar-popup three ${isOpen ? 'active' : ''}`}>
                            <div className="sidebar-close-btn" onClick={() => setIsOpen(false)}><i className="fal fa-times"></i></div>
                            <div className="header__area-menubar-right-sidebar-popup-logo">
							<Link href="/"><img src="/logo-1.png" alt="logo" /></Link>
                            </div>
                            <p>Madikeri is a hill town in southern India. Framed by the Western Ghats mountain range, it’s known for the Raja’s Seat, a simple monument overlooking forests and rice paddies. In the center, the 17th-century Madikeri Fort features 2 stone elephants at the entrance. Nearby, the domed Omkareshwar Temple is dedicated to the Hindu deity Shiva. To the northwest, cascading Abbey Falls is surrounded by spice plantations. </p>
							<div className="header__area-menubar-right-box-sidebar-popup-image">
								<img src="/img/banner/img2.jpeg" alt="" />
							</div>
							<div className="header__area-menubar-right-box-sidebar-popup-contact">
								<h4 className="mb-30">Contact Info</h4>
								<div className="header__area-menubar-right-box-sidebar-popup-contact-item">
									<div className="header__area-menubar-right-box-sidebar-popup-contact-item-icon">
										<i className="fal fa-phone-alt"></i>
									</div>
									<div className="header__area-menubar-right-box-sidebar-popup-contact-item-content">
										<span>Call Now</span>
										<h6><Link href="tel:+918310815401">+91-8310815401/+91-9448422334</Link></h6>
									</div>
								</div>
								<div className="header__area-menubar-right-box-sidebar-popup-contact-item">
									<div className="header__area-menubar-right-box-sidebar-popup-contact-item-icon">
										<img src="img/icon/whatsapp.png" style={{height: "45px",marginLeft: "-6px"}}/>
									</div>
									<div className="header__area-menubar-right-box-sidebar-popup-contact-item-content">
										<span>Call Now</span>
										<h6><Link href="#">+91-9448422334</Link></h6>
									</div>
								</div>
								<div className="header__area-menubar-right-box-sidebar-popup-contact-item">
									<div className="header__area-menubar-right-box-sidebar-popup-contact-item-icon">
										<i className="fal fa-envelope"></i>
									</div>
									<div className="header__area-menubar-right-box-sidebar-popup-contact-item-content">
										<span>Quick Email</span>
										<h6><Link href="mailto:hillview@gmail.com">hillview@gmail.com</Link></h6>
									</div>
								</div>
								<div className="header__area-menubar-right-box-sidebar-popup-contact-item">
									<div className="header__area-menubar-right-box-sidebar-popup-contact-item-icon">
										<i className="fal fa-map-marker-alt"></i>
									</div>
									<div className="header__area-menubar-right-box-sidebar-popup-contact-item-content">
										<span>Office Address</span>
										<h6><Link href="#">CPGP+28Q Hotel Hillview, Block No 7 ,SY No 17, Hill Rd, Mahadevpet, Madikeri, Karnataka 571201</Link></h6>
									</div>
								</div>
							</div>
							<div className="header__area-menubar-right-box-sidebar-popup-social">
								<Social />							
							</div>
                        </div>
            <div className={`sidebar-overlay ${isOpen ? 'show' : ''}`}></div>
        </>
    );
};

export default SideBar;