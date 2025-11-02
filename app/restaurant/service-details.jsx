import Link from "next/link";
const faqData = {
    faqOne: [
        {id:'collapseOnePage',class: 'icon page collapsed',class2: 'faq__area-item-body collapse',title:'Do you pay before or after booking a hotel ?', des: 'Praesent non ullamcorper ligula. Proin a mi vitae massa lacinia sollicitudin eget eu ante. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque consectetur rhoncus lobortis. Curabitur sit amet velit sagittis, pellentesque diam euismod, faucibus quam. Cras non rhoncus ipsum. Quisque mattis arcu metus, a fermentum justo semper in.'},
        {id:'collapseTwoPage',class: 'icon page',class2: 'faq__area-item-body collapse show',title:'What documents are needed for hotel booking ?', des: 'Praesent non ullamcorper ligula. Proin a mi vitae massa lacinia sollicitudin eget eu ante. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque consectetur rhoncus lobortis. Curabitur sit amet velit sagittis, pellentesque diam euismod, faucibus quam. Cras non rhoncus ipsum. Quisque mattis arcu metus, a fermentum justo semper in.'},
        {id:'collapseThreePage',class: 'icon page collapsed',class2: 'faq__area-item-body collapse',title:'Do hotels charge your card before you check ?', des: 'Praesent non ullamcorper ligula. Proin a mi vitae massa lacinia sollicitudin eget eu ante. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque consectetur rhoncus lobortis. Curabitur sit amet velit sagittis, pellentesque diam euismod, faucibus quam. Cras non rhoncus ipsum. Quisque mattis arcu metus, a fermentum justo semper in.'},
    ],
}
const { faqOne } = faqData;

const ServicesDetails = () => {
  return (
    <div className="services__details section-padding">
      <div className="container">
        <div className="row">
          {/* <div className="col-xxl-3 col-xl-4 col-lg-4 lg-mb-30">
            <div className="all__sidebar">
              <div className="all__sidebar-item">
                <h5>Category</h5>
                <div className="all__sidebar-item-category">
                  <ul>
                    <li>
                      <Link href="/services-details">
                        <i className="far fa-angle-double-right"></i>Small Suite
                        <span>(06)</span>
                      </Link>
                    </li>
                    <li>
                      <Link className="active" href="/services-details">
                        <i className="far fa-angle-double-right"></i>Luxury Room
                        <span>(08)</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/services-details">
                        <i className="far fa-angle-double-right"></i>Single
                        <span>(05)</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/services-details">
                        <i className="far fa-angle-double-right"></i>Family
                        <span>(09)</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/services-details">
                        <i className="far fa-angle-double-right"></i>Double Room
                        <span>(03)</span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div
                className="all__sidebar-item-help mt-30"
                style={{ backgroundImage: `url('/img/hotel/hotel-9.jpg')` }}
              >
                <div className="all__sidebar-item-help-icon">
                  <i className="fal fa-phone-alt"></i>
                </div>
                <h5> Easy solutions to your home beauty</h5>
                <div className="all__sidebar-item-help-contact">
                  <div className="all__sidebar-item-help-contact-content">
                    <span>Quick Help</span>
                    <h6>
                      <Link href="tel:+125(895)658568">+125 (895) 658 568</Link>
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
          <div className="col-12">
            <div className="services__details-left">
              <div className="services__details-left-image mb-30">
                <img src="/img/bar-kitchen/poolside.jpg" alt="" />
              </div>
              <div className="services__details-left-content">
                <h2 className="mb-30">Restaurant</h2>
                <p className="mb-0">
                  Get ready to savor a feast fit for royalty at Hill View Restaurant, the upcoming heart of our luxury hotel. Very soon, we’ll open the doors to a world where flavors, aromas, and experiences blend in perfect harmony. In the meantime, as we are still renovating and providing room service, meals are thoughtfully arranged from trusted outside partners to ensure your dining experience remains delightful. Once fully opened, we will upgrade other details to bring you an exceptional culinary journey.
                </p>
                {/* uncomment when restaurnat is opened */}
                {/* <span>
                  Whether you're in the mood for a casual bite or a refined dinner, our culinary team brings innovation and flavor to every plate. The stylish ambiance and attentive service make it the perfect spot for social gatherings, celebrations, or a relaxed evening.
                </span>
                <p>
                  Step into a space where elegance meets comfort. With thoughtfully designed interiors and a welcoming atmosphere, our venue provides the perfect backdrop for every occasion — whether it’s a quiet dinner, a festive gathering, or a business meet-up.
                </p>
                <p>
                  Enjoy seamless service, comfortable seating, and a relaxed environment designed to enhance your dining experience. Every element, from lighting to layout, is curated to ensure guests feel at ease and fully immersed in the moment. Our goal is not just to serve meals, but to create memorable experiences through ambiance, taste, and hospitality.
                </p> */}
                {/* uncomment when restaurnat is opened */}
                {/* <div className="row align-items-center mt-35 mb-35">
                  <div className="col-xl-6 col-lg-12 xl-mb-30">
                    <img
                      className="img__full"
                      src="/img/bar/bar2.jpg"
                      alt=""
                    />
                  </div>
                  <div className="col-xl-6 col-lg-12">
                    <h3 className="mb-20">Customer Benefits</h3>
                    <p className="m-30">
                      At our hotel, we are dedicated to providing a comfortable, seamless, and memorable stay. Here’s what our guests enjoy:
                    </p>
                    <div className="services__details-left-content-list">
                      <p>
                        <i className="fas fa-arrow-circle-right"></i>
                        Personalized Hospitality: Thoughtful service tailored to your individual needs, ensuring a welcoming and stress-free experience.
                      </p>
                      <p>
                        <i className="fas fa-arrow-circle-right"></i>Trusted by Travelers Worldwide: Whether you're visiting for business or leisure, our reputation for quality has made us a preferred choice.
                      </p>
                      <p>
                        <i className="fas fa-arrow-circle-right"></i>Comprehensive Amenities: From luxurious rooms and fine dining to event spaces and wellness facilities, everything you need is under one roof.
                      </p>
                      <p>
                        <i className="fas fa-arrow-circle-right"></i>Modern Comforts: Enjoy high-speed Wi-Fi, smart room controls, and state-of-the-art conveniences throughout your stay.
                      </p>
                       <p>
                        <i className="fas fa-arrow-circle-right"></i>Consistent Quality & Cleanliness: We maintain high standards in hygiene, safety, and service — because your peace of mind matters most.
                      </p>
                    </div>
                  </div>
                </div> */}
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesDetails;
