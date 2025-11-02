import teams from "@/components/data/team";
import Image from "next/image";
import Social from "../socials/page";

const Team = () => {
  const teamItem = [
    'img/banner/img1.jpeg',
    'img/banner/img2.jpeg',
    'img/banner/img3.jpeg',
    'img/gallery/gallery_img2.jpg',
    'img/gallery/gallery_img1.jpg',
    'img/rooms/double-standard/banner.jpeg',
    'img/rooms/double-standard/img1.jpeg',
    'img/rooms/double-standard/img2.jpeg',
    'img/rooms/double-standard/img3.jpeg',
    'img/rooms/triple-standard/banner.jpeg',
    'img/rooms/triple-standard/img1.jpeg',
    'img/rooms/triple-standard/img2.jpeg',
    'img/rooms/triple-standard/img3.jpeg',
    'img/rooms/quadruple-standard/banner.jpg',
    'img/rooms/quadruple-standard/img1.jpg',
    // 'img/rooms/quadruple-standard/img2.jpeg',
  ]
  return (
    <div className="team__area section-padding">
      <div className="container">
        <div className="row mb-30">
          <div className="col-xl-12">
            <div className="team__area-title">
              <span className="subtitle__one">Our Gallery</span>
              {/* <h2>Our Rooms</h2> */}
            </div>
          </div>
        </div>
        <div className="row">
          {teamItem?.map((data) => (
              <div className="col-xl-4 col-lg-4 col-md-6" key={data}>
                <div className="team__area-item">
                    <div className="team__area-item-image mt-30">
                      <img alt="" src={data} style={{height:'250px', width:'100%',objectFit:'cover'}} />
                    </div>
                </div>
              </div>
              // <div className="col-xl-4 col-lg-4 col-md-6">
              //   <div className="team__area-item">
              //       <div className="team__area-item-image mt-30" >
              //         <Image alt="" src={data.image1} width={400} height={300} />
              //       </div>
              //   </div>
              // </div>
              // <div className="col-xl-4 col-lg-4 col-md-6">
              //   <div className="team__area-item">
              //       <div className="team__area-item-image mt-30">
              //         <Image alt="" src={data.image2} width={400} height={300} />
              //       </div>
              //   </div>
              // </div> 
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
