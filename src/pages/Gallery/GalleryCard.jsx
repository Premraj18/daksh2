import React, { useState } from 'react'
import { motion } from 'framer-motion'
import "./Gallery2.css";
import Slider from "react-slick";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const variants = {
    initial: {
        x: -500,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 0.2,
            staggerChildren: 0.1,
        },
    },
}

const GalleryCard = ({ item }) => {
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

        responsive:[{
            breakpoint:557,
            settings:{
                slidesToShow:1,
            }
        }]
      };
    
      return (
        <div className="dabba w-full mx-auto">
          <Slider {...settings}>
            {item.map((img, idx) => (
              <div key={img.id}  className={idx === imageIndex ? "slide activeSlide" : "slide"}>
                <img src={img.imgUrl} alt={img} className="mt-[-80px] sm:mt-6 sm:ml-2  w-[200px] h-[170px] sm:h-[90%] sm:w-full border-2 rounded-xl border-lime-600 "/>
              </div>
            ))}
          </Slider>
        </div>
      );
}

export default GalleryCard
