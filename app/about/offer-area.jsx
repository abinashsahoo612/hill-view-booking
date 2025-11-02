"use client";
import Image from "next/image";
import Offers from "../../public/img/banner/img2.jpeg";

const Offerarea = () => {
  return (
    <>
      <div className="offers__area section-padding">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="offers__area-title">
                <span className="subtitle__one">About Us</span>
                <h2>Welcome to Hotel Hill View, Madikeri</h2>
                  <p>
                    Nestled in the heart of Coorg’s main city, Madikeri often called the “Kashmir of Karnataka” and the “Scotland of India” Hotel Hill View offers the perfect blend of comfort and convenience. Situated at an altitude of 1,170 meters in the scenic Western Ghats, Coorg is renowned for its tropical highland climate and breathtaking landscapes, making it one of India’s most loved hill stations.Our hotel is ideally located just 500 meters from the KSRTC bus stand, with 5 to 6 popular tourist attractions within a short 1 to 5 km radius. Overlooking the picturesque hills and vibrant town, Hotel Hill View promises a memorable stay surrounded by nature’s beauty and cultural charm.
                  </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-12">
              <div className="offers__area-image">
                <Image alt="" layout="responsive" src={Offers} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Offerarea;
