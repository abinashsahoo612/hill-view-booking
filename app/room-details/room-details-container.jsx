"use client";

import Sidebar from "./sidebar";
import roomStyleAllBlogs from "@/components/data/room-style-all-blogs";

const faqData = {
  faqOne: [
    {
      id: "collapseOnePage",
      class: "icon page collapsed",
      class2: "faq__area-item-body collapse",
      title: "Do you pay before or after booking a hotel?",
      des: "Payment policies vary by hotel. At Baba Resort, guests are required to pay at the time of booking to confirm their reservation. This ensures a smooth check-in process and guarantees room availability. However, for select packages, we may offer flexible payment options.",
    },
    {
      id: "collapseTwoPage",
      class: "icon page",
      class2: "faq__area-item-body collapse show",
      title: "What documents are needed for hotel booking?",
      des: "Guests are required to present a valid government-issued photo ID (such as Aadhar card, Passport, Voter ID, or Driver’s License) at the time of check-in. International travelers must provide a valid passport and visa. A booking confirmation (digital or printed) is also recommended.",
    },
    {
      id: "collapseThreePage",
      class: "icon page collapsed",
      class2: "faq__area-item-body collapse",
      title: "Do hotels charge your card before you check in?",
      des: "Yes, most hotels, including Baba Resort, process payment at the time of booking to secure your stay. In case of flexible or refundable bookings, the card may be pre-authorized and charged closer to your check-in date. Please refer to your booking terms for exact policy details.",
    },
  ],  
};
const { faqOne } = faqData;

const Roomdetailscontainer = ({type}) => {
  const roomDetail  = roomStyleAllBlogs[type];
  return (
    <>
      <div className="room__details section-padding">
        <div className="container">
          <div className="row">
            <div className="col-xl-9 col-lg-8">
              <div className="room__details-right">
                <div className="room__details-right-content">
                  <p className="mb-25">
                    {roomDetail.description}
                  </p>
                  <div className="row mt-35 mb-35">
                    <div className="col-sm-6 sm-mb-30">
                      <img
                        className="img__full"
                        src={roomDetail.image1}
                        alt=""
                      />
                    </div>
                    <div className="col-sm-6">
                      <img
                        className="img__full"
                        src={roomDetail.image2}
                        alt=""
                      />
                    </div>
                  </div>
                  {roomDetail.checkinInstructions && (
                    <>
                      <h3 className="mb-25">Special check-in instructions</h3>

                      <p className="m-0">
                        {roomDetail.checkinInstructions}
                      </p>
                    </>
                  )}
                  {roomDetail.reason && (
                    <div className="row mt-35 mb-35">
                      <h3 className="mb-25">Why choose {roomDetail.title}?</h3>

                      <p className="m-0">
                        {roomDetail.reason}
                      </p>
                    </div>
                  )}
                </div>
                {roomDetail.amenities && (
                <div className="room__details-right-list">
                  <h3>Amenities & Facilities</h3>
                  <div className="row mt-35">
                    {roomDetail.amenities.map((item,key) => {
                      return (
                        <div key={key} className="col-md-4 col-sm-6 mb-35">
                          <div className="room__details-right-list-item">
                            <div className="room__details-right-list-item-icon">
                              <img src={item.image} alt="" />
                            </div>
                            <div className="room__details-right-list-item-title">
                              <h6>{item.title}</h6>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                    {/* <div className="col-md-4 col-sm-6 mb-35">
                      <div className="room__details-right-list-item">
                        <div className="room__details-right-list-item-icon">
                          <img src="/img/icon/list-1.png" alt="" />
                        </div>
                        <div className="room__details-right-list-item-title">
                          <h6>Title</h6>
                        </div>
                      </div>
                    </div> */}
                    {/* <div className="col-md-4 col-sm-6 sm-mb-35">
                      <div className="room__details-right-list-item">
                        <div className="room__details-right-list-item-icon">
                          <img src="/img/icon/list-2.png" alt="" />
                        </div>
                        <div className="room__details-right-list-item-title">
                          <h6>Car Parking</h6>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 col-sm-6 sm-mb-35">
                      <div className="room__details-right-list-item">
                        <div className="room__details-right-list-item-icon">
                          <img src="/img/icon/list-3.png" alt="" />
                        </div>
                        <div className="room__details-right-list-item-title">
                          <h6>Swimming pool</h6>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 col-sm-6 mb-35">
                      <div className="room__details-right-list-item">
                        <div className="room__details-right-list-item-icon">
                          <img src="/img/icon/list-4.png" alt="" />
                        </div>
                        <div className="room__details-right-list-item-title">
                          <h6>Pick Up & Drop</h6>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 col-sm-6 md-mb-35">
                      <div className="room__details-right-list-item">
                        <div className="room__details-right-list-item-icon">
                          <img src="/img/icon/list-5.png" alt="" />
                        </div>
                        <div className="room__details-right-list-item-title">
                          <h6>Spa Center</h6>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 col-sm-6 sm-mb-35">
                      <div className="room__details-right-list-item">
                        <div className="room__details-right-list-item-icon">
                          <img src="/img/icon/list-6.png" alt="" />
                        </div>
                        <div className="room__details-right-list-item-title">
                          <h6>Smart Key</h6>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 col-sm-6 md-mb-35">
                      <div className="room__details-right-list-item">
                        <div className="room__details-right-list-item-icon">
                          <img src="/img/icon/list-7.png" alt="" />
                        </div>
                        <div className="room__details-right-list-item-title">
                          <h6>Home Wifi</h6>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 col-sm-6 sm-mb-35">
                      <div className="room__details-right-list-item">
                        <div className="room__details-right-list-item-icon">
                          <img src="/img/icon/list-8.png" alt="" />
                        </div>
                        <div className="room__details-right-list-item-title">
                          <h6>Beakfist</h6>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 col-sm-6">
                      <div className="room__details-right-list-item">
                        <div className="room__details-right-list-item-icon">
                          <img src="/img/icon/list-9.png" alt="" />
                        </div>
                        <div className="room__details-right-list-item-title">
                          <h6>Fitness Gym</h6>
                        </div>
                      </div>
                    </div> */}
                  </div>
                </div>
                )}
                {/* <div className="room__details-right-faq mt-50">
                  <div id="accordionExamplePage">
                    {faqOne?.map((data, id) => (
                      <div className="faq__area-item" key={id}>
                        <h5
                          className={data.class}
                          data-bs-toggle="collapse"
                          data-bs-target={`#${data.id}`}
                        >
                          {data.title}
                        </h5>
                        <div
                          id={data.id}
                          className={data.class2}
                          data-bs-parent="#accordionExamplePage"
                        >
                          <p>{data.des}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div> */}
              </div>
            </div>
            <Sidebar type={type} />

          </div>
        </div>
      </div>
    </>
  );
};

export default Roomdetailscontainer;
