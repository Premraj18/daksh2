import React, { useMemo } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Data = [
  {
    id: "1",
    title: "Detail",
    description: "About the Invester",
    imgUrl: "/sponser/img1.png"
  },
  {
    id: "2",
    title: "Detail",
    description: "About the Invester",
    imgUrl: "/sponser/img2.png"
  },
  {
    id: "3",
    title: "Detail",
    description: "About the Invester",
    imgUrl: "/sponser/img3.png"
  },
  {
    id: "4",
    title: "Detail",
    description: "About the Invester",
    imgUrl: "/sponser/img4.png"
  },
  {
    id: "5",
    title: "Detail",
    description: "About the Invester",
    imgUrl: "/sponser/img5.png"
  },
  {
    id: "6",
    title: "Detail",
    description: "About the Invester",
    imgUrl: "/sponser/img6.png"
  },
  {
    id: "7",
    title: "Detail",
    description: "About the Invester",
    imgUrl: "/sponser/img7.png"
  }
]

function SponserCard() {

  const settings = useMemo(() => {
    return {
      autoplay: true,
      speed: 2500,
      autoplaySpeed: 1500,
      cssEase: "linear",
      dots: true,
      infinite: true,
      arrows: false,
      slidesToShow: 4,
      slidesToScroll: 1,
      vertical: false,
      horizontalSwiping: true,
      swipeToSlide: true,
      pauseOnHover: true,
      variableWidth: false,

      responsive:[{
        breakpoint:600,
        settings:{
            slidesToShow:2,
            speed: 3500,
            autoplaySpeed: 2000,
        }
    }]
      
    };
  }, []);
  return (
    <div className=' w-auto'>
      <Slider {...settings}>
        {Data.map((d) => (
          <div key={d.id} className="h-40 w-full rounded overflow-hidden flex flex-col items-center justify-center">
            <img className="w-40 md:w-40 m-auto" src={d.imgUrl} alt="Sunset in the mountains" />
            <div className="px-6 py-4">
              <p className="text-gray-100 text-center text-base  md:text-xl">
                {d.description}
              </p>
            </div>

          </div>
        ))}

      </Slider>

    </div>
  );
}
export default SponserCard

