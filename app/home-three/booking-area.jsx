import { Col, Row } from "react-bootstrap";

const Bookingarea = () => {
  return (
    <div
      className="booking__area"
      style={{
        backgroundImage: `url('/img/next-stay.jpeg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-xl-8">
            <div className="booking__area-form">
              <h3>Silver Moon</h3>
              <p>
                TOTAL ROOMS 29, BANQUETS 2, WEDDING LAWN, POOLSIDE RESTAURANT,
                LOUNGE
              </p>
              <h4>Banquet Hall</h4>
              <div className="table-container">

              <table style={{ width: "100%" }}>
                <thead>
                  <tr>
                    <td>BANQUET NAME</td>
                    <td>ROYAL BLISS</td>
                    <td>THE MAJESTIC</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>AREA</td>
                    <td>2700 sq ft.</td>
                    <td>1276 sq ft.</td>
                  </tr>
                  <tr>
                    <td>MAXIMUM CAPACITY</td>
                    <td>350 pax</td>
                    <td>100 PAX</td>
                  </tr>
                </tbody>
              </table>
              </div>
              <h4>Rooms</h4>
              <div className="table-container">

              <table style={{ width: "100%" }}>
                <thead>
                  <tr>
                    <td>Room Name</td>
                    <td>Standard Room</td>
                    <td>Royal Room</td>
                    <td>Suite Room</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>AREA</td>
                    <td>325sq ft.</td>
                    <td>325 sq ft.</td>
                    <td>700 sq ft.</td>
                  </tr>
                  <tr>
                    <td>Facilities</td>
                    <td>
                      In Room Tea/Coffee Maker.
                      <br />
                      Access to Swimming Pool.
                    </td>
                    <td>
                      In Room Tea/Coffee Maker.
                      <br />
                      Access to Swimming Pool.
                    </td>
                    <td>
                      In Room Tea/Coffee Maker.
                      <br />
                      Access to Swimming Pool.
                    </td>
                  </tr>
                </tbody>
              </table>
              </div>
              <h4>Menu Highlights</h4>
              <div className="table-container">
                <table style={{ width: "100%" }}>
                  <thead>
                    <tr>
                      <td>Breakfast</td>
                      <td>Lunch</td>
                      <td>Dinner</td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>8.00 am – 10.30</td>
                      <td>12.00 – 3.30 pm</td>
                      <td>7.00 – 11.00</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h4>Resturant and Bar</h4>
              <Row>
                <Col xs={12}>
              <div className="table-container">

                  <table width={"100%"}>
                    <thead>
                      <tr>
                        <td> MADIRA LOUNGE-</td>
                        <td>Silver Moon's Kitchen- Poolside Restaurant</td>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Multi-Cuisine Lounge.</td>
                        <td>Multi-Cuisine Veg. Restaurant</td>
                      </tr>
                      <tr>
                        <td>Timings:- 11.30 am To 11.00 PM</td>
                        <td>Timings:- 12.00 To 11.00 Pm.</td>
                      </tr>
                    </tbody>
                  </table>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bookingarea;
