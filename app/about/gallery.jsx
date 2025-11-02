"use client";

const galleryData = {
  galleryImage: [
    { image: "/img/banner/img5.jpg" },
    { image: "/img/banner/img1.jpeg" },
    { image: "/img/rooms/quadruple-standard-deluxe/banner.jpg" },
    { image: "/img/banner/img4.jpg" },
  ],
};

const { galleryImage } = galleryData;

const Gallery = () => {
  return (
    <>
      <div className="gallery__area section-padding pb-0 overflow-hidden">
        <div className="container-fluid p-0">
          <div className="row">
            {galleryImage.map((item, index) => (
              <div key={index} className="col-sm-3 sm-mb-10">
                <div className="gallery__area-item">
                  <img className="w-100" src={item.image} alt="image" style={{height:'300px', objectFit:'cover'}}/>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;
