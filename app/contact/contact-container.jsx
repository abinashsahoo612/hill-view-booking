import Social from "../socials/page";

const Contactcontainer = () => {
  return (
    <>
      <div className="contact__area section-padding pb-2">
        <div className="container">
          <div className="row">
            <div className="col-xl-5 col-lg-5 lg-mb-30">
              <div className="contact__area-title">
                <h3 className="mb-25">Get In Touch</h3>
                <p>
                  Madikeri is a hill town in southern India. Framed by the Western Ghats mountain range, it’s known for the Raja’s Seat, a simple monument overlooking forests and rice paddies. In the center, the 17th-century Madikeri Fort features 2 stone elephants at the entrance. Nearby, the domed Omkareshwar Temple is dedicated to the Hindu deity Shiva. To the northwest, cascading Abbey Falls is surrounded by spice plantations. 
                </p>
              </div>
              <div className="contact__area-info">
                <div className="contact__area-info-item">
                  <div className="contact__area-info-item-icon">
                    <i className="fal fa-phone-alt"></i>
                  </div>
                  <div className="contact__area-info-item-content">
                    <span>Emergency Help</span>
                    <h6>
                      <a href="tel:+918310815401">+91-8310815401</a><br/>
                    </h6>
                  </div>
                </div>
                <div className="contact__area-info-item">
                  <div className="contact__area-info-item-icon">
                    <i className="fab fa-whatsapp"></i>
                  </div>
                  <div className="contact__area-info-item-content">
                    <span>Whatsapp Help</span>
                    <h6>
                      <a href="#">+91-9448422334</a>
                    </h6>
                  </div>
                </div>
                <div className="contact__area-info-item">
                  <div className="contact__area-info-item-icon">
                    <i className="fal fa-envelope"></i>
                  </div>
                  <div className="contact__area-info-item-content">
                    <span>Quick Email</span>
                    <h6>
                      <a href="mailto:hillview@gmail.com">hillview@gmail.com</a>
                    </h6>
                  </div>
                </div>
                <div className="contact__area-info-item">
                  <div className="contact__area-info-item-icon">
                    <i className="fal fa-map-marker-alt"></i>
                  </div>
                  <div className="contact__area-info-item-content">
                    <span>Office Address</span>
                    <h6>
                      <a href="#">CPGP+28Q Hotel Hillview, Block No 7 ,SY No 17, Hill Rd, Mahadevpet, Madikeri, Karnataka 571201</a>
                    </h6>
                  </div>
                </div>
              </div>
              <div className="contact__area-social">
                <Social />
              </div>
            </div>
            <div className="col-xl-7 col-lg-7">
              <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d62340.643411166704!2d75.6861877!3d12.430374!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba5000ac75bdf59%3A0x1dee65666d8b9880!2sHill%20View!5e0!3m2!1sen!2sin!4v1756017249550!5m2!1sen!2sin" width="600" height="450" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contactcontainer;
