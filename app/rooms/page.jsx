"use client";

import roomStyleAllBlogs from "@/components/data/room-style-all-blogs";
import Image from "next/image";
import Footer from "../footer/footer";
import ScrollToTopButton from "../scroll-to-top/scrollToTop";
import BreadCrumb from "../breadcrumb/breadcrumb";
import Link from "next/link";
import HeaderOne from "../header/HeaderOne";
import SEO from "@/components/seo";

import { useEffect, useState } from "react";

const Roomstyle = () => {
  const [rooms, setRooms] = useState([]);

  const fetchRooms = async () => {
    const res = await fetch("/api/rooms");
    const data = await res.json();
    setRooms(data);
  };

  useEffect(() => {
    fetchRooms();
  }, []);

  return (
    <>
      <SEO pageTitle="Rooms" />
      <HeaderOne />
      <BreadCrumb
        title="Rooms"
        innerTitle="Rooms"
        bgImage="/img/banner/img2.jpeg"
      />
      <div className="room__area section-padding">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 order-first order-lg-1 lg-mb-30">
              <div className="row justify-content-space-between">
              {Object.entries(rooms).map(([key, item]) => (
                <div key={key} className="col-xl-4 col-md-4 mb-30">
                  {/* <Link href={`/room-details/${item.title.replace(/\s+/g, '-').toLowerCase()}`}> */}
                  <Link href="#">
                    <div className="flip-card">
                      <div className="flip-card-inner">
                        
                        {/* Front side (Image) */}
                        <div className="flip-card-front">
                          <div className="front-image">
                          <img
                            src={item.bannerImage}
                            alt={item.title}
                            className="card-img-top"
                            style={{ height: "100%", objectFit: "cover" }}
                          />
                          </div>
                          <div className="front-info">
                            <div className="deluxe__two-item-content content">
                              {item.price && <span>Rs {item.price}+TAX/Night</span>}
                              <h4>{item.title}</h4>
                              <p>{item.short_desc}</p>
                              {/* <div className="deluxe__two-item-content-meta content">
                                <ul>
                                  {item.bed && (
                                    <li>
                                      <i className="fal fa-bed-alt"></i> ({item.bed}) bed's
                                    </li>
                                  )}
                                  {item.guest && (
                                    <li>
                                      <i className="fal fa-users"></i> ({item.guest}) Max Guest's
                                    </li>
                                  )}
                                  {item.area && (
                                    <li>
                                      <i className="fal fa-warehouse-alt"></i> ({item.area}) Area
                                    </li>
                                  )}
                                  {item.maxCapacity && (
                                    <li>
                                      <i className="fal fa-users"></i> ({item.maxCapacity}) Max Capacity
                                    </li>
                                  )}
                                </ul>
                              </div> */}
                            </div>
                          </div>
                        </div>

                        {/* Back side (Info on hover) */}
                        <div className="flip-card-back">
                          <div className="deluxe__two-item-content content">
                            {/* {item.price && <span>Rs {item.price}/Night</span>} */}
                            {/* <h4>{item.title}</h4> */}
                            <p>{item.description}</p>
                            <div className="deluxe__two-item-content-meta content">
                              <ul>
                                {item.bed && (
                                  <ul>
                                    {item.bed.includes('&')
                                      ? item.bed.split('&').map((bedType, index) => (
                                          <li key={index}>
                                            <i className="fal fa-bed-alt"></i> {bedType.trim()}
                                          </li>
                                        ))
                                      : (
                                          <li>
                                            <i className="fal fa-bed-alt"></i> {item.bed}
                                          </li>
                                        )}
                                  </ul>
                                )}

                                {item.guest && (
                                  <li>
                                    <i className="fal fa-users"></i> ({item.guest}) Guest
                                  </li>
                                )}
                                {item.area && (
                                  <li>
                                    <i className="fal fa-warehouse-alt"></i> ({item.area}) Area
                                  </li>
                                )}
                                {item.maxguest && (
                                  <li>
                                    <i className="fal fa-users"></i> ({item.maxguest}) Max Guests
                                  </li>
                                )}
                              </ul>
                            </div>
                          </div>
                        </div>
                        
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>

            </div>
          </div>
        </div>
      </div>
      <Footer />
      <ScrollToTopButton />
    </>
  );
};

export default Roomstyle;
