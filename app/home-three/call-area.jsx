const Callarea = () => {
  return (
    <div className="call__area">
      <div className="container">
        <div
          className="row align-items-center call__area-bg"
          // style={{backgroundImage: `url('/img/bg/call.jpg')`}}
        >
          <div className="col-xl-8">
            <div className="call__area-bg-left">
              <h2>Enjoy 10% off for direct bookings.</h2>
            </div>
          </div>
          
          <div className="col-xl-4">
            <div className="call__area-bg-right">
              <div className="call__area-bg-right-icon">
                <i className="fal fa-phone-alt"></i>
              </div>
              <div className="call__area-bg-right-content">
                <span>
                  <a href="tel:+918310815401">+91-8310815401/+91-9448422334</a>
                </span>
              </div>
            </div>
          </div>
          <div className="col-xl-4">
            <div className="call__area-bg-right">
              <div className="call__area-bg-right-icon">
                <img src="img/icon/whatsapp.png" style={{height: "45px",marginLeft: "-6px"}}/>
              </div>
              <div className="call__area-bg-right-content">
                <span>
                  <a href="#">+91-9448422334</a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Callarea;
