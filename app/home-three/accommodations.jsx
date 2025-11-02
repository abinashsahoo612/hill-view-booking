import Link from "next/link";

const Accommodations = () => {
  return (
    <div className="accommodations__two section-padding">
      <div className="container">
        <div className="row">
          <div className="col-xl-3 col-lg-3 col-md-5 order-last order-lg-first">
            <div className="accommodations__two-left">
              <img src="/img/banner/img2.jpeg" alt="" />
              {/* <div className="accommodations__two-left-roll">
                <img
                  className="content__roll"
                  src="/img/content.png"
                  alt=""
                />
              </div> */}
            </div>
          </div>
          <div className="col-xl-5 col-lg-5 lg-mb-30">
            <div className="accommodations__two-title">
              <span className="subtitle__one">Our Hotel</span>
              <h2>Stay in our hotel</h2>
              <p>
              Hotel Hill View, we offer experiences that are both premium and personal. From grand weddings 
              to intimate gatherings, every event is crafted with care, passion, and love. As we continue to grow, 
              our commitment remains the same — to deliver quality, comfort, and meaningful connections with every visit.

              </p>
              {/* <Link className="theme-border-btn" href="/about">
                Read More<i className="fal fa-long-arrow-right"></i>
              </Link> */}
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-7 md-mb-30">
            <div className="accommodations__two-right">
              <img src="/img/banner/img3.jpeg" alt="" />
              {/* <div className="accommodations__two-right-bottom"> */}
              {/* <div className="accommodations__two-right-bottom-signature">
                  <img src="/img/bg/signature.png" alt="" />
                </div> */}
              {/* <div className="accommodations__two-right-bottom-author">
                  <h5>David Beckham</h5>
                  <span>Founder CEO</span>
                </div> */}
              {/* </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accommodations;
