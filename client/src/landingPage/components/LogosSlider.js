import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules"; // Only use Autoplay module
import "./LogosSlider.css";

const logos = [
  // SVG logos directly embedded
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100">
    <circle cx="50" cy="50" r="40" fill="none" stroke="white" strokeWidth="5" />
    <text x="50%" y="50%" fontSize="16" fill="white" textAnchor="middle" dy=".3em">
      Logo 1
    </text>
  </svg>,
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100">
    <circle cx="50" cy="50" r="40" fill="none" stroke="white" strokeWidth="5" />
    <text x="50%" y="50%" fontSize="16" fill="white" textAnchor="middle" dy=".3em">
      Logo 2
    </text>
  </svg>,
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100">
    <circle cx="50" cy="50" r="40" fill="none" stroke="white" strokeWidth="5" />
    <text x="50%" y="50%" fontSize="16" fill="white" textAnchor="middle" dy=".3em">
      Logo 3
    </text>
  </svg>,
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100">
    <circle cx="50" cy="50" r="40" fill="none" stroke="white" strokeWidth="5" />
    <text x="50%" y="50%" fontSize="16" fill="white" textAnchor="middle" dy=".3em">
      Logo 4
    </text>
  </svg>,
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100">
    <circle cx="50" cy="50" r="40" fill="none" stroke="white" strokeWidth="5" />
    <text x="50%" y="50%" fontSize="16" fill="white" textAnchor="middle" dy=".3em">
      Logo 5
    </text>
  </svg>,
];

const LogosSlider = () => {
  return (
    <div className="logos-slider-section">
      <h2 className="slider-title">Our Partners</h2>
      <Swiper
        modules={[Autoplay]} // Only use the Autoplay module
        slidesPerView={5}
        spaceBetween={20}
        autoplay={{ delay: 3000, disableOnInteraction: false }} // Slower autoplay with 5s delay
        breakpoints={{
          320: { slidesPerView: 2, spaceBetween: 10 }, // Small screens
          768: { slidesPerView: 3, spaceBetween: 15 }, // Tablets
          1024: { slidesPerView: 5, spaceBetween: 20 }, // Desktops
        }}
      >
        {logos.map((logo, index) => (
          <SwiperSlide key={index}>
            <div className="logo-image">{logo}</div> {/* Display SVG directly */}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default LogosSlider;
