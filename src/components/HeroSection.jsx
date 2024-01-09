import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import {motion} from 'framer-motion'

const spanStyle = {
  padding: '20px',
  // background: '#efefef',
  color: '#000000'
}

const divStyle = {

}
const slideImages = [
  {
    url: '/crausal.jpg',
    caption: 'Slide 1'
  },
  {
    url: '/crausal.jpg',
    caption: 'Slide 2'
  },
  {
    url: '/crausal.jpg',
    caption: 'Slide 3'
  },
];

const HeroSection = () => {
  return (
    <div className="slide-container sm:mb-0 mb-12">
      <div className='h-[60vh] md:h-[90vh] ' style={{
        backgroundImage: "url(" + "/crausal.jpg" + ")",
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        // background: 'linear-gradient(to bottom, rgba(2, 2, 2, 0.633),rgba(2, 2, 2, 0.633))',
      }}>
        <div className='flex justify-center items-center h-full w-full' style={{
          background:'linear-gradient(to bottom, rgba(2, 2, 2, 0.533), rgba(2, 2, 2, 0.533),rgba(17, 52, 23, 0.433))'
        }}>
          <motion.span className='text-white w-28 sm:w-40 text-center sm:text-lg cursor-pointer  rounded-3xl p-1 sm:p-2' style={{backgroundColor:'rgba(6, 77, 18, 0.786)', border:'3px solid #65a30d'}}
            initial={{y:-600}}
            animate={{y:100}}
            transition={{duration:0.8,delay:1}}
          >Support us</motion.span>
        </div>
        {/* <Slide duration={4000}>
         {slideImages.map((slideImage, index)=> (
            <div key={index}>
              <div className='h-[40vh] md:h-[90vh]' style={{ ...divStyle, 'backgroundImage': `url(${slideImage.url})`, backgroundPosition:'center' }}>
                <span style={spanStyle}>{slideImage.caption}</span>
              </div>
            </div>
          ))} 
        </Slide> */}
      </div>
    </div>
  )
}

export default HeroSection