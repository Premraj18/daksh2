import "./Gallery2.css";
import { useState } from "react";
import Slider from "react-slick";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Gallery2({ item }) {
  const NextArrow = ({ onClick }) => {
    return (
      <div className="arrow next" onClick={onClick}>
        <FaArrowRight />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div className="arrow prev" onClick={onClick}>
        <FaArrowLeft />
      </div>
    );
  };

  const [imageIndex, setImageIndex] = useState(0);

  const settings = {
    infinite: true,
    lazyLoad: true,
    speed: 300,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setImageIndex(next),
  };

  return (
    <div className="dabba">
      <Slider {...settings}>
        {item.map((img, idx) => (
          <div key={img.id}  className={idx === imageIndex ? "slide activeSlide" : "slide"}>
            <img src={img.imgUrl} alt={img} className="mt-5 w-full h-[90%] border-2 rounded-xl border-lime-600 "/>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Gallery2;