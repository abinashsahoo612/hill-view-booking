"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, EffectFade, Autoplay } from "swiper/modules";
const bannerData = {
  bannerItem: [
    {
      subtitle: "Welcome to Hill View",
      title: "Your unforgettable journey begins here.",
      image: "/img/banner/img1.jpeg",
    },
    {
      subtitle: "Welcome to Hill View",
      title: "Refresh, relax, and rejuvenate.",
      image: "/img/banner/img2.jpg",
    },
    // {
    //   subtitle: "Welcome to Hill View",
    //   title: "Your unforgettable journey begins here.",
    //   image: "/img/banner/image-3.webp",
    // },
    // {
    //   subtitle: "Welcome to Hill View",
    //   title: "Your unforgettable journey begins here.",
    //   image: "/img/banner/image-4.webp",
    // },
    // {
    //   subtitle: "Welcome to Hill View",
    //   title: "Your unforgettable journey begins here.",
    //   image: "/img/banner/image-5.webp",
    // },
    // {
    //   subtitle: "Indulge in Luxury",
    //   title: "Unwind in ultimate comfort.",
    //   image: "/img/banner-2.jpg",
    // },
    // {
    //   subtitle: "Dive into Serenity",
    //   title: "Refresh, relax, and rejuvenate.",
    //   image: "/img/banner-3.jpg",
    // },
    // {
    //   subtitle: "Savor the Moment",
    //   title: "Crafted drinks, perfect ambiance.",
    //   image: "/img/banner-4.jpg",
    // },
  ],
};
const { bannerItem } = bannerData;
const Banner = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <div className="banner__two">
      <Swiper
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 5000,
        }}
        effect={"fade"}
        loop={true}
        modules={[EffectFade, Pagination, Autoplay]}
      >
        {bannerItem?.map((data, id) => (
          <SwiperSlide className="banner__two-area" key={id}>
            <div
              className="banner__two-area-image"
              style={{ backgroundImage: `url(${data.image})` }}
            ></div>
            <div className="container">
              <div className="row align-items-center">
                <div className="col-xl-12 col-lg-12">
                  <div className="banner__two-content">
                    <span>{data.subtitle}</span>
                    <h1>{data.title}</h1>
                    {/* <div className="banner__two-content-button">
                      <Link className="theme-btn" href="/about">
                        Read More<i className="fal fa-long-arrow-right"></i>
                      </Link>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="banner__two-video custom__container">
        <div className="banner__two-video-right">
          <span>
            <a href="#deluxe">
              <i className="fal fa-long-arrow-left"></i>Scroll Down
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Banner;
