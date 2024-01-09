import React, { useRef, useState } from 'react'
import Card from './Card'
import Data from './data.json'
import Layout from '../../components/Layout'
import { EffectFade, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Achivement = () => {

    return (
        <Layout>
            <>
                <Swiper
                    spaceBetween={30}
                    effect={'fade'}
                    navigation={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[EffectFade, Navigation, Pagination]}
                    className="w-full h-full"
                >
                    <SwiperSlide className='bg-cover bg-no-repeat bg-center'>
                        <div className="w-full flex flex-col">
                            <div className='h-[120vh]' style={{border:"2px solid red"}}>
                                <img src="/crausal.jpg" alt="" className='h-full w-full overflow-hidden' />
                            </div>
                            <div className='flex h-[100vh] flex-wrap gap-x-10 justify-center' style={{border:'2px solid red'}}>
                                <div className='w-2/5 border-2 border-lime-700'>
                                    <img src="/about.jpg" alt="" />
                                </div>
                                <div className='w-2/5 border-2 border-lime-700'>

                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='bg-cover bg-no-repeat bg-center'>
                        <img src="https://swiperjs.com/demos/images/nature-2.jpg" className='w-full block' />
                    </SwiperSlide>
                    <SwiperSlide className='bg-cover bg-no-repeat bg-center'>
                        <img src="https://swiperjs.com/demos/images/nature-3.jpg" className='w-full block' />
                    </SwiperSlide>
                    <SwiperSlide className='bg-cover bg-no-repeat bg-center'>
                        <img src="https://swiperjs.com/demos/images/nature-4.jpg" className='w-full block' />
                    </SwiperSlide>
                </Swiper>
            </>
        
        </Layout>
    )
}

export default Achivement
